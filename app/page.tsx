import WorldClockWidget from "./components/WorldClockWidget";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-4 sm:p-8">
      <WorldClockWidget />
    </div>
  );
}
