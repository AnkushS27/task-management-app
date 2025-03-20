export interface Task {
  _id: string;
  title: string;
  description?: string;
  status: 'pending' | 'completed';
  dueDate?: Date;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
  dueDate?: Date;
  priority: 'low' | 'medium' | 'high';
}