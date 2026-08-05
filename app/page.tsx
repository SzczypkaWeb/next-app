import Link from "next/link";
import { Button } from "@szczypkaweb/shared-ui";
import { getLoginUrl, getProviderSignupUrl } from "@/lib/site-config";

// Hardcoded placeholder until this app is deployed somewhere that provides
// geo-IP headers - real automatic location detection is a follow-up task.
const LOCATION_LABEL = "Warszawa (wykryto automatycznie)";

const CATEGORIES = [
  { label: "Hydraulik", icon: "💧" },
  { label: "Elektryk", icon: "⚡" },
  { label: "Sprzątanie", icon: "🧴" },
  { label: "Przeprowadzki", icon: "🚚" },
  { label: "Remonty", icon: "🎨" },
  { label: "Więcej", icon: "⋯" },
] as const;

const STATS = [
  { label: "Zweryfikowanych firm", value: "12 400+" },
  { label: "Śr. czas odpowiedzi", value: "38 min" },
] as const;

const POPULAR_SEARCHES = [
  "Hydraulik Warszawa",
  "Elektryk Mokotów",
  "Sprzątanie po remoncie",
  "Malowanie mieszkań",
] as const;

export default function Home() {
  const loginUrl = getLoginUrl();
  const providerSignupUrl = getProviderSignupUrl();

  return (
    <main className="flex flex-1 flex-col bg-white px-4 py-6 sm:items-center sm:justify-center">
      <div className="mx-auto w-full max-w-sm">
        <header className="mb-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">Fachowcy</span>
          <Link
            href={loginUrl}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Zaloguj się
          </Link>
        </header>

        <section
          aria-label="Wyszukiwarka fachowców"
          className="rounded-2xl border border-gray-200 bg-gray-50 p-4"
        >
          {/* Location indicator */}
          <div className="mb-2.5 flex items-center gap-1.5 text-xs text-gray-500">
            <span aria-hidden="true">📍</span>
            <span>{LOCATION_LABEL}</span>
            <button
              type="button"
              className="ml-auto font-medium text-blue-600 hover:text-blue-700"
            >
              zmień
            </button>
          </div>

          {/* Search field - static/non-interactive placeholder, no search backend yet */}
          <div className="mb-2.5 flex h-11 items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5">
            <span aria-hidden="true" className="text-base text-gray-400">
              🔍
            </span>
            <span className="text-sm text-gray-500">
              Czego potrzebujesz? np. hydraulik
            </span>
          </div>

          {/* Primary CTA, rendered with the shared-ui Button component */}
          <Button className="mb-3.5 w-full">Znajdź fachowca</Button>

          {/* Category chips */}
          <div className="mb-3.5 grid grid-cols-2 gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.label}
                type="button"
                className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 text-left"
              >
                <span aria-hidden="true">{category.icon}</span>
                <span className="text-[12.5px] text-gray-800">
                  {category.label}
                </span>
              </button>
            ))}
          </div>

          {/* Trust stats */}
          <div className="mb-3.5 grid grid-cols-2 gap-2">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-white p-2.5">
                <p className="text-xs text-gray-600">{stat.label}</p>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Provider CTA */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-2.5">
            <span className="text-[12.5px] text-gray-600">
              Jesteś fachowcem?
            </span>
            <Link
              href={providerSignupUrl}
              className="text-[12.5px] font-medium text-blue-600 hover:text-blue-700"
            >
              Zacznij zarabiać →
            </Link>
          </div>

          {/* Popular nearby searches */}
          <div className="mt-2.5 border-t border-gray-200 pt-2.5">
            <p className="mb-1 text-[11px] text-gray-500">
              Popularne w Twojej okolicy
            </p>
            <p className="text-[11.5px] leading-relaxed text-blue-600">
              {POPULAR_SEARCHES.join(" · ")}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
