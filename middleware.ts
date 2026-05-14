import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  if (host === 'fixchef.com') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = 'www.fixchef.com';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|ads.txt).*)'],
};
