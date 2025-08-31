import { notFound } from 'next/navigation';
import { DUMMY_NEWS } from '@/dummy-news';
import { getNewsItem } from '@/lib/utils';
export default async function ImagePage({ params }) {
	const { newsSlug } = await params;
	const newsItem = await getNewsItem(newsSlug);

	if (!newsItem) {
		notFound(); // Triggers the closest not found function
	}

	const newsItemSlug = params.slug;
	return (
		<div className="fullscreen-image">
			<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
		</div>
	);
}
