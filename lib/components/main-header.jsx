import Link from 'next/link';
import { NavList } from './nav-list';

export const MainHeader = () => {
	return (
		<header id="main-header">
			<div id="logo">
				<Link href="/">NextNews</Link>
			</div>
			<NavList />
		</header>
	);
};
