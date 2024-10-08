import { NextURL } from "next/dist/server/web/next-url"
import { NextRequest, NextResponse } from "next/server"

export const config = {
	matcher: ["/", "/dashboard/:path*"],
	name: "middleware",
}

export function middleware(req: NextRequest) {
	const requestHeaders = new Headers(req.headers) // Init new request headers
	requestHeaders.set("x-next-pathname", req.nextUrl.pathname) // Set the new header for pathname

	const hasToken = req.cookies.has("SPACEET_TOKEN")
	const url = req.nextUrl.clone() // Clone the URL to modify it
	const isOnDashboard = url.pathname.startsWith("/dashboard")

	const redirectResponse = (url: string | NextURL) => {
		const response = NextResponse.redirect(url)
		response.headers.set("x-middleware-cache", "no-cache") // !FIX: Disable caching
		return response
	}

	// Redirect users with a token to the dashboard
	if (hasToken && !isOnDashboard) {
		url.pathname = "/dashboard"
		return redirectResponse(url)
	}

	// Redirect users without a token to the signin page
	if (!hasToken && isOnDashboard) {
		url.pathname = "/"
		// return redirectResponse(url)
	}

	return NextResponse.next()
}
