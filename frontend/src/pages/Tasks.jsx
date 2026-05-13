import { useState } from 'react';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import TaskCard from '../components/TaskCard.jsx';
import { useTasks } from '../hooks/useTasks.js';

export default function Tasks() {
  const { tasks, loading, error, create, update, remove } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await create({ title, description });
    setTitle('');
    setDescription('');
  };

  const onToggle = (task) => update(task.id, { completed: !task.completed });

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Tasks</h1>

      <form onSubmit={onCreate} className="mb-6 grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[1fr_1fr_auto]">
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button type="submit">Add</Button>
      </form>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
      {loading ? (
        <p className="text-slate-600">Loading...</p>
      ) : tasks.length === 0 ? (
        <p className="text-slate-600">No tasks yet.</p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={remove} />
          ))}
        </div>
      )}
    </div>
  );
}
