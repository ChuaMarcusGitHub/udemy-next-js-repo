import Link from 'next/link';
import { useMemo } from 'react';

const BlogDetailPage = ({ params }) => {
	const blogId = useMemo(() => {
		const [, id] = params.blogId.split('-');
		return id;
	}, [params]);
	return (
		<main>
			<h1>{`Blog Post ${blogId}`}</h1>
		</main>
	);
};

export default BlogDetailPage;
