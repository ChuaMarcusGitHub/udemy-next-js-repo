'use server';

import { saveMeal } from '@/lib/api-calls';
/*
		'use server' is a directive that tells Next.js that this function should only be executed on the server side.
		This is useful for functions that perform server-side operations, such as database queries or API calls.

		Requires 'use server' to be present in the file, and also requires the function to be async.
	 */
export const submitShareMeal = async (formData: FormData) => {
	const meal = {
		title: formData.get('title'),
		creator: formData.get('name'),
		creator_email: formData.get('email'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
	};

	console.log('meal', meal);
	await saveMeal(meal);
};

/* CRUD Operation for submit Share meal, saves to DB */
const saveMeals = () => {};
