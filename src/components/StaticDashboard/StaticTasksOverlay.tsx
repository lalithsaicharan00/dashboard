import React from 'react';
import { Search, Filter, MoreVertical, Calendar, Check, X, ChevronDown, Plus } from 'lucide-react';

const sampleTasks = [
  {
    id: '1',
    title: 'Review conversation history for insights',
    dueDate: 'Today',
    completed: false,
    priority: 'high',
    category: 'Research',
    subCategory: 'Analysis'
  },
  {
    id: '2',
    title: 'Update project documentation with new features',
    dueDate: 'Tomorrow',
    completed: true,
    priority: 'medium',
    category: 'Documentation',
    subCategory: 'Updates'
  },
  {
    id: '3',
    title: 'Schedule team meeting for sprint planning',
    dueDate: 'Next Monday',
    completed: false,
    priority: 'high',
    category: 'Meetings',
    subCategory: 'Planning'
  },
  {
    id: '4',
    title: 'Complete code review for PR #123',
    dueDate: 'Today',
    completed: true,
    priority: 'high',
    category: 'Development',
    subCategory: 'Code Review'
  },
  {
    id: '5',
    title: 'Prepare presentation for stakeholders',
    dueDate: 'Next Wednesday',
    completed: false,
    priority: 'medium',
    category: 'Meetings',
    subCategory: 'Presentation'
  }
];

interface StaticTasksOverlayProps {
  mode: 'light' | 'dark';
  showNewTaskForm?: boolean;
  isMobile?: boolean;
}

const StaticTasksOverlay: React.FC<StaticTasksOverlayProps> = ({ mode, showNewTaskForm = false, isMobile = false }) => {
  const isDark = mode === 'dark';

  return (
    <div className={`border-4 border-dashed border-gray-300 relative ${isMobile ? 'w-[390px]' : ''}`}>
      <div className={`absolute top-2 right-2 px-3 py-1 rounded-full ${
        isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      }`}>
        {mode.toUpperCase()} MODE (TASKS) {isMobile ? '- MOBILE' : ''}
      </div>

      {/* Main container with background overlay */}
      <div className={`min-h-screen w-full flex items-start sm:items-center justify-center ${
        isDark ? 'bg-gray-900/80' : 'bg-black/20'
      }`}>
        {/* Tasks popup card */}
        <div className={`w-full ${
          isMobile 
            ? 'min-h-screen max-w-[390px]' 
            : 'w-[80%] max-w-5xl rounded-xl shadow-2xl'
        } ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <h2 className={`text-lg sm:text-2xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Tasks
              </h2>
              <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}>
                {sampleTasks.filter(t => !t.completed).length} remaining
              </span>
            </div>
            <button className={`p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 ${
              isDark ? 'hover:bg-gray-700 text-gray-300' : 'text-gray-600'
            }`}>
              <X className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
          </div>

          {/* Add New Task Button and Form */}
          <div className="p-3 sm:p-6 border-b border-gray-200 dark:border-gray-700">
            {!showNewTaskForm ? (
              <button className={`w-full py-2 sm:py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 ${
                isDark
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                <Plus className="w-4 h-4" />
                <span>Add New Task</span>
              </button>
            ) : (
              <div className="space-y-3">
                <div className={`p-3 sm:p-4 rounded-lg border ${
                  isDark ? 'border-gray-700 bg-gray-700/50' : 'border-gray-200 bg-gray-50'
                }`}>
                  <input
                    type="text"
                    placeholder="Enter task name..."
                    className={`w-full bg-transparent border-none p-2 text-sm sm:text-base focus:outline-none ${
                      isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                    }`}
                    readOnly
                  />
                  <div className="flex flex-col space-y-2 mt-3">
                    <div className={`flex items-center space-x-2 px-3 py-2 rounded border ${
                      isDark ? 'border-gray-600' : 'border-gray-300'
                    }`}>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Priority:</span>
                      <select className={`flex-1 bg-transparent border-none text-sm focus:outline-none ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                    <div className={`flex items-center space-x-2 px-3 py-2 rounded border ${
                      isDark ? 'border-gray-600' : 'border-gray-300'
                    }`}>
                      <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                      <input
                        type="text"
                        placeholder="Select due date"
                        className={`flex-1 bg-transparent border-none text-sm focus:outline-none ${
                          isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                        }`}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-3">
                    <button className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm ${
                      isDark ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-600 hover:bg-gray-100'
                    }`}>
                      Cancel
                    </button>
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm bg-brand-primary text-white hover:bg-brand-primary/90">
                      Add Task
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tabs and Search */}
          <div className="p-3 sm:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-2">
                <button className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm font-medium ${
                  isDark
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  Today
                </button>
                <button className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm font-medium ${
                  isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}>
                  Due Tasks
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${
                  isDark ? 'border-gray-600' : 'border-gray-300'
                }`}>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Category:</span>
                  <select className={`flex-1 bg-transparent border-none text-sm focus:outline-none ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <option>All Categories</option>
                    <option>Research</option>
                    <option>Development</option>
                    <option>Meetings</option>
                  </select>
                </div>
                <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${
                  isDark ? 'border-gray-600' : 'border-gray-300'
                }`}>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Sub-category:</span>
                  <select className={`flex-1 bg-transparent border-none text-sm focus:outline-none ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <option>All Sub-categories</option>
                    <option>Analysis</option>
                    <option>Planning</option>
                    <option>Review</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${
                isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
              }`}>
                <Search className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className={`flex-1 bg-transparent border-none text-sm focus:outline-none ${
                    isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                  }`}
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Tasks list */}
          <div className={`p-3 sm:p-6 space-y-2 sm:space-y-3 ${isMobile ? 'pb-24' : 'max-h-[40vh] overflow-y-auto'}`}>
            {sampleTasks
              .filter(task => task.dueDate === 'Today')
              .map(task => (
                <div
                  key={task.id}
                  className={`flex items-start space-x-3 p-3 rounded-lg border ${
                    isDark
                      ? 'border-gray-700 bg-gray-700/50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                    task.completed
                      ? 'bg-brand-primary border-brand-primary'
                      : isDark
                        ? 'border-gray-600'
                        : 'border-gray-400'
                  }`}>
                    {task.completed && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium break-words ${
                      task.completed
                        ? isDark
                          ? 'line-through text-gray-500'
                          : 'line-through text-gray-400'
                        : isDark
                          ? 'text-white'
                          : 'text-gray-900'
                    }`}>
                      {task.title}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-xs text-gray-400">
                          {task.dueDate}
                        </span>
                      </div>
                      {task.priority === 'high' && (
                        <span className={`px-1.5 py-0.5 rounded text-xs ${
                          isDark ? 'bg-red-900/50 text-red-300' : 'bg-red-100 text-red-600'
                        }`}>
                          High Priority
                        </span>
                      )}
                    </div>
                  </div>
                  <button className={`flex-shrink-0 p-1 rounded-lg ${
                    isDark
                      ? 'hover:bg-gray-600 text-gray-400'
                      : 'hover:bg-gray-100 text-gray-500'
                  }`}>
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticTasksOverlay;
