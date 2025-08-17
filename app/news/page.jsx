import { DUMMY_NEWS } from '@/dummy-news';
import { NewsList } from '@/lib/components/news-list';

export default function NewsPage() {
	return (
		<>
			<h1>News Details Page</h1>
			<NewsList news={DUMMY_NEWS} />
		</>
	);
}
