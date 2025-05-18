import sql from 'better-sqlite3';

//.run() is used for Update and Insert operations
//.all() is used for Select (get) operations
//.get() is used for single get operations
const db = sql('meals.db');

/**
 * Async getMeals function to fetch meals from the database.
 * async is used to showcase that function can be asynchronous, and in turn the
 * component calling it can be declared async as well. (see meals/page.jsx)
 *
 * However, this function does not need to be async, as sqlite3 already handles the
 * asynchronous nature of the database calls.
 * @returns List of meals from the database.
 */
export const getMeals = async () => {
	// to Simulate a delay, we can use a timeout
	await new Promise((resolve) => setTimeout(resolve, 2000));

	// throw new Error('Error fetching meals');

	return db.prepare('SELECT * FROM meals').all();
};
