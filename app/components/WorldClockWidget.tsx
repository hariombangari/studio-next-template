"use client";

import { useState, useCallback } from "react";
import { TIMEZONES, DEFAULT_COUNTRY_IDS, type CountryTimezone } from "@/app/data/timezones";
import ClockCard from "./ClockCard";
import CountrySelector from "./CountrySelector";

function getCountryById(id: string): CountryTimezone {
  return TIMEZONES.find((tz) => tz.id === id) ?? TIMEZONES[0];
}

export default function WorldClockWidget() {
  const [countryIds, setCountryIds] = useState<string[]>(DEFAULT_COUNTRY_IDS);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState(0);

  const handleOpenSelector = useCallback((slotIndex: number) => {
    setActiveSlot(slotIndex);
    setSelectorOpen(true);
  }, []);

  const handleSelectCountry = useCallback(
    (country: CountryTimezone) => {
      setCountryIds((prev) => {
        const next = [...prev];
        next[activeSlot] = country.id;
        return next;
      });
    },
    [activeSlot]
  );

  const handleReset = useCallback(() => {
    setCountryIds(DEFAULT_COUNTRY_IDS);
  }, []);

  const countries = countryIds.map(getCountryById);
  const isDefault =
    JSON.stringify(countryIds) === JSON.stringify(DEFAULT_COUNTRY_IDS);

  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        {/* Widget Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">
                World Clock
              </h1>
              <p className="text-xs text-gray-500">
                Live time across the globe
              </p>
            </div>
          </div>
          {!isDefault && (
            <button
              onClick={handleReset}
              className="text-xs text-gray-400 hover:text-cyan-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-800/60 cursor-pointer"
            >
              Reset defaults
            </button>
          )}
        </div>

        {/* Clock Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {countries.map((country, index) => (
            <ClockCard
              key={`${country.id}-${index}`}
              country={country}
              onChangeCountry={() => handleOpenSelector(index)}
            />
          ))}
        </div>

        {/* Footer hint */}
        <p className="text-center text-xs text-gray-600 mt-6">
          Click the <span className="text-gray-400">↕</span> icon on any card to change the country
        </p>
      </div>

      <CountrySelector
        isOpen={selectorOpen}
        onClose={() => setSelectorOpen(false)}
        onSelect={handleSelectCountry}
        currentIds={countryIds}
        slotIndex={activeSlot}
      />
    </>
  );
}
