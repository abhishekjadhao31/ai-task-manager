import apiClient from './apiClient.js';

export const taskService = {
  list: () => apiClient.get('/tasks').then((r) => r.data),
  create: (payload) => apiClient.post('/tasks', payload).then((r) => r.data),
  update: (id, payload) => apiClient.put(`/tasks/${id}`, payload).then((r) => r.data),
  remove: (id) => apiClient.delete(`/tasks/${id}`).then((r) => r.data),
};
