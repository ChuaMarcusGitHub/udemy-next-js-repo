import { getMealDetail } from '@/lib/api-calls';
import style from './page.module.css';
import Image from 'next/image';
import { Suspense } from 'react';
import { MealsLoadingPage } from '../loading-out';
import { notFound } from 'next/navigation';

const MealDetailsPage = async ({ params }) => {
	const { mealId } = params;
	const details = await getMealDetail(mealId);

	if (!details) {
		return notFound(); // calls the closest notfound/error page.
	}

	const instructions = details.instructions.replace(/\n/g, '<br />');

	return (
		<Suspense fallback={<MealsLoadingPage />}>
			<header className={style.header}>
				<div className={style.image}>
					<Image src={details.image} alt={details.title} fill />
				</div>
				<div className={style.headerText}>
					<h1>{details.title ?? '-'}</h1>
					<p className={style.creator}>
						by{' '}
						<a href={`mailto:${details.creator_email}`}>
							{details.creator ?? '-'}
						</a>
					</p>
					<p className={style.summary}>{details.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={style.instructions}
					dangerouslySetInnerHTML={{
						__html: instructions,
					}}
				/>
			</main>
		</Suspense>
	);
};
export default MealDetailsPage;
