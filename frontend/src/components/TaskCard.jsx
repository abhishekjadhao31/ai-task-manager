import Button from './Button.jsx';

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-start justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex-1">
        <h3 className={`text-base font-semibold ${task.completed ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
          {task.title}
        </h3>
        {task.description && (
          <p className="mt-1 text-sm text-slate-600">{task.description}</p>
        )}
      </div>
      <div className="ml-4 flex shrink-0 gap-2">
        <Button variant="secondary" onClick={() => onToggle(task)}>
          {task.completed ? 'Reopen' : 'Done'}
        </Button>
        <Button variant="danger" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
