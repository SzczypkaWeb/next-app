import { afterEach, describe, expect, it } from "vitest";
import { getAppUrl, getLoginUrl, getProviderSignupUrl } from "./site-config";

/**
 * Per the task spec:
 * - The MF shell app's base URL is configurable via NEXT_PUBLIC_APP_URL.
 * - It defaults to http://localhost:8080 for local dev when the env var is unset.
 * - The login and provider-signup CTAs are derived from that base URL.
 *
 * getAppUrl/getLoginUrl/getProviderSignupUrl read process.env at call time
 * (rather than baking in a value at module-load time), so tests can mutate
 * process.env directly around each call without needing to reset modules.
 */
describe("site-config", () => {
  const original = process.env.NEXT_PUBLIC_APP_URL;

  afterEach(() => {
    if (original === undefined) {
      delete process.env.NEXT_PUBLIC_APP_URL;
    } else {
      process.env.NEXT_PUBLIC_APP_URL = original;
    }
  });

  it("defaults the app URL to http://localhost:8080 when NEXT_PUBLIC_APP_URL is unset", () => {
    delete process.env.NEXT_PUBLIC_APP_URL;

    expect(getAppUrl()).toBe("http://localhost:8080");
  });

  it("uses NEXT_PUBLIC_APP_URL when it is set", () => {
    process.env.NEXT_PUBLIC_APP_URL = "https://app.example.com";

    expect(getAppUrl()).toBe("https://app.example.com");
  });

  it("builds the login URL from the app URL", () => {
    process.env.NEXT_PUBLIC_APP_URL = "https://app.example.com";

    expect(getLoginUrl()).toBe("https://app.example.com/login");
  });

  it("builds the provider sign-up URL from the app URL", () => {
    process.env.NEXT_PUBLIC_APP_URL = "https://app.example.com";

    expect(getProviderSignupUrl()).toBe(
      "https://app.example.com/login?intent=provider",
    );
  });
});
