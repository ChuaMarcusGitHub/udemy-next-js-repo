'use client';
import { notFound, useRouter } from 'next/navigation';
import { DUMMY_NEWS } from '@/dummy-news';
import React from 'react';

export default function InterceptedImagePage({ params }) {
	const router = useRouter();
	const { newsSlug } = React.use(params);
	const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

	if (!newsItem) {
		notFound(); // Triggers the closest not found function
	}

	const newsItemSlug = params.slug;
	return (
		<>
			<div className="modal-backdrop" onClick={router.back} />
			<dialog className="modal" open>
				<div className="fullscreen-image">
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	);
}
