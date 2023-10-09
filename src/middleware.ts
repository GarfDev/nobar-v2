import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Regex to check whether something has an extension, e.g. .jpg
const PUBLIC_FILE = /\.(.*)$/;
const FALLBACK_LANG = "vi-VN";

export function middleware(request: NextRequest) {
  const { nextUrl, headers, cookies } = request;
  // Cloned url to work with
  const url = nextUrl.clone();
  // Client language, defaults to en
  const language =
    cookies.get("NEXT_LOCALE")?.value ||
    headers
      .get("accept-language")
      ?.split(",")?.[0]
      .split("-")?.[0]
      .toLowerCase() ||
    FALLBACK_LANG;

  try {
    // Early return if it is a public file such as an image or an api call
    if (
      PUBLIC_FILE.test(nextUrl.pathname) ||
      nextUrl.pathname.includes("/api")
    ) {
      return undefined;
    }

    // Proceed without redirection if on a localized path
    if (
      nextUrl.pathname.startsWith("/en-US") ||
      nextUrl.pathname.startsWith("/vi-VN")
    ) {
      return undefined;
    }

    if (language === "en-US") {
      url.pathname = `/en-US${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    if (language === "vi-VN") {
      url.pathname = `/vi-VN${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    return undefined;
  } catch (error) {
    console.log(error);
  }
}
