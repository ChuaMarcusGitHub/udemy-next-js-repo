'use server';

import { createAuthSession, destroySession } from '@/lib/auth';
import { hashUserPassword, verifyPassword } from '@/lib/hash';
import { createUser, getUserByEmail } from '@/lib/user';
import { redirect } from 'next/navigation';

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
	const hashedPassword = hashUserPassword(password);

	try {
		const userId = createUser(email, hashedPassword);
		createAuthSession(userId);
		redirect('/training');
	} catch (error) {
		if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
			return {
				errors: {
					email:
						'It seems like an account for the chosen email alreadyy exists',
				},
			};
		}
		throw error;
	}
}

export async function login(prevState, formData) {
	const errors = {};
	const email = formData.get('email');
	const password = formData.get('password');

	const existingUser = getUserByEmail(email);
	if (!existingUser) {
		console.error('usernot found');
		return {
			errors: {
				email: 'Could not authenticate user, please check your credentials',
			},
		};
	}
	const isPasswordValid = verifyPassword(existingUser.password, password);

	if (!isPasswordValid) {
		return {
			errors: {
				password: 'Could not authenticate user, please check your credentials',
			},
		};
	}
	// validation success
	createAuthSession(existingUser.id);
	redirect('/training');
}

export async function auth(mode, prevState, formData) {
	if (mode === 'login') {
		return login(prevState, formData);
	}
	return signup(prevState, formData);
}

export async function logout() {
	await destroySession();
	redirect('/');
}
