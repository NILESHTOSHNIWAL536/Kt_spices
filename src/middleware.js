import { verifyToken } from "./utils/jwt";
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value.trim().toString();
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // If valid → allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/home"],
  runtime: "nodejs",
  unstable_allowDynamic: ["**/node_modules/lodash/**/*.js"],
};
