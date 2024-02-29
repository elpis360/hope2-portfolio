import { NextRequest, NextResponse } from "next/server";
import { COOKIES } from "./utils/constants";

export async function middleware(req: NextRequest) {
  const { cookies, nextUrl } = req;

  // GET ACCESS TOKEN FROM COOKIES
  const token = cookies.get(COOKIES.auth);

  const authRoutes = nextUrl.pathname.startsWith("/auth");
  console.log(nextUrl.pathname);
  const ALLOWEDROUTES = ["/", "/projects", "/contact", "/about"];
  const allowedRoute = ALLOWEDROUTES.includes(nextUrl.pathname);

  const url = req.nextUrl.clone();

  if (!token && !authRoutes && !allowedRoute) {
    url.search = `next=${url.pathname}`;
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|assets).*)",
  ],
};
