import Link from 'next/link';
import React from 'react';

import style from './page.module.css';
import { MealsGrid } from '@/lib/components/meals/meals-grid';

const MealsPage = () => {
	return (
		<>
			<header className={style.header}>
				<h1>
					Delicious meals, created
					<span className={style.highlight}> by you</span>
				</h1>
				<p>
					Choose your favourite recipe and cook it yourself. It is easy and fun!
				</p>
				<p className={style.cta}>
					<Link href={'/meals/share'}>Share your favourite recipe</Link>
				</p>
			</header>
			<main className={style.main}>
				<MealsGrid meals={[]} />
			</main>
		</>
	);
};
export default MealsPage;
