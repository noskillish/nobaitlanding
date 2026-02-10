import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatlivspolitik — Nobait™",
  description: "Privatlivspolitik for Nobait Chrome-extension.",
};

export default function PrivacyPage() {
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
          <span className="font-semibold">Privatlivs</span>politik
        </h1>
        <p className="mt-4 mb-16 text-sm text-zinc-400">
          Sidst opdateret: 9. februar 2026
        </p>

        <div className="space-y-12 text-base leading-relaxed text-zinc-500">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Hvad Nobait gør
            </h2>
            <p>
              Nobait er en Chrome-extension der erstatter clickbait-overskrifter
              på danske nyhedssider (Ekstrabladet, Politiken, Børsen) med
              artiklens rigtige overskrift og manchet hentet direkte fra siden.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Data der indsamles
            </h2>
            <p>
              Nobait læser <strong className="text-zinc-700">artikeloverskrifter og manchetter</strong> direkte 
              fra de understøttede nyhedssider. Alt foregår lokalt i din browser —{" "}
              <strong className="text-zinc-700">
                ingen data sendes til eksterne servere eller tredjeparter
              </strong>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Data der ikke indsamles
            </h2>
            <p>Nobait indsamler <strong className="text-zinc-700">ikke</strong>:</p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
                Personlige oplysninger (navn, e-mail, adresse)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
                Browserhistorik
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
                Cookies eller loginoplysninger
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
                Placeringsdata
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
                Analyse- eller brugsstatistik
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Tredjepartstjenester
            </h2>
            <p>
              Nobait bruger <strong className="text-zinc-700">ingen tredjepartstjenester</strong>. 
              Ingen data sendes til eksterne servere, API&apos;er eller cloud-tjenester. 
              Extensionen fungerer udelukkende lokalt i din browser.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Ændringer
            </h2>
            <p>
              Denne politik kan opdateres lejlighedsvist. Ændringer afspejles i
              dette dokument med en opdateret dato.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Kontakt
            </h2>
            <p>
              Spørgsmål? Besøg vores{" "}
              <Link
                href="/support"
                className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 transition-colors hover:decoration-zinc-900"
              >
                support-side
              </Link>
              .
            </p>
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
