"use client";

import { useState, useCallback } from "react";
import ClockCard from "./ClockCard";
import CountrySelector from "./CountrySelector";
import {
  COUNTRIES,
  DEFAULT_COUNTRY_CODES,
  getCountryByCode,
  type CountryTimezone,
} from "@/app/data/timezones";

export default function WorldClock() {
  const [countryCodes, setCountryCodes] = useState<string[]>(DEFAULT_COUNTRY_CODES);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState<number>(0);

  const countries = countryCodes.map(
    (code) => getCountryByCode(code) ?? COUNTRIES[0]
  );

  const handleChangeCountry = useCallback((slotIndex: number) => {
    setEditingSlot(slotIndex);
    setSelectorOpen(true);
  }, []);

  const handleSelectCountry = useCallback(
    (country: CountryTimezone) => {
      setCountryCodes((prev) => {
        const next = [...prev];
        next[editingSlot] = country.code;
        return next;
      });
      setSelectorOpen(false);
    },
    [editingSlot]
  );

  const handleReset = useCallback(() => {
    setCountryCodes(DEFAULT_COUNTRY_CODES);
  }, []);

  const isDefault =
    countryCodes.length === DEFAULT_COUNTRY_CODES.length &&
    countryCodes.every((c, i) => c === DEFAULT_COUNTRY_CODES[i]);

  return (
    <section className="w-full max-w-5xl px-4">
      {/* Header */}
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🌍</span>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            World Clock
          </h1>
        </div>
        <p className="text-sm text-white/40">
          Live time across the globe · Click the{" "}
          <span className="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/50"
            >
              <path d="M12 20h9" />
              <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
            </svg>
          </span>{" "}
          icon to change a country
        </p>
        {!isDefault && (
          <button
            onClick={handleReset}
            className="mt-1 rounded-full border border-white/[0.1] px-3 py-1 text-xs text-white/40 transition-colors hover:border-white/20 hover:text-white/60"
          >
            Reset to defaults
          </button>
        )}
      </div>

      {/* Clock grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {countries.map((country, index) => (
          <ClockCard
            key={`${country.code}-${index}`}
            country={country}
            onChangeCountry={() => handleChangeCountry(index)}
          />
        ))}
      </div>

      {/* Country selector modal */}
      <CountrySelector
        isOpen={selectorOpen}
        onClose={() => setSelectorOpen(false)}
        onSelect={handleSelectCountry}
        currentCodes={countryCodes}
        slotIndex={editingSlot}
      />
    </section>
  );
}
