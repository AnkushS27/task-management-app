import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { CreateTaskInput, Task } from "../types/task";

interface TaskFormProps {
  onSubmit: (task: CreateTaskInput) => void;
  onCancel: () => void;
  initialTask?: Task;
  isEditing?: boolean;
}

export default function TaskForm({
  onSubmit,
  onCancel,
  initialTask,
  isEditing = false,
}: TaskFormProps) {
  const [task, setTask] = useState<CreateTaskInput>({
    title: "",
    description: "",
    priority: "medium",
    dueDate: undefined,
  });

  useEffect(() => {
    if (initialTask) {
      setTask({
        title: initialTask.title,
        description: initialTask.description || "",
        priority: initialTask.priority,
        dueDate: initialTask.dueDate,
      });
    }
  }, [initialTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="dueDate"
            className="block text-sm font-medium text-gray-700"
          >
            Due Date
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="datetime-local"
              id="dueDate"
              value={
                task.dueDate instanceof Date
                  ? new Date(
                      task.dueDate.getTime() -
                        task.dueDate.getTimezoneOffset() * 60000
                    )
                      .toISOString()
                      .slice(0, 16)
                  : ""
              }
              onChange={(e) =>
                setTask({
                  ...task,
                  dueDate: e.target.value
                    ? new Date(e.target.value)
                    : undefined, 
                })
              }
              className="block w-full pl-10 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700"
          >
            Priority
          </label>
          <select
            id="priority"
            value={task.priority}
            onChange={(e) =>
              setTask({
                ...task,
                priority: e.target.value as "low" | "medium" | "high",
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          {isEditing ? "Update Task" : "Create Task"}
        </button>
      </div>
    </form>
  );
}
