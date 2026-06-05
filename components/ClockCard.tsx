"use client";

import { useEffect, useState, useCallback } from "react";
import type { TimezoneEntry } from "@/lib/timezones";

interface ClockCardProps {
  entry: TimezoneEntry;
  onRemove: () => void;
  onChangeClick: () => void;
}

function formatTime(timezone: string): { time: string; seconds: string; period: string; date: string; day: string; offset: string } {
  const now = new Date();

  const timeStr = now.toLocaleTimeString("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const dateStr = now.toLocaleDateString("en-US", {
    timeZone: timezone,
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const dayStr = now.toLocaleDateString("en-US", {
    timeZone: timezone,
    weekday: "long",
  });

  // Extract parts
  const parts = timeStr.split(" ");
  const timeParts = parts[0].split(":");
  const period = parts[1];
  const time = `${timeParts[0]}:${timeParts[1]}`;
  const seconds = timeParts[2];

  // Calculate UTC offset
  const utcTime = now.getTime();
  const localStr = now.toLocaleString("en-US", { timeZone: timezone });
  const localTime = new Date(localStr).getTime();
  const diffHours = (localTime - utcTime) / (1000 * 60 * 60);
  const sign = diffHours >= 0 ? "+" : "";
  const offsetStr = `UTC${sign}${diffHours % 1 === 0 ? diffHours.toFixed(0) : diffHours.toFixed(1)}`;

  return { time, seconds, period, date: dateStr, day: dayStr, offset: offsetStr };
}

export default function ClockCard({ entry, onRemove, onChangeClick }: ClockCardProps) {
  const [timeData, setTimeData] = useState<ReturnType<typeof formatTime> | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const updateTime = useCallback(() => {
    setTimeData(formatTime(entry.timezone));
  }, [entry.timezone]);

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  if (!timeData) {
    return (
      <div className="clock-card animate-pulse">
        <div className="h-40 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
      </div>
    );
  }

  return (
    <div
      className="clock-card group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/80 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:border-zinc-700/60 dark:bg-zinc-900/80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Action buttons */}
      <div
        className={`absolute right-3 top-3 flex gap-1.5 transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={onChangeClick}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-blue-100 hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-blue-900/40 dark:hover:text-blue-400"
          title="Change country"
          aria-label="Change country"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H4.598a.75.75 0 00-.75.75v3.634a.75.75 0 001.5 0v-2.033l.312.311a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.06-7.768a.75.75 0 00-1.5 0v2.033l-.312-.312a7 7 0 00-11.712 3.138.75.75 0 001.449.39 5.5 5.5 0 019.201-2.466l.312.312H11.38a.75.75 0 100 1.5h3.634a.75.75 0 00.75-.75V3.656z" />
          </svg>
        </button>
        <button
          onClick={onRemove}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-red-100 hover:text-red-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-red-900/40 dark:hover:text-red-400"
          title="Remove clock"
          aria-label="Remove clock"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>

      {/* Header: Flag + Country */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl leading-none" role="img" aria-label={entry.country}>
          {entry.flag}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {entry.country}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {entry.city} · {timeData.offset}
          </p>
        </div>
      </div>

      {/* Time Display */}
      <div className="mb-3 flex items-baseline gap-1.5">
        <span className="font-mono text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {timeData.time}
        </span>
        <div className="flex flex-col items-start">
          <span className="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">
            {timeData.period}
          </span>
          <span className="font-mono text-xs tabular-nums text-zinc-400 dark:text-zinc-500">
            :{timeData.seconds}
          </span>
        </div>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0">
          <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
        </svg>
        <span>{timeData.day}, {timeData.date}</span>
      </div>

      {/* Animated bottom bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-1000"
          style={{ width: `${((parseInt(timeData.seconds) / 60) * 100)}%` }}
        />
      </div>
    </div>
  );
}
