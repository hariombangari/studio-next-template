"use client";

import { useState, useEffect, useCallback } from "react";

interface ClockTime {
  hours: string;
  minutes: string;
  seconds: string;
  period: string;
  date: string;
  day: string;
  offset: string;
}

export function useLiveClock(timezone: string): ClockTime {
  const getTime = useCallback((): ClockTime => {
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
      year: "numeric",
    });

    const offsetFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      timeZoneName: "shortOffset",
    });

    const timeParts = timeFormatter.formatToParts(now);
    const dateParts = dateFormatter.formatToParts(now);
    const offsetParts = offsetFormatter.formatToParts(now);

    const hours = timeParts.find((p) => p.type === "hour")?.value ?? "00";
    const minutes = timeParts.find((p) => p.type === "minute")?.value ?? "00";
    const seconds = timeParts.find((p) => p.type === "second")?.value ?? "00";
    const period = timeParts.find((p) => p.type === "dayPeriod")?.value ?? "AM";

    const weekday = dateParts.find((p) => p.type === "weekday")?.value ?? "";
    const month = dateParts.find((p) => p.type === "month")?.value ?? "";
    const day = dateParts.find((p) => p.type === "day")?.value ?? "";
    const year = dateParts.find((p) => p.type === "year")?.value ?? "";

    const offsetValue =
      offsetParts.find((p) => p.type === "timeZoneName")?.value ?? "";

    return {
      hours,
      minutes,
      seconds,
      period,
      date: `${month} ${day}, ${year}`,
      day: weekday,
      offset: offsetValue,
    };
  }, [timezone]);

  const [time, setTime] = useState<ClockTime>(getTime);

  useEffect(() => {
    setTime(getTime());
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [getTime]);

  return time;
}
