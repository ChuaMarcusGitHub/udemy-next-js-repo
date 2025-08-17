import { NewsList } from '@/lib/components/news-list';
import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYearAndMonth,
} from '@/lib/utils/news';
import { getMonthLabel } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

export default function FilteredNewsPage({ params }) {
	const filter = params.filter;
	const { year, month } = React.useMemo(() => {
		const year = filter?.[0]; // string
		const month = filter?.[1]; // string

		if (year && !getAvailableNewsYears().includes(Number(year))) {
			throw new Error('Invalid Year Filter');
		}
		if (month && !getAvailableNewsMonths(year).includes(Number(month))) {
			throw new Error('Invalid Month Filter');
		}
		return { year, month };
	}, [filter]);

	const links = getAvailableNewsYears();
	const monthArticle = React.useMemo(
		() => getAvailableNewsMonths(year),
		[year]
	);

	const defaultNewsContent = <p>No News found for the selected period</p>;
	const newsContent = ({ year, month }) => {
		const news = getNewsForYearAndMonth(year, month);
		console.log(`news for ${year}-${month}:`, news);
		return <NewsList news={news} />;
	};

	const MemoizedNewsContent = React.memo(newsContent);

	return (
		<>
			<header id={'archive-header'}>
				<nav>
					<ul>
						{links.map((link) => (
							<li key={link}>
								<Link href={`/archive/${link}`}>{link}</Link>
							</li>
						))}
					</ul>
				</nav>
				<nav>
					<ul>
						{monthArticle &&
							monthArticle.map((month) => (
								<li key={month}>
									<Link href={`/archive/${year}/${month}`}>
										{getMonthLabel(month)}{' '}
									</Link>
								</li>
							))}
					</ul>
				</nav>
			</header>
			{/* News Content */}
			{year || (year && month) ? (
				<MemoizedNewsContent year={year} month={month} />
			) : (
				defaultNewsContent
			)}
		</>
	);
}
