import Link from 'next/link';
import style from './meals-grid.module.css';
export const MealsGrid = ({ meals }) => {
	return (
		<ul className={style.meals}>
			{meals.map((meal) => (
				<li key={`meal-${meal.id}`}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};
