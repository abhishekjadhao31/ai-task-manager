import { useTasks } from '../hooks/useTasks.js';

export default function Dashboard() {
  const { tasks, loading } = useTasks();
  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;
  const open = total - done;

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Dashboard</h1>
      {loading ? (
        <p className="text-slate-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Stat label="Total tasks" value={total} />
          <Stat label="Open" value={open} />
          <Stat label="Completed" value={done} />
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-semibold text-indigo-600">{value}</p>
    </div>
  );
}
