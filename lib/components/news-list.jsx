import Link from 'next/link';

export const NewsList = ({ news }) => (
	<ul className="news-list">
		{news.map((newsItem) => (
			<li key={`news-${newsItem.id}`}>
				<Link href={`news/${newsItem.slug}`}>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
					<span>{newsItem.title}</span>
				</Link>
			</li>
		))}
	</ul>
);
