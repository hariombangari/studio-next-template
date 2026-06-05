export interface CountryTimezone {
  id: string;
  country: string;
  city: string;
  timezone: string;
  flag: string;
  abbreviation: string;
}

export const TIMEZONES: CountryTimezone[] = [
  { id: "gb", country: "United Kingdom", city: "London", timezone: "Europe/London", flag: "🇬🇧", abbreviation: "UK" },
  { id: "us", country: "United States", city: "New York", timezone: "America/New_York", flag: "🇺🇸", abbreviation: "US" },
  { id: "in", country: "India", city: "New Delhi", timezone: "Asia/Kolkata", flag: "🇮🇳", abbreviation: "IN" },
  { id: "ae", country: "UAE", city: "Dubai", timezone: "Asia/Dubai", flag: "🇦🇪", abbreviation: "AE" },
  { id: "jp", country: "Japan", city: "Tokyo", timezone: "Asia/Tokyo", flag: "🇯🇵", abbreviation: "JP" },
  { id: "au", country: "Australia", city: "Sydney", timezone: "Australia/Sydney", flag: "🇦🇺", abbreviation: "AU" },
  { id: "de", country: "Germany", city: "Berlin", timezone: "Europe/Berlin", flag: "🇩🇪", abbreviation: "DE" },
  { id: "fr", country: "France", city: "Paris", timezone: "Europe/Paris", flag: "🇫🇷", abbreviation: "FR" },
  { id: "cn", country: "China", city: "Shanghai", timezone: "Asia/Shanghai", flag: "🇨🇳", abbreviation: "CN" },
  { id: "br", country: "Brazil", city: "São Paulo", timezone: "America/Sao_Paulo", flag: "🇧🇷", abbreviation: "BR" },
  { id: "ca", country: "Canada", city: "Toronto", timezone: "America/Toronto", flag: "🇨🇦", abbreviation: "CA" },
  { id: "sg", country: "Singapore", city: "Singapore", timezone: "Asia/Singapore", flag: "🇸🇬", abbreviation: "SG" },
  { id: "za", country: "South Africa", city: "Johannesburg", timezone: "Africa/Johannesburg", flag: "🇿🇦", abbreviation: "ZA" },
  { id: "kr", country: "South Korea", city: "Seoul", timezone: "Asia/Seoul", flag: "🇰🇷", abbreviation: "KR" },
  { id: "ru", country: "Russia", city: "Moscow", timezone: "Europe/Moscow", flag: "🇷🇺", abbreviation: "RU" },
  { id: "mx", country: "Mexico", city: "Mexico City", timezone: "America/Mexico_City", flag: "🇲🇽", abbreviation: "MX" },
  { id: "sa", country: "Saudi Arabia", city: "Riyadh", timezone: "Asia/Riyadh", flag: "🇸🇦", abbreviation: "SA" },
  { id: "nz", country: "New Zealand", city: "Auckland", timezone: "Pacific/Auckland", flag: "🇳🇿", abbreviation: "NZ" },
  { id: "ng", country: "Nigeria", city: "Lagos", timezone: "Africa/Lagos", flag: "🇳🇬", abbreviation: "NG" },
  { id: "eg", country: "Egypt", city: "Cairo", timezone: "Africa/Cairo", flag: "🇪🇬", abbreviation: "EG" },
  { id: "it", country: "Italy", city: "Rome", timezone: "Europe/Rome", flag: "🇮🇹", abbreviation: "IT" },
  { id: "es", country: "Spain", city: "Madrid", timezone: "Europe/Madrid", flag: "🇪🇸", abbreviation: "ES" },
  { id: "th", country: "Thailand", city: "Bangkok", timezone: "Asia/Bangkok", flag: "🇹🇭", abbreviation: "TH" },
  { id: "us-la", country: "United States", city: "Los Angeles", timezone: "America/Los_Angeles", flag: "🇺🇸", abbreviation: "US-W" },
];

export const DEFAULT_COUNTRY_IDS = ["gb", "us", "in", "ae"];
