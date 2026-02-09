import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CHROME_STORE_URL = "#"; // Replace with actual Chrome Web Store link

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center md:py-32">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Nobait™
          </h1>
          <p className="mb-2 text-lg text-white/60 md:text-xl">
            Danske nyheder uden clickbait
          </p>
          <p className="mb-10 max-w-lg text-base text-white/40 leading-relaxed">
            En Chrome-extension der erstatter clickbait-overskrifter på danske
            nyhedssider med faktuelle overskrifter — genereret af AI, baseret på
            artiklens rigtige indhold.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-8 text-[#111] hover:bg-white/90"
          >
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
              Tilføj til Chrome — gratis
            </a>
          </Button>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary" className="bg-white/10 text-white/60 hover:bg-white/15 border-0">
              Ekstrabladet
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white/60 hover:bg-white/15 border-0">
              Politiken
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white/60 hover:bg-white/15 border-0">
              Børsen
            </Badge>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Clickbait ind, fakta ud
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Before */}
            <Card className="border-dashed border-zinc-200 bg-zinc-50/50">
              <CardContent className="p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-300">
                  Før
                </p>
                <p className="font-sans text-lg font-extrabold leading-snug text-zinc-300 line-through decoration-zinc-200 decoration-2">
                  Boligpriserne EKSPLODERER — se om DIT område rammes
                </p>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="border-zinc-200 shadow-sm">
              <CardContent className="p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-900">
                  Efter
                </p>
                <p className="mb-1 text-xs text-zinc-400">3 timer siden</p>
                <p className="mb-2 font-serif text-xl font-bold leading-snug text-zinc-900">
                  Boligpriserne steg 4,2% i januar
                </p>
                <p className="text-sm leading-relaxed text-zinc-500">
                  Største stigning i hovedstaden og Aarhus ifølge nye tal fra
                  Boligsiden
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Sådan virker det
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#111] text-lg font-semibold text-white">
                1
              </div>
              <h3 className="mb-2 font-semibold">Installér</h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                Tilføj Nobait fra Chrome Web Store med ét klik.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#111] text-lg font-semibold text-white">
                2
              </div>
              <h3 className="mb-2 font-semibold">Besøg en nyhedsside</h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                Gå til Ekstrabladet, Politiken eller Børsen som normalt.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#111] text-lg font-semibold text-white">
                3
              </div>
              <h3 className="mb-2 font-semibold">Læs rigtige overskrifter</h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                Nobait erstatter clickbait med klare, faktuelle overskrifter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <p className="text-sm font-medium text-zinc-900">Nobait™</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900"
            >
              Chrome Web Store
            </a>
            <Link
              href="/privacy"
              className="transition-colors hover:text-zinc-900"
            >
              Privatlivspolitik
            </Link>
            <a
              href="https://github.com/noskillish/nobait/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900"
            >
              Support
            </a>
          </div>
          <p className="text-xs text-zinc-300">
            &copy; {new Date().getFullYear()} Nobait. Alle rettigheder
            forbeholdes.
          </p>
        </div>
      </footer>
    </div>
  );
}
