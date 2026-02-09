"use client";

import { useState } from "react";

const examples = [
  {
    before: "Boligpriserne EKSPLODERER — se om DIT område rammes",
    title: "Boligpriserne steg 4,2% i januar i hele landet",
    lead: "Største stigning i hovedstaden og Aarhus ifølge Boligsiden",
  },
  {
    before: "Læge afslører: DENNE daglige vane smadrer dine knæ",
    title: "Forskning: Løb på hårdt underlag øger risiko for knæskader",
    lead: "Nyt studie fra KU fulgte 8.000 motionsløbere over fem år",
  },
  {
    before: "CHOK i landsholdstruppen — se hvem der er ude",
    title: "Eriksen ude af truppen med knæskade",
    lead: "Landstræner Hjulmand bekræfter fraværet varer to til tre uger",
  },
];

export function DemoCard() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="overflow-hidden rounded-3xl bg-white">
      {/* Top bar with toggle */}
      <div className="flex items-center justify-end border-b border-zinc-100 px-6 py-4 md:px-12 lg:px-14">
        {/* Toggle */}
        <button
          onClick={() => setEnabled(!enabled)}
          className="flex items-center gap-2.5 rounded-full bg-zinc-900 py-1.5 pl-4 pr-2 text-[13px] font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Nobait™
          <span className="text-white/50">{enabled ? "on" : "off"}</span>
          <div
            className={`relative h-5 w-9 rounded-full transition-colors ${
              enabled ? "bg-white/20" : "bg-white/10"
            }`}
          >
            <div
              className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
                enabled ? "translate-x-4" : "translate-x-0.5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="p-6 md:p-12 lg:p-14">
        {/* Column headers — desktop */}
        <div className="mb-2 hidden md:grid grid-cols-[1fr_48px_1fr] items-center text-[11px] font-semibold uppercase tracking-[0.15em]">
          <span className={enabled ? "text-zinc-300" : "text-zinc-900"}>
            Clickbait
          </span>
          <span />
          <span className={enabled ? "text-zinc-900" : "text-zinc-300"}>
            Nobait
          </span>
        </div>

        <div className="divide-y divide-zinc-100">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 md:grid md:grid-cols-[1fr_48px_1fr] md:items-center md:gap-0"
            >
              {/* Clickbait side */}
              <div>
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-400 md:hidden">
                  Clickbait
                </p>
                <p
                  className={`text-[15px] font-bold leading-snug transition-colors duration-300 ${
                    enabled
                      ? "text-zinc-400 line-through decoration-zinc-300 decoration-1"
                      : "text-zinc-900"
                  }`}
                >
                  {ex.before}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <span className="text-zinc-200">&rarr;</span>
              </div>

              {/* Nobait side */}
              <div>
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-900 md:hidden">
                  Nobait
                </p>
                <p
                  className={`text-[15px] font-semibold leading-snug transition-colors duration-300 ${
                    enabled ? "text-zinc-900" : "text-zinc-400"
                  }`}
                >
                  {ex.title}
                </p>
                <p
                  className={`mt-1 text-[13px] leading-relaxed transition-colors duration-300 ${
                    enabled ? "text-zinc-500" : "text-zinc-300"
                  }`}
                >
                  {ex.lead}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Virker på — bottom bar */}
      <div className="flex items-center gap-3 border-t border-zinc-100 px-6 py-4 md:px-14">
        <span className="text-[13px] text-zinc-300">Virker på</span>
        <span className="rounded-full border border-zinc-100 px-3 py-1 text-[12px] font-medium text-zinc-400">
          Ekstrabladet
        </span>
        <span className="rounded-full border border-zinc-100 px-3 py-1 text-[12px] font-medium text-zinc-400">
          Politiken
        </span>
        <span className="rounded-full border border-zinc-100 px-3 py-1 text-[12px] font-medium text-zinc-400">
          Børsen
        </span>
      </div>
    </div>
  );
}
