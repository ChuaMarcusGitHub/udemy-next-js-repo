import classes from './page.module.css';
import { submitShareMeal } from '@/lib/actions/share-meals/submit-share-meal';
import MealsFormSubmit from '@/lib/components/meals/meals-form-submit';

const ShareMealPage = () => {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Share your <span className={classes.highlight}>favorite meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={classes.main}>
				<MealsFormSubmit />
			</main>
		</>
	);
};
export default ShareMealPage;
