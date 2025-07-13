'use server';

import { saveMeal } from '@/lib/api-calls';
import { ErrorResponse } from '@/lib/types/error-response-types';
import { isInvalidText } from '@/lib/utils/is-invalid-text';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
/*
		'use server' is a directive that tells Next.js that this function should only be executed on the server side.
		This is useful for functions that perform server-side operations, such as database queries or API calls.

		Requires 'use server' to be present in the file, and also requires the function to be async.
	 */
export const submitShareMeal = async (_, formData) => {
	// _ is a placeholder for previous state
	const meal = {
		title: formData.get('title'),
		creator: formData.get('name'),
		creator_email: formData.get('email'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
	};

	// Validation check on BE
	for (let [key, value] of Object.entries(meal)) {
		if (isInvalidText(value)) {
			console.error(`Invalid value for ${key}:`, value);
			const errorMessage = `Invalid value for ${key}: ${value}`;
			return {
				code: 'INVALID_INPUT',
				status: 400,
				message: errorMessage,
			} as ErrorResponse;
		}
		// email check
		if (key === 'creator_email' && !value.includes('@')) {
			const errorMessage = `Invalid email pattern: ${value}`;
			return {
				code: 'INVALID_INPUT',
				status: 400,
				message: errorMessage,
			} as ErrorResponse;
		}
		if (key === 'image' && value.size === 0) {
			const errorMessage = `Image Data has invalid size: ${value.size}`;
			return {
				code: 'INVALID_INPUT',
				status: 400,
				message: errorMessage,
			} as ErrorResponse;
		}
	}

	console.log('meal', meal);
	await saveMeal(meal);
	revalidatePath('/meals'); // revalidate the meals page so that the cached data isn't used
	// revalidatePath('/meals', 'layout'); // revalidate the entire layout (which includes the children)
	redirect('/meals');
};
