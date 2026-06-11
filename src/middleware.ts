import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (host.includes("hire.virendrashekhawat.com")) {
    return new NextResponse("HIRE SUBDOMAIN DETECTED");
  }

  return NextResponse.next();
}