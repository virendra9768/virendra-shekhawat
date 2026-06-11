import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (host.startsWith("hire.")) {
    return NextResponse.rewrite(
      new URL("/hire", request.url)
    );
  }

  return NextResponse.next();
}