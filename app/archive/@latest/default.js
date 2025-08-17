import { NewsList } from '@/lib/components/news-list';
import { getLatestNews } from '@/lib/utils/news';

/* default.js/ts route is used for handling situations where the 
    parent's parallel routes need not necessarily be the same for each other.
    in this case. @archive/[year] exists as a necessity to its parent. but @latest
    does not need this [year]. So in its place we instead use `default.js/ts`
*/
export default function LatestNewsPage() {
	const latestNews = getLatestNews();
	return (
		<>
			<h2>Latest New</h2>
			<NewsList news={latestNews} />
		</>
	);
}
