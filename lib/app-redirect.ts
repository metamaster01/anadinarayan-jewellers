// /**
//  * Deep-links product cards into the Android app when it's installed, and
//  * silently falls back to the Play Store listing when it isn't.
//  *
//  * How it works: navigating to a custom URI scheme (e.g. "anandinarayan://")
//  * either hands off to the installed app (backgrounding the browser tab) or
//  * does nothing at all if no app is registered for it. We start a short
//  * timer right after firing the deep link; if the tab is still in the
//  * foreground once the timer runs out, we assume the app isn't installed
//  * and send the user to the Play Store instead.
//  *
//  * Update ANDROID_PACKAGE / APP_SCHEME below to match your actual app.
//  */

// const ANDROID_PACKAGE = "com.anadinarayan.app";
// const APP_SCHEME = "anandinarayan://";
// const FALLBACK_DELAY_MS = 1500;

// export const APP_CONFIG = {
//   androidPackage: ANDROID_PACKAGE,
//   playStoreUrl: `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`,
//   appScheme: APP_SCHEME,
// };

// export function buildProductDeepLink(slug: string): string {
//   return `${APP_SCHEME}product/${slug}`;
// }

// export function buildCategoryDeepLink(categorySlug: string): string {
//   return `${APP_SCHEME}category/${categorySlug}`;
// }

// /**
//  * Fires a deep link, then redirects to `fallbackUrl` (defaults to the
//  * Play Store) if the app didn't take over the tab within the grace period.
//  */
// export function openInApp(
//   deepLink: string,
//   fallbackUrl: string = APP_CONFIG.playStoreUrl
// ): void {
//   if (typeof window === "undefined") return;

//   let didLeavePage = false;
//   const onVisibilityChange = () => {
//     if (document.hidden) didLeavePage = true;
//   };
//   document.addEventListener("visibilitychange", onVisibilityChange);

//   window.location.href = deepLink;

//   window.setTimeout(() => {
//     document.removeEventListener("visibilitychange", onVisibilityChange);
//     if (!didLeavePage) {
//       window.location.href = fallbackUrl;
//     }
//   }, FALLBACK_DELAY_MS);
// }

// export function openProductInApp(slug: string): void {
//   openInApp(buildProductDeepLink(slug));
// }

// export function openCategoryInApp(categorySlug: string): void {
//   openInApp(buildCategoryDeepLink(categorySlug));
// }

// export function openStoreDirectly(): void {
//   if (typeof window === "undefined") return;
//   window.location.href = APP_CONFIG.playStoreUrl;
// }




/**
 * Deep-links product cards into the Android app when it's installed, and
 * silently falls back to the Play Store listing when it isn't.
 *
 * How it works: navigating to a custom URI scheme (e.g. "anandinarayan://")
 * either hands off to the installed app (backgrounding the browser tab) or
 * does nothing at all if no app is registered for it. We start a short
 * timer right after firing the deep link; if the tab is still in the
 * foreground once the timer runs out, we assume the app isn't installed
 * and send the user to the Play Store instead.
 *
 * Update ANDROID_PACKAGE / APP_SCHEME below to match your actual app.
 */

const ANDROID_PACKAGE = "com.dsoft.anadinarayanjwlrsbhandara";
const APP_SCHEME = "anandinarayan://";
const FALLBACK_DELAY_MS = 1500;
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dsoft.anadinarayanjwlrsbhandara&pcampaignid=web_share";

export const APP_CONFIG = {
  androidPackage: ANDROID_PACKAGE,
  playStoreUrl: PLAY_STORE_URL,
  appScheme: APP_SCHEME,
};

export function buildProductDeepLink(slug: string): string {
  return `${APP_SCHEME}product/${slug}`;
}

export function buildCategoryDeepLink(categorySlug: string): string {
  return `${APP_SCHEME}category/${categorySlug}`;
}

/**
 * Fires a deep link, then redirects to `fallbackUrl` (defaults to the
 * Play Store) if the app didn't take over the tab within the grace period.
 */
export function openInApp(
  deepLink: string,
  fallbackUrl: string = APP_CONFIG.playStoreUrl
): void {
  if (typeof window === "undefined") return;

  let didLeavePage = false;
  const onVisibilityChange = () => {
    if (document.hidden) didLeavePage = true;
  };
  document.addEventListener("visibilitychange", onVisibilityChange);

  window.location.href = deepLink;

  window.setTimeout(() => {
    document.removeEventListener("visibilitychange", onVisibilityChange);
    if (!didLeavePage) {
      window.location.href = fallbackUrl;
    }
  }, FALLBACK_DELAY_MS);
}

export function openProductInApp(slug: string): void {
  openInApp(buildProductDeepLink(slug));
}

export function openCategoryInApp(categorySlug: string): void {
  openInApp(buildCategoryDeepLink(categorySlug));
}

export function openStoreDirectly(): void {
  if (typeof window === "undefined") return;
  window.location.href = APP_CONFIG.playStoreUrl;
}