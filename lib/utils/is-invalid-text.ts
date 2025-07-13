export const isInvalidText = (text: string): boolean => {
	// guard clause to ensure we're not performing illegal operations on the variable
	const isTypeCheck = typeof text === 'string';

	return (
		!isTypeCheck || // invalid type
		text === null || // falsy value
		text === undefined || // falsy value
		text === '' || // falsy value
		text.trim() === '' // trimmed value is empty
	);
};
