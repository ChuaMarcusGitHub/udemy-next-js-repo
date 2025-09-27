import { PostForm } from '@/components/post-form';
import { createPost } from '@/actions/posts';

export default function NewPostPage() {
	// normal function declaration to hoist the function at runtime

	return (
		<>
			<h1>Create a new post</h1>
			<PostForm onSubmit={createPost} />
		</>
	);
}
