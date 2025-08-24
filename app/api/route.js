// route.js is a reserved name in Next.js for defining API routes
/**
 * Set up API-like route handlers
 */
export const GET = (request) => {
	console.log(`request`, request);
	return new Response('Hello, Next.js!');
};
