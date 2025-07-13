'use client'; // Use client has to be used so that it can catch all errors, including client side ones

const MealError = ({ error }) => {
	return (
		<main className="error">
			<h1>Error</h1>
			<p>{`Failed to create meal:`}</p>
			<p>{`${error}`}</p>
		</main>
	);
};
export default MealError;
