import WorldClock from "./components/WorldClock";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f1a] font-sans">
      <main className="flex w-full flex-col items-center py-12">
        <WorldClock />
      </main>
    </div>
  );
}
