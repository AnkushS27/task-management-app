import { useEffect, useState } from 'react';
import { Plus, Loader } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import TaskDetails from './components/TaskDetails';
import { Task, CreateTaskInput } from './types/task';
import * as api from './api/tasks';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [viewingTask, setViewingTask] = useState<Task | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await api.getTasks();
      setTasks(data);
    } catch (error) {
      toast.error('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskInput: CreateTaskInput) => {
    try {
      const newTask = await api.createTask(taskInput);
      setTasks([newTask, ...tasks]);
      setShowForm(false);
      toast.success('Task created successfully');
    } catch (error) {
      toast.error('Failed to create task');
    }
  };

  const handleUpdateTask = async (taskInput: CreateTaskInput) => {
    if (!selectedTask) return;

    try {
      const updatedTask = await api.updateTask(selectedTask._id, taskInput);
      setTasks(tasks.map((t) => (t._id === selectedTask._id ? updatedTask : t)));
      setShowForm(false);
      setSelectedTask(null);
      setIsEditing(false);
      toast.success('Task updated successfully');
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  const handleStatusChange = async (id: string) => {
    try {
      const task = tasks.find((t) => t._id === id);
      if (!task) return;

      const updatedTask = await api.updateTask(id, {
        status: task.status === 'pending' ? 'completed' : 'pending',
      });

      setTasks(tasks.map((t) => (t._id === id ? updatedTask : t)));
      toast.success('Task status updated');
    } catch (error) {
      toast.error('Failed to update task status');
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await api.deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
      toast.success('Task deleted successfully');
    } catch (error) {
      toast.error('Failed to delete task');
    }
  };

  const handleEditClick = (task: Task) => {
    setSelectedTask(task);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleViewTask = (task: Task) => {
    setViewingTask(task);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setSelectedTask(null);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {viewingTask ? (
          <TaskDetails task={viewingTask} onBack={() => setViewingTask(null)} />
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Task
              </button>
            </div>

            {showForm && (
              <div className="mb-8 bg-white rounded-lg shadow p-6">
                <TaskForm
                  onSubmit={isEditing ? handleUpdateTask : handleCreateTask}
                  onCancel={handleFormCancel}
                  initialTask={selectedTask || undefined}
                  isEditing={isEditing}
                />
              </div>
            )}

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader className="h-8 w-8 text-blue-600 animate-spin" />
              </div>
            ) : tasks.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No tasks yet. Create one to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {tasks.map((task) => (
                  <TaskCard
                    key={task._id}
                    task={task}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDeleteTask}
                    onEdit={handleEditClick}
                    onView={handleViewTask}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;