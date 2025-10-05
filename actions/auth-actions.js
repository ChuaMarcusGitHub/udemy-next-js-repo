'use server';

export async function signup(prevState, formData) {
	const errors = {};
	console.log('Type →', Object.prototype.toString.call(formData));
	console.log('Entries →', Array.from(formData.entries()));
	const email = formData.get('email');
	const password = formData.get('password');

	if (!email.includes('@')) {
		errors.email = 'Please enter a valid email address';
	}
	if (password.trim().length < 8) {
		errors.password = 'Password must be at least 8 characters long.';
	}

	if (Object.keys(errors).length > 0) {
		return {
			errors,
		};
	}
	return { ok: true };
}
