/**
 * Base URL of the Module Federation shell app (frontend-shell), which owns
 * authentication. This marketing site links out to it with plain full-page
 * navigations - there is no shared session/cookie or JS integration between
 * the two apps yet (that requires a real shared domain, which doesn't exist
 * yet).
 *
 * Defaults to the shell's local dev server so links work out of the box in
 * local development.
 */
export function getAppUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:8080";
}

/** Login page in the MF shell app, used by the "Zaloguj się" CTA. */
export function getLoginUrl(): string {
  return `${getAppUrl()}/login`;
}

/**
 * Login page in the MF shell app, flagged with the provider intent, used by
 * the "Zacznij zarabiać" (provider) CTA. The shell doesn't have a dedicated
 * provider sign-up route yet, so this reuses /login with a query param the
 * shell can branch on once that flow exists.
 */
export function getProviderSignupUrl(): string {
  return `${getAppUrl()}/login?intent=provider`;
}
