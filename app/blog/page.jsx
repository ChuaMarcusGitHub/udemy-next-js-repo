import Link from 'next/link';
import { useState } from 'react';
const BlogPage = () => {
	return (
		<main>
			<h1>Blogs</h1>
			<p>
				<Link href={`/blog/id-1`}>Blog Post 1</Link>
			</p>
			<p>
				<Link href={`/blog/id-2`}>Blog Post 2</Link>
			</p>
			<p>
				<Link href={`/blog/id-3`}>Blog Post 3</Link>
			</p>
		</main>
	);
};
export default BlogPage;
