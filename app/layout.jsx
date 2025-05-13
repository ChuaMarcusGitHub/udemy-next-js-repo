import './globals.css';

// 'metadata' is a reserved keyword in Next.js 13.4+
export const metadata = {
	title: 'NextJS Course App',
	description: 'My First NextJS App',
};
const RootLayout = ({ children }) => {
	return (
		<html lang={'en'} className="">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
