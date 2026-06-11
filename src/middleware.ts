import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (host.startsWith("hire.")) {
    return NextResponse.redirect(
      "https://virendrashekhawat.com/hire/index.html"
    );
  }

  return NextResponse.next();
}