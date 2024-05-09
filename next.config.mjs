/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dummyimage.com'
			},

			{
				protocol: 'https',
				hostname: 'ui-avatars.com'
			}
		]
	}
};

export default nextConfig;
