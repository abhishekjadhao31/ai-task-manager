import { useCallback, useEffect, useState } from 'react';
import { taskService } from '../services/taskService.js';

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await taskService.list();
      setTasks(data);
    } catch (e) {
      setError(e.response?.data?.message || e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const create = async (payload) => {
    const created = await taskService.create(payload);
    setTasks((prev) => [created, ...prev]);
  };

  const update = async (id, payload) => {
    const updated = await taskService.update(id, payload);
    setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
  };

  const remove = async (id) => {
    await taskService.remove(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return { tasks, loading, error, refresh, create, update, remove };
}
