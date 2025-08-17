'use client';
import { redirect } from 'next/navigation';

export default function HomePage() {
	const handleRoute = (newRoute) => {
		redirect(newRoute);
	};
	return (
		<div id="home">
			<h1>Next.js Routing & Page Rendering</h1>
			<a onClick={() => handleRoute('/news')}>Go to News</a>
		</div>
	);
}
