import { format } from 'date-fns';
import { Clock, ArrowLeft } from 'lucide-react';
import { Task } from '../types/task';

interface TaskDetailsProps {
  task: Task;
  onBack: () => void;
}

const priorityColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

export default function TaskDetails({ task, onBack }: TaskDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Tasks
      </button>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{task.title}</h2>
          {task.description && (
            <p className="mt-2 text-gray-600">{task.description}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Status</h3>
            <p className={`mt-1 ${task.status === 'completed' ? 'text-green-600' : 'text-gray-900'}`}>
              {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Priority</h3>
            <span
              className={`mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                priorityColors[task.priority]
              }`}
            >
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>
          </div>

          {task.dueDate && (
            <div>
              <h3 className="text-sm font-medium text-gray-500">Due Date</h3>
              <p className="mt-1 flex items-center text-gray-900">
                <Clock className="h-4 w-4 mr-1" />
                {format(new Date(task.dueDate), 'PPP')}
              </p>
            </div>
          )}

          <div>
            <h3 className="text-sm font-medium text-gray-500">Created</h3>
            <p className="mt-1 text-gray-900">
              {format(new Date(task.createdAt), 'PPP')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}