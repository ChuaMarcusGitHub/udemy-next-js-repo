'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavList = () => {
	const path = usePathname();
	const headerMap = [
		{ link: '/news', label: 'News' },
		{ link: '/archive', label: 'Archives' },
	];

	return (
		<nav>
			<ul>
				{headerMap.map((header) => (
					<li>
						<Link
							className={path.startsWith(header.link) ? 'active' : undefined}
							href={`${header.link}`}
						>
							{header.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
