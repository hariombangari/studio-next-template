"use client";

import { useState, useCallback } from "react";
import { DEFAULT_TIMEZONE_IDS, TIMEZONES, getTimezoneById, type TimezoneEntry } from "@/lib/timezones";
import ClockCard from "./ClockCard";
import CountrySelector from "./CountrySelector";

export default function WorldClockWidget() {
  const [selectedIds, setSelectedIds] = useState<string[]>(DEFAULT_TIMEZONE_IDS);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [selectorMode, setSelectorMode] = useState<"add" | "replace">("add");
  const [replaceIndex, setReplaceIndex] = useState<number | null>(null);

  const selectedEntries = selectedIds
    .map((id) => getTimezoneById(id))
    .filter((entry): entry is TimezoneEntry => entry !== undefined);

  const handleRemove = useCallback((index: number) => {
    setSelectedIds((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleChangeClick = useCallback((index: number) => {
    setReplaceIndex(index);
    setSelectorMode("replace");
    setSelectorOpen(true);
  }, []);

  const handleAddClick = useCallback(() => {
    setSelectorMode("add");
    setReplaceIndex(null);
    setSelectorOpen(true);
  }, []);

  const handleSelect = useCallback(
    (entry: TimezoneEntry) => {
      if (selectorMode === "replace" && replaceIndex !== null) {
        setSelectedIds((prev) => {
          const next = [...prev];
          next[replaceIndex] = entry.id;
          return next;
        });
      } else {
        setSelectedIds((prev) => [...prev, entry.id]);
      }
      setReplaceIndex(null);
    },
    [selectorMode, replaceIndex]
  );

  const handleReset = useCallback(() => {
    setSelectedIds(DEFAULT_TIMEZONE_IDS);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-2 flex items-center justify-center gap-3">
          <span className="text-3xl">🌍</span>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            World Clock
          </h1>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Live time across the globe · Click the swap icon to change a country
        </p>
      </div>

      {/* Clock Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {selectedEntries.map((entry, index) => (
          <ClockCard
            key={`${entry.id}-${index}`}
            entry={entry}
            onRemove={() => handleRemove(index)}
            onChangeClick={() => handleChangeClick(index)}
          />
        ))}

        {/* Add Clock Button */}
        {selectedIds.length < 8 && (
          <button
            onClick={handleAddClick}
            className="flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50/50 text-zinc-400 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-500 dark:border-zinc-700 dark:bg-zinc-900/30 dark:hover:border-blue-500 dark:hover:bg-blue-950/20 dark:hover:text-blue-400"
            aria-label="Add a clock"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Add Clock</span>
          </button>
        )}
      </div>

      {/* Footer actions */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
            <path
              fillRule="evenodd"
              d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H4.598a.75.75 0 00-.75.75v3.634a.75.75 0 001.5 0v-2.033l.312.311a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.06-7.768a.75.75 0 00-1.5 0v2.033l-.312-.312a7 7 0 00-11.712 3.138.75.75 0 001.449.39 5.5 5.5 0 019.201-2.466l.312.312H11.38a.75.75 0 100 1.5h3.634a.75.75 0 00.75-.75V3.656z"
              clipRule="evenodd"
            />
          </svg>
          Reset to defaults
        </button>
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          {selectedIds.length}/8 clocks
        </span>
      </div>

      {/* Country Selector Modal */}
      <CountrySelector
        isOpen={selectorOpen}
        onClose={() => {
          setSelectorOpen(false);
          setReplaceIndex(null);
        }}
        onSelect={handleSelect}
        excludeIds={selectedIds}
        title={selectorMode === "replace" ? "Replace Clock" : "Add a Clock"}
      />
    </div>
  );
}
