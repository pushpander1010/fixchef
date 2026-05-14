import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  // Redirect fixchef.com to www.fixchef.com
  if (host === 'fixchef.com' || host.startsWith('fixchef.com:')) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.hostname = 'www.fixchef.com';
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static assets and special files
    '/((?!_next/static|_next/image|favicon.ico|ads.txt|robots.txt|sitemap.xml).*)',
  ],
};
