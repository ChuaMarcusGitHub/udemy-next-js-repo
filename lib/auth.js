import { Lucia } from 'lucia';
import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite';
import db from './db';
import { cookies } from 'next/headers';

const adapter = new BetterSqlite3Adapter(db, {
	user: 'users', // using the users table from the db
	session: 'sessions', // table session is referred
});
const lucia = new Lucia(adapter, {
	sessionCookie: {
		expires: false,
		attributes: {
			secure: process.env.NODE_ENV === 'production', // so website only works on https
		},
	},
});

export async function createAuthSession(userId) {
	const session = await lucia.createSession(userId, {});
	const sessionCookie = lucia.createSessionCookie(session.id);

	await cookies().set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
	); // access cookies and set it (need to await from next 15.^)
}

/**
 * Check if incoming request is from an authenticated user
 */
export const verifyAuth = async () => {
	const sessionCookie = await cookies().get(lucia.sessionCookieName);
	if (!sessionCookie) {
		return {
			user: null,
			session: null,
		};
	}

	const sessionId = sessionCookie.value;

	if (!sessionId) {
		return {
			user: null,
			session: null,
		};
	}

	const result = await lucia.validateSession(sessionId);

	try {
		if (result.session && result.session.fresh) {
			// refresh the session
			const sessionCookie = lucia.createBlankSessionCookie(result.session.id);
			await cookies().set(
				sessionCookie.name,
				sessionCookie.value,
				sessionCookie.attributes
			); // access cookies and set it (need to await from next 15.^)
		}

		if (!result.session) {
			const sessionCookie = lucia.createBlankSessionCookie();
			cookies.set(
				sessionCookie.name,
				sessionCookie.value,
				sessionCookie.attributes
			);
		}
	} catch {}
	return result;
};

export const destroySession = async () => {
	const { session } = await verifyAuth();

	if (!session) {
		return {
			error: 'Unauthorized!',
		};
	}

	await lucia.invalidateSession(session.id);
};
