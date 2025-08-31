import { NewsList } from '@/lib/components/news-list';
import { getAllNews } from '@/lib/utils/news';

export default async function NewsPage() {
	const news = await getAllNews();

	return (
		<>
			<h1>News Details Page</h1>
			{news && <NewsList news={news} />}
		</>
	);
}
