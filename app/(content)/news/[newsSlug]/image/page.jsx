import { notFound } from 'next/navigation';
import { DUMMY_NEWS } from '@/dummy-news';
export default async function ImagePage({ params }) {
	const { newsSlug } = await params;
	const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

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
