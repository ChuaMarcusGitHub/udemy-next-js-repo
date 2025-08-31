import { NewsList } from '@/lib/components/news-list';
import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
	getNewsForYearAndMonth,
} from '@/lib/utils/news';
import { getMonthLabel } from '@/lib/utils';
import Link from 'next/link';
import { Suspense } from 'react';

const FilterHeader = async ({ year, month }) => {
	const availableNewsYear = await getAvailableNewsYears();

	if (year && !availableNewsYear.includes(year)) {
		throw new Error('Invalid Year Filter');
	}

	const availableNewsMonth = await getAvailableNewsMonths(year);
	console.log('Available months for year', year, ':', availableNewsMonth);

	if (month && !availableNewsMonth.includes(month)) {
		throw new Error('Invalid Month Filter');
	}

	return (
		<header id={'archive-header'}>
			<nav>
				<ul>
					{availableNewsYear &&
						availableNewsYear.map((link) => (
							<li key={link}>
								<Link href={`/archive/${link}`}>{link}</Link>
							</li>
						))}
				</ul>
			</nav>
			<nav>
				<ul>
					{availableNewsMonth &&
						availableNewsMonth.map((month) => (
							<li key={month}>
								<Link href={`/archive/${year}/${month}`}>
									{getMonthLabel(month)}{' '}
								</Link>
							</li>
						))}
				</ul>
			</nav>
		</header>
	);
};

const FilteredNews = async ({ year, month }) => {
	let news = null;
	if (year && !month) {
		news = getNewsForYear(year);
	} else if (year && month) {
		news = await getNewsForYearAndMonth(year, month);
	}

	if (news && news.length > 0) {
		return <NewsList news={news} />;
	}

	return <p>No News found for the selected period</p>;
};
export default async function FilteredNewsPage({ params }) {
	const filter = params.filter;
	const year = filter?.[0]; // string
	const month = filter?.[1]; // string

	console.log('Filter params:', { filter, year, month });

	return (
		<div>
			<Suspense fallback={<p>Loading Lemon Headers</p>}>
				<FilterHeader year={year} month={month} />
			</Suspense>
			{/* News Content */}
			<Suspense fallback={<p>Loading Potato news...</p>}>
				<FilteredNews year={year} month={month} />
			</Suspense>
		</div>
	);
}
