//== Utils
import { NextResponse } from 'next/server';
import { i18n } from '../i18n.config';
//== Types
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);
  const savedLocale = request.cookies.get('your-locale')?.value;
  const currentLocale = request.nextUrl.pathname.split('/')[1];

  // if (!savedLocale) {
  //   response.cookies.set('your-locale', currentLocale, {
  //     path: '/',
  //   })
  // }

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = savedLocale || currentLocale || 'en';
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
  }

  // Redirect if current locale is not same as saved locale
  if ((savedLocale && currentLocale) !== savedLocale) {
    const lang = pathname.split('/')[1];
    const purePathname = pathname.substring(pathname.indexOf(lang) + 3);
    return NextResponse.redirect(new URL(`/${savedLocale}${purePathname.startsWith('/') ? '' : '/'}${purePathname}`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/` so infinite redirect loop doesn't happen...
  matcher: ['/((?!api|_next/static|_next/image|favicon.png|imgs|fonts|css|webfonts|favicon).*)']
}