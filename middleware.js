import { NextResponse } from 'next/server';

// middleware.js is a reserved name in Next.js for defining middleware
export const middleware = (request) => {
	console.log(`middleware request`, request);
	// Forwards the incoming request to the next handler in the chain
	// return new NextResponse.next();

	// Sample redirect response
	// new NextResponse.redirect(new URL('/about-2', request.url));
};

export const config = {
	matcher: '/news',
};
