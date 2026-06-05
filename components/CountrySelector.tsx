"use client";

import { useState, useRef, useEffect } from "react";
import { TIMEZONES, type TimezoneEntry } from "@/lib/timezones";

interface CountrySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (entry: TimezoneEntry) => void;
  excludeIds: string[];
  title?: string;
}

export default function CountrySelector({
  isOpen,
  onClose,
  onSelect,
  excludeIds,
  title = "Select a Country",
}: CountrySelectorProps) {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      // Small delay to let the modal render before focusing
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isOpen && dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredTimezones = TIMEZONES.filter((tz) => {
    const isExcluded = excludeIds.includes(tz.id);
    const matchesSearch =
      tz.country.toLowerCase().includes(search.toLowerCase()) ||
      tz.city.toLowerCase().includes(search.toLowerCase()) ||
      tz.abbreviation.toLowerCase().includes(search.toLowerCase());
    return !isExcluded && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        ref={dialogRef}
        className="mx-4 w-full max-w-md animate-in rounded-2xl border border-zinc-200/60 bg-white p-0 shadow-2xl dark:border-zinc-700/60 dark:bg-zinc-900"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-700">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="px-5 pt-4">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search country or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* List */}
        <div className="mt-3 max-h-72 overflow-y-auto px-3 pb-4">
          {filteredTimezones.length === 0 ? (
            <div className="py-8 text-center text-sm text-zinc-400 dark:text-zinc-500">
              No countries found
            </div>
          ) : (
            <div className="space-y-1">
              {filteredTimezones.map((tz) => (
                <button
                  key={tz.id}
                  onClick={() => {
                    onSelect(tz);
                    onClose();
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <span className="text-2xl leading-none" role="img" aria-label={tz.country}>
                    {tz.flag}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {tz.country}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      {tz.city} · {tz.timezone}
                    </div>
                  </div>
                  <span className="shrink-0 rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {tz.abbreviation}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
