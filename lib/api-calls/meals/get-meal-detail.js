import sql from 'better-sqlite3';

const db = sql('meals.db');

export const getMealDetail = async (mealId) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const details = db.prepare(`SELECT * FROM meals WHERE id = ?`).get(mealId);
	return details;
};
