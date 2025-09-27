'use client';
import { useFormState } from 'react-dom';
import { useActionState } from 'react';
import { FormSubmit } from './form-submit';

export const PostForm = ({ onSubmit }) => {
	/* FormAction is the function where useFormState is listening on the 
	createPost method */
	const [formState, formAction] = useActionState(onSubmit, {});

	return (
		<form action={formAction}>
			<p className="form-control">
				<label htmlFor="title">Title</label>
				<input type="text" id="title" name="title" />
			</p>
			<p className="form-control">
				<label htmlFor="image">Image</label>
				<input
					type="file"
					accept="image/png, image/jpeg"
					id="image"
					name="image"
				/>
			</p>
			<p className="form-control">
				<label htmlFor="content">Content</label>
				<textarea id="content" name="content" rows="5" />
			</p>
			<p className="form-actions">
				<FormSubmit />
			</p>
			{formState?.errors && (
				<ul className={'form-errors'}>
					{formState.errors.map((error, index) => (
						<li key={index}>{error}</li>
					))}
				</ul>
			)}
		</form>
	);
};
