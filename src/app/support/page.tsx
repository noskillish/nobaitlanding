import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Nobait™",
  description: "Support og kontakt for Nobait Chrome-extension.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f5f5f0]/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-zinc-900"
          >
            Nobait™
          </Link>
          <Link
            href="/"
            className="rounded-full px-4 py-1.5 text-sm text-zinc-500 transition-colors hover:bg-black/5 hover:text-zinc-900"
          >
            Tilbage
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-tight text-zinc-900">
          <span className="font-semibold">Support</span>
        </h1>
        <p className="mt-4 mb-16 text-base leading-relaxed text-zinc-400">
          Har du brug for hjælp eller oplever du problemer med Nobait?
        </p>

        <div className="space-y-12 text-base leading-relaxed text-zinc-500">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Kontakt
            </h2>
            <p>
              Du er altid velkommen til at kontakte udvikleren direkte hvis
              du oplever problemer, har spørgsmål eller forslag til
              forbedringer.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Ofte stillede spørgsmål
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-medium text-zinc-900">
                  Extensionen virker ikke på en nyhedsside
                </p>
                <p className="mt-1">
                  Nobait understøtter i øjeblikket Ekstrabladet, Politiken og
                  Børsen. Prøv at genindlæse siden. Hvis problemet fortsætter,
                  skriv til os.
                </p>
              </div>
              <div>
                <p className="font-medium text-zinc-900">
                  Hvordan slår jeg Nobait fra?
                </p>
                <p className="mt-1">
                  Klik på Nobait-knappen i øverste højre hjørne af siden for at
                  skifte mellem den originale side og Nobait-visningen.
                </p>
              </div>
              <div>
                <p className="font-medium text-zinc-900">
                  Indsamler Nobait mine data?
                </p>
                <p className="mt-1">
                  Nej. Nobait gemmer, logger eller videresender ingen
                  brugerdata. Læs mere i vores{" "}
                  <Link
                    href="/privacy"
                    className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 transition-colors hover:decoration-zinc-900"
                  >
                    privatlivspolitik
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60 px-6 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-zinc-400">
          <span>&copy; {new Date().getFullYear()} Nobait</span>
          <Link href="/" className="transition-colors hover:text-zinc-900">
            nobait.dk
          </Link>
        </div>
      </footer>
    </div>
  );
}
