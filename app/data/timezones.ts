export interface CountryTimezone {
  code: string;
  name: string;
  timezone: string;
  flag: string;
  city: string;
}

export const COUNTRIES: CountryTimezone[] = [
  { code: "GB", name: "United Kingdom", timezone: "Europe/London", flag: "🇬🇧", city: "London" },
  { code: "US", name: "United States", timezone: "America/New_York", flag: "🇺🇸", city: "New York" },
  { code: "IN", name: "India", timezone: "Asia/Kolkata", flag: "🇮🇳", city: "Mumbai" },
  { code: "AE", name: "UAE", timezone: "Asia/Dubai", flag: "🇦🇪", city: "Dubai" },
  { code: "JP", name: "Japan", timezone: "Asia/Tokyo", flag: "🇯🇵", city: "Tokyo" },
  { code: "AU", name: "Australia", timezone: "Australia/Sydney", flag: "🇦🇺", city: "Sydney" },
  { code: "DE", name: "Germany", timezone: "Europe/Berlin", flag: "🇩🇪", city: "Berlin" },
  { code: "FR", name: "France", timezone: "Europe/Paris", flag: "🇫🇷", city: "Paris" },
  { code: "CN", name: "China", timezone: "Asia/Shanghai", flag: "🇨🇳", city: "Shanghai" },
  { code: "BR", name: "Brazil", timezone: "America/Sao_Paulo", flag: "🇧🇷", city: "São Paulo" },
  { code: "CA", name: "Canada", timezone: "America/Toronto", flag: "🇨🇦", city: "Toronto" },
  { code: "RU", name: "Russia", timezone: "Europe/Moscow", flag: "🇷🇺", city: "Moscow" },
  { code: "KR", name: "South Korea", timezone: "Asia/Seoul", flag: "🇰🇷", city: "Seoul" },
  { code: "SG", name: "Singapore", timezone: "Asia/Singapore", flag: "🇸🇬", city: "Singapore" },
  { code: "ZA", name: "South Africa", timezone: "Africa/Johannesburg", flag: "🇿🇦", city: "Johannesburg" },
  { code: "MX", name: "Mexico", timezone: "America/Mexico_City", flag: "🇲🇽", city: "Mexico City" },
  { code: "IT", name: "Italy", timezone: "Europe/Rome", flag: "🇮🇹", city: "Rome" },
  { code: "ES", name: "Spain", timezone: "Europe/Madrid", flag: "🇪🇸", city: "Madrid" },
  { code: "TH", name: "Thailand", timezone: "Asia/Bangkok", flag: "🇹🇭", city: "Bangkok" },
  { code: "EG", name: "Egypt", timezone: "Africa/Cairo", flag: "🇪🇬", city: "Cairo" },
  { code: "NG", name: "Nigeria", timezone: "Africa/Lagos", flag: "🇳🇬", city: "Lagos" },
  { code: "AR", name: "Argentina", timezone: "America/Argentina/Buenos_Aires", flag: "🇦🇷", city: "Buenos Aires" },
  { code: "TR", name: "Turkey", timezone: "Europe/Istanbul", flag: "🇹🇷", city: "Istanbul" },
  { code: "SA", name: "Saudi Arabia", timezone: "Asia/Riyadh", flag: "🇸🇦", city: "Riyadh" },
  { code: "NZ", name: "New Zealand", timezone: "Pacific/Auckland", flag: "🇳🇿", city: "Auckland" },
  { code: "PH", name: "Philippines", timezone: "Asia/Manila", flag: "🇵🇭", city: "Manila" },
  { code: "MY", name: "Malaysia", timezone: "Asia/Kuala_Lumpur", flag: "🇲🇾", city: "Kuala Lumpur" },
  { code: "ID", name: "Indonesia", timezone: "Asia/Jakarta", flag: "🇮🇩", city: "Jakarta" },
  { code: "PK", name: "Pakistan", timezone: "Asia/Karachi", flag: "🇵🇰", city: "Karachi" },
  { code: "BD", name: "Bangladesh", timezone: "Asia/Dhaka", flag: "🇧🇩", city: "Dhaka" },
  { code: "SE", name: "Sweden", timezone: "Europe/Stockholm", flag: "🇸🇪", city: "Stockholm" },
  { code: "NO", name: "Norway", timezone: "Europe/Oslo", flag: "🇳🇴", city: "Oslo" },
  { code: "CH", name: "Switzerland", timezone: "Europe/Zurich", flag: "🇨🇭", city: "Zurich" },
  { code: "PT", name: "Portugal", timezone: "Europe/Lisbon", flag: "🇵🇹", city: "Lisbon" },
  { code: "GR", name: "Greece", timezone: "Europe/Athens", flag: "🇬🇷", city: "Athens" },
  { code: "IL", name: "Israel", timezone: "Asia/Jerusalem", flag: "🇮🇱", city: "Jerusalem" },
  { code: "KE", name: "Kenya", timezone: "Africa/Nairobi", flag: "🇰🇪", city: "Nairobi" },
  { code: "CL", name: "Chile", timezone: "America/Santiago", flag: "🇨🇱", city: "Santiago" },
  { code: "CO", name: "Colombia", timezone: "America/Bogota", flag: "🇨🇴", city: "Bogotá" },
  { code: "PE", name: "Peru", timezone: "America/Lima", flag: "🇵🇪", city: "Lima" },
  { code: "FI", name: "Finland", timezone: "Europe/Helsinki", flag: "🇫🇮", city: "Helsinki" },
  { code: "IE", name: "Ireland", timezone: "Europe/Dublin", flag: "🇮🇪", city: "Dublin" },
  { code: "PL", name: "Poland", timezone: "Europe/Warsaw", flag: "🇵🇱", city: "Warsaw" },
  { code: "HK", name: "Hong Kong", timezone: "Asia/Hong_Kong", flag: "🇭🇰", city: "Hong Kong" },
  { code: "TW", name: "Taiwan", timezone: "Asia/Taipei", flag: "🇹🇼", city: "Taipei" },
  { code: "VN", name: "Vietnam", timezone: "Asia/Ho_Chi_Minh", flag: "🇻🇳", city: "Ho Chi Minh" },
];

export const DEFAULT_COUNTRY_CODES = ["GB", "US", "IN", "AE"];

export function getCountryByCode(code: string): CountryTimezone | undefined {
  return COUNTRIES.find((c) => c.code === code);
}
