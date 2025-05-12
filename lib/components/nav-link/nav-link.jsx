'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import style from './nav-link.module.css';

export const NavLink = ({ id, link, title }) => {
	const path = usePathname();
	const isActiveStyle = (link) =>
		path.startsWith(link) ? style.active : undefined;

	return (
		<li key={`nav-item-${id}`} data-testid={`nav-item-${id}`}>
			<Link href={link} className={isActiveStyle(link)}>
				{title}
			</Link>
		</li>
	);
};
