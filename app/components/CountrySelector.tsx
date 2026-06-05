"use client";

import { useState, useRef, useEffect } from "react";
import { COUNTRIES, type CountryTimezone } from "@/app/data/timezones";

interface CountrySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (country: CountryTimezone) => void;
  currentCodes: string[];
  slotIndex: number;
}

export default function CountrySelector({
  isOpen,
  onClose,
  onSelect,
  currentCodes,
  slotIndex,
}: CountrySelectorProps) {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  const slotLabel = `Slot ${slotIndex + 1}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="mx-4 flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[#1a1a2e] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Select a country"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
          <div>
            <h2 className="text-base font-semibold text-white">
              Change Country
            </h2>
            <p className="mt-0.5 text-xs text-white/40">
              Select a country for {slotLabel}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-white/40 transition-colors hover:bg-white/10 hover:text-white/70"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="border-b border-white/[0.08] px-5 py-3">
          <div className="flex items-center gap-2 rounded-lg bg-white/[0.06] px-3 py-2">
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
              className="shrink-0 text-white/30"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country or city..."
              className="w-full bg-transparent text-sm text-white placeholder-white/30 outline-none"
            />
          </div>
        </div>

        {/* Country list */}
        <div className="max-h-72 overflow-y-auto p-2 scrollbar-thin">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-white/30">
              No countries found
            </div>
          ) : (
            filtered.map((country) => {
              const isAlreadySelected = currentCodes.includes(country.code);
              return (
                <button
                  key={country.code}
                  onClick={() => {
                    if (!isAlreadySelected) {
                      onSelect(country);
                    }
                  }}
                  disabled={isAlreadySelected}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                    isAlreadySelected
                      ? "cursor-not-allowed opacity-35"
                      : "hover:bg-white/[0.06] active:bg-white/[0.1]"
                  }`}
                >
                  <span className="text-xl">{country.flag}</span>
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-medium text-white/90">
                      {country.name}
                    </span>
                    <span className="text-xs text-white/40">
                      {country.city} · {country.timezone}
                    </span>
                  </div>
                  {isAlreadySelected && (
                    <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-medium text-indigo-300">
                      Active
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
