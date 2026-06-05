"use client";

import { useState, useRef, useEffect } from "react";
import { TIMEZONES, type CountryTimezone } from "@/app/data/timezones";

interface CountrySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (country: CountryTimezone) => void;
  currentIds: string[];
  slotIndex: number;
}

export default function CountrySelector({
  isOpen,
  onClose,
  onSelect,
  currentIds,
  slotIndex,
}: CountrySelectorProps) {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      // small delay to let animation start
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = TIMEZONES.filter((tz) => {
    const q = search.toLowerCase();
    return (
      tz.country.toLowerCase().includes(q) ||
      tz.city.toLowerCase().includes(q) ||
      tz.abbreviation.toLowerCase().includes(q)
    );
  });

  const handleSelect = (tz: CountryTimezone) => {
    onSelect(tz);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-gray-900 border border-gray-700/60 rounded-2xl shadow-2xl animate-slide-up overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
          <h2 className="text-base font-semibold text-white">
            Select Country — Slot {slotIndex + 1}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/60 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-gray-700/50">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search country or city…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700/60 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
            />
          </div>
        </div>

        {/* Country List */}
        <div className="max-h-72 overflow-y-auto p-2 custom-scrollbar">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-500">
              No countries found
            </div>
          ) : (
            filtered.map((tz) => {
              const isActive = currentIds.includes(tz.id);
              return (
                <button
                  key={tz.id}
                  onClick={() => handleSelect(tz)}
                  disabled={isActive}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "opacity-40 cursor-not-allowed bg-gray-800/40"
                      : "hover:bg-gray-800 active:bg-gray-700/80"
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{tz.flag}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {tz.country}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{tz.city}</p>
                  </div>
                  <span className="text-xs text-gray-500 font-mono flex-shrink-0">
                    {tz.timezone.split("/").pop()?.replace(/_/g, " ")}
                  </span>
                  {isActive && (
                    <span className="text-xs text-cyan-400 flex-shrink-0">
                      ✓
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
