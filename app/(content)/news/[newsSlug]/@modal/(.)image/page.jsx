import { notFound } from 'next/navigation';
import React from 'react';
import { getNewsItem } from '@/lib/utils';
import { Modalbackdrop } from '@/lib/components/modal-backdrop';

export default async function InterceptedImagePage({ params }) {
	const newsSlug = params.newsSlug;
	const newsItem = await getNewsItem(newsSlug);

	if (!newsItem) {
		notFound(); // Triggers the closest not found function
	}

	return (
		<>
			<Modalbackdrop />
			<dialog className="modal" open>
				<div className="fullscreen-image">
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</div>
			</dialog>
		</>
	);
}
