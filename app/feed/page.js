import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// generateMetadata is a reserved keyword
export async function generateMetadata({ params, searchParams }) {
	const posts = await getPosts();
	const numberOfPosts = posts.length;
	return {
		tittle: `Brose all our ${numberOfPosts} posts.`,
		description: 'Browse all out posts',
	};
}
export default async function FeedPage() {
	const posts = await getPosts();
	return (
		<>
			<h1>All posts by all users</h1>
			<Posts posts={posts} />
		</>
	);
}
