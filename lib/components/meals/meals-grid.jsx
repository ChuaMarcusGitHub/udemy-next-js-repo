import style from './meals-grid.module.css';
import { MealItem } from './meal-item';

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
