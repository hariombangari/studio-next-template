export default function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
        {icon}
      </div>
      <div>
        <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{value}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
      </div>
    </div>
  );
}
