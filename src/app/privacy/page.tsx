import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatlivspolitik — Nobait™",
  description: "Privatlivspolitik for Nobait Chrome-extension.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-100">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold text-zinc-900">
            Nobait™
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
          >
            Tilbage
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-semibold tracking-tight">
          Privatlivspolitik
        </h1>
        <p className="mb-12 text-sm text-zinc-400">
          Sidst opdateret: 9. februar 2026
        </p>

        <div className="space-y-10 text-base leading-relaxed text-zinc-600">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Hvad Nobait gør
            </h2>
            <p>
              Nobait er en Chrome-extension der erstatter clickbait-overskrifter
              på danske nyhedssider (Ekstrabladet, Politiken, Børsen) med
              faktuelle overskrifter genereret af AI.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Data der indsamles
            </h2>
            <p>
              Nobait læser <strong>artikeltekst</strong> fra understøttede
              nyhedssider for at generere præcise overskrifter. Indholdet
              behandles midlertidigt og bliver{" "}
              <strong>
                ikke gemt, logget eller videresendt til tredjeparter
              </strong>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Data der ikke indsamles
            </h2>
            <p>Nobait indsamler <strong>ikke</strong>:</p>
            <ul className="mt-3 list-inside list-disc space-y-1.5 text-zinc-500">
              <li>Personlige oplysninger (navn, e-mail, adresse)</li>
              <li>Browserhistorik</li>
              <li>Cookies eller loginoplysninger</li>
              <li>Placeringsdata</li>
              <li>Analyse- eller brugsstatistik</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Tredjepartstjenester
            </h2>
            <p>
              Artikeltekst sendes til en AI-tjeneste udelukkende med det formål
              at generere overskrifter. Ingen personlige eller identificerbare
              oplysninger indgår i disse forespørgsler.
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
              Spørgsmål? Opret en{" "}
              <a
                href="https://github.com/noskillish/nobait/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-zinc-900"
              >
                issue på GitHub
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
