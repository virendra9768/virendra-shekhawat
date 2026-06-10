import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (host.startsWith("hire.")) {
    return NextResponse.rewrite(
      new URL("/hire/index.html", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};