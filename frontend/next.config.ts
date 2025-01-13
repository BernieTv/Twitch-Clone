import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const cspHeader = `
    script-src 'self' https://twitch-clone-ag5v.onrender.com;
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
