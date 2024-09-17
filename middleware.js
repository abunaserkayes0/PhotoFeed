import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from "negotiator";

let defaultLocale = 'en ';
let locales = ['en', 'bn'];


function getLocale(request) {
    let acceptedLanguage = request.headers.get('accept-language');
    // This is a simple implementation to get the preferred language.
    let headers = { 'accept-language': acceptedLanguage } ?? undefined;
    let language = new Negotiator({ headers }).language();

    return match(language, locales, defaultLocale);
}



export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    if (pathnameHasLocale) return;
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);

}



export const config = {
    matcher: [
        // Skip all internal paths (_next, assets, api)
        '/((?!api|assets|.*\\..*|_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}

