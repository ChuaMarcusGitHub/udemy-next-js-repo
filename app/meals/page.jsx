import Link from 'next/link';
import React, { Suspense } from 'react';

import style from './page.module.css';
import { MealsGrid } from '@/lib/components/meals/meals-grid';
import { getMeals } from '@/lib/api-calls/meals/get-meals';
import { MealsLoadingPage } from './loading-out';

/**
 *  Async component
 */
const Meals = async () => {
	const meals = await getMeals();
	return <MealsGrid meals={meals} />;
};
const MealsPage = () => {
	/* 
		await the meals data that is performing a db call.
		because `MealsPage` is a server component, it can be declared async
		and await the data directly.
	 */

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
				<Suspense fallback={<MealsLoadingPage />}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
};
export default MealsPage;
