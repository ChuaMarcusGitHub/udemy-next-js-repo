import logoImage from '@/assets/logo.png';
import Link from 'next/link';
import { navItems } from '../constants/nav-item';
import style from './main-header.module.css';
import Image from 'next/image';
import { MainHeaderBackground } from './main-header-background';
import { NavLink } from './nav-link';

export const MainHeader = () => {
	return (
		<>
			<MainHeaderBackground />
			<header data-testid={'main-header'} id={'main-header'}>
				<Link href={'/'} className={style.logo}>
					<Image src={logoImage} alt={'A plate with food on it'} />
					Next Level Food
				</Link>
				<nav className={style.nav}>
					<ul>
						{navItems.map((navItem, id) => (
							<NavLink {...navItem} id={id} key={`nav-link-${id}`} />
						))}
					</ul>
				</nav>
			</header>
		</>
	);
};
