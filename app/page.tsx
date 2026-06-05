import WorldClockWidget from "@/components/WorldClockWidget";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-gradient-to-br from-zinc-50 via-white to-zinc-100 px-4 py-12 font-sans dark:from-zinc-950 dark:via-black dark:to-zinc-900 sm:py-16">
      <main className="w-full">
        <WorldClockWidget />
      </main>
    </div>
  );
}
