import { format } from 'date-fns';
import { CheckCircle, Clock, Trash2, Edit, Eye } from 'lucide-react';
import { Task } from '../types/task';

interface TaskCardProps {
  task: Task;
  onStatusChange: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onView: (task: Task) => void;
}

const priorityColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

export default function TaskCard({ task, onStatusChange, onDelete, onEdit, onView }: TaskCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
          {task.description && (
            <p className="mt-1 text-sm text-gray-500">{task.description}</p>
          )}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onView(task)}
            className="text-gray-400 hover:text-blue-500 cursor-pointer"
            title="View Details"
          >
            <Eye className="h-5 w-5" />
          </button>
          <button
            onClick={() => onEdit(task)}
            className="text-gray-400 hover:text-blue-500 cursor-pointer"
            title="Edit Task"
          >
            <Edit className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="text-gray-400 hover:text-red-500 cursor-pointer"
            title="Delete Task"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              priorityColors[task.priority]
            }`}
          >
            {task.priority}
          </span>
          {task.dueDate && (
            <span className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {format(new Date(task.dueDate), 'MMM d, yyyy')}
            </span>
          )}
        </div>

        <button
          onClick={() => onStatusChange(task._id)}
          className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm cursor-pointer ${
            task.status === 'completed'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          <CheckCircle className="h-4 w-4" />
          <span>{task.status}</span>
        </button>
      </div>
    </div>
  );
}