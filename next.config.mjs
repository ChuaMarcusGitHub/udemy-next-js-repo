/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// essentially whitelisting res.cloudinary.com so that NextImage will not throw a compile error for network security reasons
		remotePatterns: [{ hostname: 'res.cloudinary.com' }],
	},
};

export default nextConfig;
