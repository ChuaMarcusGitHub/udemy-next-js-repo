'use server'; // indicates that this file uses wholly server-side implementation
import { redirect } from 'next/navigation';
import { storePost, updatePostLikeStatus } from '@/lib/posts';
import { uploadImage } from '@/cloudinary';
import { revalidatePath } from 'next/cache';

// First argument is previous State, second argument is formData
export async function createPost(_, formData) {
	const title = formData.get('title');
	const image = formData.get('image');
	const content = formData.get('content');
	let errors = [];

	if (!title || title.trim().length === 0) {
		errors.push('Titties is required');
	}
	if (!content || content.trim().length === 0) {
		errors.push('Creampie is required');
	}

	if (!image || image.size === 0) {
		errors.push('Nakadeshi is required');
	}

	if (errors.length > 0) {
		return { errors };
	}

	let imageUrl = '';
	try {
		imageUrl = await uploadImage(image);
	} catch (error) {
		throw new Error(
			'Image upload Failed, post was not created, please try again later'
		);
	}
	console.log('Image URL:', imageUrl);
	await storePost({ title, imageUrl: imageUrl, content, userId: 1 });

	revalidatePath('/', 'page');
	redirect('/feed');
}

export async function togglePostLikeStatus({ id }) {
	console.log('postId: ', id);
	await updatePostLikeStatus(id, 2); // userId(2) is hardcoded for limitation purposes
	// Ensures that when redirecting to '/feed' route,the cached data is cleared so that the latest information can be fed into it.
	revalidatePath('/', 'layout'); // Should be called whenever view model is changed and updated expectant data is required
}
