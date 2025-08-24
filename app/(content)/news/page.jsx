'use client';
import { NewsList } from '@/lib/components/news-list';
import React from 'react';

export default function NewsPage() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [news, setNews] = React.useState();
	React.useEffect(() => {
		const fetchNews = async () => {
			setIsLoading(true);
			const response = await fetch('http://localhost:8080/news');

			if (!response.ok) {
				setError('Failed to fetch news');
				setIsLoading(false);
				return;
			}

			setIsLoading(false);
			const tempNews = await response.json();
			setIsLoading(false);
			setNews(tempNews);
		};

		fetchNews();
	}, []);

	if (isLoading) {
		<p>Loading...</p>;
	}

	if (error) {
		<p>{error}</p>;
	}

	let newsContent;
	if (news) {
		newsContent = <NewsList news={news} />;
	}

	return (
		<>
			<h1>News Details Page</h1>
			{newsContent}
		</>
	);
}
