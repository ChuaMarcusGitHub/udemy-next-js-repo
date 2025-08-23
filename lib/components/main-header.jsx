import Link from 'next/link';
import { NavLink } from './nav-link';

export const MainHeader = () => {
	const headerMap = [
		{ link: '/news', label: 'News' },
		{ link: '/archive', label: 'Archives' },
	];
	return (
		<header id="main-header">
			<div id="logo">
				<Link href="/">NextNews</Link>
			</div>
			<nav>
				<ul>
					{headerMap.map((header) => (
						<li key={`${header.link}`}>
							<NavLink href={header.link}>{header.label}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
