import { type NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
	const { url, cookies, nextUrl } = request

	const session = cookies.get('session')?.value

	const isAuthRoute = nextUrl.pathname.startsWith('/account')
	const isDeactivateRoute = nextUrl.pathname === '/account/deactivate'
	const isDashboardRoute = nextUrl.pathname.startsWith('/dashboard')

	if (!session && isDashboardRoute) {
		return NextResponse.redirect(new URL('/account/login', url))
	}

	if (!session && isDeactivateRoute) {
		return NextResponse.redirect(new URL('/account/login', url))
	}

	if (session && isAuthRoute && !isDeactivateRoute) {
		return NextResponse.redirect(new URL('/dashboard/settings', url))
	}

	const cspHeader = `
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://twitch-clone-ag5v.onrender.com https://twitch-clone-ag5v.onrender.com/graphql;
`
	// Replace newline characters and spaces
	const contentSecurityPolicyHeaderValue = cspHeader
		.replace(/\s{2,}/g, ' ')
		.trim()

	const requestHeaders = new Headers(request.headers)

	requestHeaders.set(
		'Content-Security-Policy',
		contentSecurityPolicyHeaderValue
	)

	const response = NextResponse.next({
		request: {
			headers: requestHeaders
		}
	})

	response.headers.set(
		'Content-Security-Policy',
		contentSecurityPolicyHeaderValue
	)

	return response
}

export const config = {
	matcher: ['/account/:path*', '/dashboard/:path*']
}
