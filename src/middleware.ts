import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  return new NextResponse(
    `Host: ${host}\nPath: ${request.nextUrl.pathname}`
  );
}

export const config = {
  matcher: "/:path*",
};