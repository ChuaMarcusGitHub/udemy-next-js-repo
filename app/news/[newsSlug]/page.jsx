import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

export default function NewsDetailsPage({ params }) {
	const newsSlug = params.newsSlug;
	const newsItem = DUMMY_NEWS.find((item) => item.id === newsSlug);
	if (!newsItem) {
		notFound(); // Triggers the closest not found function
	}

	// This page will render the details of a specific news item based on the newsId parameter
	return (
		<article className={'news-article'}>
			<header>
				<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				<h1>{newsItem.title}</h1>
				<time>{newsItem.date}</time>
			</header>
			<p>{newsItem.content}</p>
		</article>
	);
}
