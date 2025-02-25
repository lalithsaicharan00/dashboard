import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { X, ChevronRight, Plus } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
  category?: string;
}

const TasksPopup: React.FC = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          title: newTaskTitle,
          completed: false,
        },
      ]);
      setNewTaskTitle('');
    }
  };

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 flex items-center space-x-2 px-4 py-2 rounded-full shadow-lg ${
          isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-50 text-gray-800'
        } transition-colors`}
      >
        <span>Tasks</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className={`fixed inset-y-0 right-0 w-80 ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } border-l shadow-xl`}>
      <div className="h-full flex flex-col">
        <div className={`p-4 flex items-center justify-between border-b ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h2 className={`text-lg font-semibold ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Tasks</h2>
          <button
            onClick={() => setIsOpen(false)}
            className={`p-1 rounded-full ${
              isDark ? 'hover:bg-gray-700 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {tasks.map(task => (
            <div
              key={task.id}
              className={`flex items-center space-x-3 p-2 rounded ${
                isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              }`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
              />
              <span className={`flex-1 ${
                task.completed ? 'line-through text-gray-500' : isDark ? 'text-white' : 'text-gray-800'
              }`}>
                {task.title}
              </span>
            </div>
          ))}
        </div>

        <div className={`p-4 border-t ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Add a new task"
              className={`flex-1 px-3 py-2 rounded-md border ${
                isDark
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400'
              } focus:outline-none focus:ring-2 focus:ring-brand-primary`}
            />
            <button
              onClick={handleAddTask}
              disabled={!newTaskTitle.trim()}
              className={`p-2 rounded-md ${
                isDark
                  ? 'bg-brand-primary hover:bg-brand-primary-hover text-white'
                  : 'bg-brand-primary hover:bg-brand-primary-hover text-white'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPopup;
