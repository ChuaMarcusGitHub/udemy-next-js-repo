'use client';

import { ImagePicker } from '@/lib/components/images/image-picker';
import classes from './meals-form-submit.module.css';
import { submitShareMeal } from '@/lib/actions';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const MealsFormSubmit = () => {
	const [state, formAction] = useActionState(submitShareMeal, {
		message: null,
	});
	const { pending } = useFormStatus();
	const submitText = pending ? 'Sharing...' : 'Share Meal';

	return (
		<form className={classes.form} action={formAction}>
			<div className={classes.row}>
				<p>
					<label htmlFor="name">Your name</label>
					<input type="text" id="name" name="name" required />
				</p>
				<p>
					<label htmlFor="email">Your email</label>
					<input
						type="email"
						id="email"
						autoComplete="true"
						name="email"
						required
					/>
				</p>
			</div>
			<p>
				<label htmlFor="title">Title</label>
				<input type="text" id="title" name="title" required />
			</p>
			<p>
				<label htmlFor="summary">Short Summary</label>
				<input type="text" id="summary" name="summary" required />
			</p>
			<p>
				<label htmlFor="instructions">Instructions</label>
				<textarea
					id="instructions"
					name="instructions"
					rows="10"
					required
				></textarea>
			</p>
			<ImagePicker name={'image'} label={'your-image'} alt={'image-for-meal'} />
			{state.message && <p>{state.message}</p>}
			<p className={classes.actions}>
				<button type="submit" disabled={pending}>
					{submitText}
				</button>
			</p>
		</form>
	);
};

export default MealsFormSubmit;
