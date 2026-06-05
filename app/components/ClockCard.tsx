"use client";

import { useLiveClock } from "@/app/hooks/useLiveClock";
import type { CountryTimezone } from "@/app/data/timezones";

interface ClockCardProps {
  country: CountryTimezone;
  onChangeCountry: () => void;
}

export default function ClockCard({ country, onChangeCountry }: ClockCardProps) {
  const time = useLiveClock(country.timezone);

  return (
    <div className="group relative flex flex-col items-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 shadow-lg shadow-black/30 transition-all duration-300 hover:border-white/[0.15] hover:shadow-xl hover:shadow-indigo-500/10">
      {/* Change button */}
      <button
        onClick={onChangeCountry}
        className="absolute top-3 right-3 rounded-full p-1.5 text-white/30 opacity-0 transition-all duration-200 hover:bg-white/10 hover:text-white/70 group-hover:opacity-100"
        aria-label={`Change country from ${country.name}`}
        title="Change country"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
        </svg>
      </button>

      {/* Country header */}
      <div className="mb-4 flex items-center gap-2.5">
        <span className="text-2xl" role="img" aria-label={country.name}>
          {country.flag}
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-wide text-white/90">
            {country.name}
          </span>
          <span className="text-xs text-white/40">{country.city} · {time.offset}</span>
        </div>
      </div>

      {/* Digital time display */}
      <div className="flex items-baseline gap-0.5 font-mono">
        <span className="text-4xl font-bold tabular-nums tracking-tight text-white">
          {time.hours}
        </span>
        <span className="animate-pulse text-3xl font-bold text-indigo-400">:</span>
        <span className="text-4xl font-bold tabular-nums tracking-tight text-white">
          {time.minutes}
        </span>
        <span className="animate-pulse text-3xl font-bold text-indigo-400">:</span>
        <span className="text-4xl font-bold tabular-nums tracking-tight text-cyan-300">
          {time.seconds}
        </span>
        <span className="ml-1.5 text-sm font-semibold text-indigo-300/80">
          {time.period}
        </span>
      </div>

      {/* Date */}
      <div className="mt-3 flex items-center gap-2 text-xs text-white/40">
        <span className="rounded-full bg-white/[0.06] px-2 py-0.5 font-medium text-white/50">
          {time.day}
        </span>
        <span>{time.date}</span>
      </div>

      {/* Glow accent */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
