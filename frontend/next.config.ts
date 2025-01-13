import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const cspHeader = `
    default-src 'self' https://twitch-clone-ag5v.onrender.com/graphql;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://twitch-clone-ag5v.onrender.com https://twitch-clone-ag5v.onrender.com/graphql;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const withNextIntl = createNextIntlPlugin('./src/libs/i18n/request.ts')

const nextConfig: NextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: cspHeader.replace(/\n/g, '')
					}
				]
			}
		]
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bekzod-twitch-clone.s3.us-east-1.amazonaws.com'
			}
		]
	}
}

export default withNextIntl(nextConfig)
