import { NextRequest, NextResponse } from "next/server";
import { COOKIES } from "./utils/constants";

export async function middleware(req: NextRequest) {
  const { cookies, nextUrl } = req;

  // GET ACCESS TOKEN FROM COOKIES
  const token = cookies.get(COOKIES.auth);

  console.log(nextUrl.pathname);
  const ALLOWEDROUTES = ["/", "/projects", "/contact", "/about", "/login"];
  const allowedRoute = ALLOWEDROUTES.includes(nextUrl.pathname);

  const url = req.nextUrl.clone();

  if (!token && !allowedRoute) {
    url.search = `next=${url.pathname}`;
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets).*)"],
};
