import axios from 'axios';
import { CreateTaskInput, Task } from '../types/task';

const API_URL = process.env.BACKEND_API_URL || 'http://localhost:5000/api';

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data.data;
};

export const createTask = async (task: CreateTaskInput): Promise<Task> => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data.data;
};

export const updateTask = async (id: string, task: Partial<Task>): Promise<Task> => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, task);
  return response.data.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/tasks/${id}`);
};