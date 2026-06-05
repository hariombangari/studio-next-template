"use client";

import { useState, useEffect, useCallback } from "react";
import type { CountryTimezone } from "@/app/data/timezones";

interface TimeData {
  hours: string;
  minutes: string;
  seconds: string;
  period: string;
  date: string;
  day: string;
  offset: string;
}

function getTimeData(timezone: string): TimeData {
  const now = new Date();

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const offsetFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    timeZoneName: "shortOffset",
  });

  const timeParts = timeFormatter.formatToParts(now);
  const hours = timeParts.find((p) => p.type === "hour")?.value ?? "00";
  const minutes = timeParts.find((p) => p.type === "minute")?.value ?? "00";
  const seconds = timeParts.find((p) => p.type === "second")?.value ?? "00";
  const period = timeParts.find((p) => p.type === "dayPeriod")?.value ?? "AM";

  const dateParts = dateFormatter.formatToParts(now);
  const day = dateParts.find((p) => p.type === "weekday")?.value ?? "";
  const month = dateParts.find((p) => p.type === "month")?.value ?? "";
  const dayNum = dateParts.find((p) => p.type === "day")?.value ?? "";

  const offsetParts = offsetFormatter.formatToParts(now);
  const offset =
    offsetParts.find((p) => p.type === "timeZoneName")?.value ?? "";

  return {
    hours,
    minutes,
    seconds,
    period,
    date: `${month} ${dayNum}`,
    day,
    offset,
  };
}

interface ClockCardProps {
  country: CountryTimezone;
  onChangeCountry: () => void;
}

export default function ClockCard({ country, onChangeCountry }: ClockCardProps) {
  const [time, setTime] = useState<TimeData | null>(null);
  const [colonVisible, setColonVisible] = useState(true);

  const updateTime = useCallback(() => {
    setTime(getTimeData(country.timezone));
  }, [country.timezone]);

  useEffect(() => {
    updateTime();
    const interval = setInterval(() => {
      updateTime();
      setColonVisible((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  if (!time) {
    return (
      <div className="relative w-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-xl border border-gray-700/50 animate-pulse min-h-[200px]" />
    );
  }

  return (
    <div className="group relative w-full rounded-2xl bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 p-5 sm:p-6 shadow-xl border border-gray-700/40 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-cyan-500/5 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl" role="img" aria-label={country.country}>
            {country.flag}
          </span>
          <div>
            <h3 className="text-sm font-semibold text-white leading-tight">
              {country.country}
            </h3>
            <p className="text-xs text-gray-400">{country.city}</p>
          </div>
        </div>
        <button
          onClick={onChangeCountry}
          className="p-1.5 rounded-lg text-gray-500 hover:text-cyan-400 hover:bg-gray-700/60 transition-all duration-200 cursor-pointer"
          aria-label={`Change ${country.country} clock`}
          title="Change country"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </button>
      </div>

      {/* Digital Clock Display */}
      <div className="relative flex items-baseline justify-center gap-0.5 py-3">
        <span className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight tabular-nums">
          {time.hours}
        </span>
        <span
          className={`font-mono text-4xl sm:text-5xl font-bold tracking-tight tabular-nums transition-opacity duration-150 ${
            colonVisible ? "text-cyan-400" : "text-transparent"
          }`}
        >
          :
        </span>
        <span className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight tabular-nums">
          {time.minutes}
        </span>
        <span
          className={`font-mono text-4xl sm:text-5xl font-bold tracking-tight tabular-nums transition-opacity duration-150 ${
            colonVisible ? "text-cyan-400" : "text-transparent"
          }`}
        >
          :
        </span>
        <span className="font-mono text-3xl sm:text-4xl font-semibold text-gray-400 tracking-tight tabular-nums">
          {time.seconds}
        </span>
        <span className="ml-1.5 text-xs sm:text-sm font-medium text-cyan-400 self-start mt-1">
          {time.period}
        </span>
      </div>

      {/* Footer */}
      <div className="relative flex items-center justify-between mt-3 pt-3 border-t border-gray-700/50">
        <span className="text-xs text-gray-400 font-medium">
          {time.day}, {time.date}
        </span>
        <span className="text-xs text-cyan-400/70 font-mono">{time.offset}</span>
      </div>
    </div>
  );
}
