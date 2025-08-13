import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''; 

  const hostname = host.split(':')[0];       
  const parts = hostname.split('.');        

  if (parts.length > 1 && parts[0] !== 'www') {
    const subdomain = parts[0];
    const url = req.nextUrl.clone();
    url.pathname = `/event/${subdomain}`;   
    return NextResponse.rewrite(url);
  }

  // Otherwise, main domain → no rewrite
  return NextResponse.next();
}
