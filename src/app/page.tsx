import Link from "next/link";
import { DemoCard } from "@/components/demo-card";

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/nobait/ccdndjignkgojckkdhkngmamajioikbn";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f5f5f0]/80">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
          <span className="text-[15px] font-semibold tracking-tight text-zinc-900">
            Nobait™
          </span>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Tilføj til Chrome
            <span className="text-white/50">&rarr;</span>
          </a>
        </div>
      </header>

      {/* Hero — split */}
      <section className="px-6 pt-16 pb-8 md:pt-24 md:pb-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-20">
            <h1 className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-normal leading-[1.05] tracking-tight text-zinc-900">
              Nobait
            </h1>
            <p className="max-w-[400px] text-[15px] leading-relaxed text-zinc-400 md:pb-2">
              En Chrome-extension der erstatter clickbait-overskrifter på danske
              nyhedssider med artiklens rigtige overskrift og manchet.
            </p>
          </div>
        </div>
      </section>

      {/* Demo card — interaktiv før/efter */}
      <section className="px-6 pt-16 pb-4 md:pt-24">
        <div className="mx-auto max-w-[1200px]">
          <DemoCard />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 rounded-2xl bg-zinc-900 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8 md:py-4">
          <p className="text-[14px] text-white/60">
            Ingen tilmelding. Ingen data. Bare bedre overskrifter.
          </p>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-[13px] font-medium text-zinc-900 transition-colors hover:bg-zinc-100 md:w-fit md:justify-start"
          >
            Tilføj til Chrome
            <span className="text-zinc-400">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12">
        <div className="mx-auto max-w-[1200px] text-[13px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <span className="font-medium text-zinc-900">Nobait™</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-zinc-400">
              <Link href="/privacy" className="transition-colors hover:text-zinc-900">
                Privatlivspolitik
              </Link>
              <Link href="/support" className="transition-colors hover:text-zinc-900">
                Support
              </Link>
              <span className="text-zinc-300">
                &copy; {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
