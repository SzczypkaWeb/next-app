import { render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup } from "@testing-library/react";
import Home from "./page";

/**
 * Tests describe the contract for the marketing home page, per the task spec:
 * - hardcoded location placeholder with a "zmień" affordance
 * - a non-interactive-looking search field with the placeholder copy
 * - a primary "Znajdź fachowca" CTA rendered via the shared-ui Button
 * - a 2-column grid of the 6 category chips
 * - two stat cards (verified companies, avg. response time)
 * - a "Zaloguj się" link and a "Zacznij zarabiać" (provider) link, both
 *   pointing at the MF shell app (NEXT_PUBLIC_APP_URL, default localhost:8080)
 * - a "Popularne w Twojej okolicy" line with example category+city combos
 */
describe("Home", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the hardcoded location placeholder with a change affordance", () => {
    render(<Home />);

    expect(
      screen.getByText(/Warszawa \(wykryto automatycznie\)/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/zmień/i)).toBeInTheDocument();
  });

  it("renders the search field placeholder copy", () => {
    render(<Home />);

    expect(
      screen.getByText(/Czego potrzebujesz\? np\. hydraulik/i),
    ).toBeInTheDocument();
  });

  it("renders the primary search CTA using the shared-ui Button", () => {
    render(<Home />);

    const cta = screen.getByRole("button", { name: /Znajdź fachowca/i });
    expect(cta).toBeInTheDocument();
    // shared-ui Button's primary variant applies this class.
    expect(cta).toHaveClass("bg-blue-600");
  });

  it("renders all 6 category chips", () => {
    render(<Home />);

    const categories = [
      "Hydraulik",
      "Elektryk",
      "Sprzątanie",
      "Przeprowadzki",
      "Remonty",
      "Więcej",
    ];
    for (const category of categories) {
      expect(screen.getByText(category)).toBeInTheDocument();
    }
  });

  it("renders the trust stat cards", () => {
    render(<Home />);

    expect(screen.getByText("Zweryfikowanych firm")).toBeInTheDocument();
    expect(screen.getByText("12 400+")).toBeInTheDocument();
    expect(screen.getByText("Śr. czas odpowiedzi")).toBeInTheDocument();
    expect(screen.getByText("38 min")).toBeInTheDocument();
  });

  it("renders the popular-nearby line with example category+city combos", () => {
    render(<Home />);

    const line = screen.getByText(/Popularne w Twojej okolicy/i).closest("div");
    expect(line).not.toBeNull();
    const scoped = within(line as HTMLElement);
    expect(scoped.getByText(/Hydraulik Warszawa/)).toBeInTheDocument();
    expect(scoped.getByText(/Elektryk Mokotów/)).toBeInTheDocument();
  });

  it("renders a 'Zaloguj się' link to the MF shell login page (default localhost:8080)", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: /Zaloguj się/i });
    expect(link).toHaveAttribute("href", "http://localhost:8080/login");
  });

  it("renders a 'Zacznij zarabiać' provider link to the MF shell login page (default localhost:8080)", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: /Zacznij zarabiać/i });
    expect(link).toHaveAttribute(
      "href",
      "http://localhost:8080/login?intent=provider",
    );
  });
});
