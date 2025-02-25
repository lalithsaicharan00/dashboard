import React, { useState } from 'react';
import { useTheme } from '../ThemeProvider';
import { 
  Check, 
  Calendar, 
  Plus, 
  Search, 
  ChevronDown, 
  MoreVertical, 
  X,
  ChevronRight,
  Filter,
  Clock,
  ArrowLeft
} from 'lucide-react';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: Date;
  category?: string;
  subcategory?: string;
  description?: string;
}

interface TaskManagerProps {
  isExpanded: boolean;
  onClose: () => void;
  sidebarMode?: boolean;
}

const TaskManager: React.FC<TaskManagerProps> = ({ 
  isExpanded, 
  onClose,
  sidebarMode = false 
}) => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<'tasks' | 'due'>('tasks');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Mobile app testing',
      completed: false,
      dueDate: new Date('2025-02-22'),
      category: 'Development',
      subcategory: 'Testing'
    },
    {
      id: '2',
      title: 'Update documentation',
      completed: true,
      dueDate: new Date('2025-02-23'),
      category: 'Documentation',
      subcategory: 'Technical'
    }
  ]);

  const categories = ['All Categories', 'Development', 'Documentation', 'Design'];
  const subcategories = ['All Subcategories', 'Testing', 'Technical', 'UI/UX'];

  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || task.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'All Subcategories' || task.subcategory === selectedSubcategory;
    const matchesTab = activeTab === 'tasks' || (activeTab === 'due' && task.dueDate && new Date(task.dueDate) <= new Date());
    return matchesSearch && matchesCategory && matchesSubcategory && matchesTab;
  });

  const TaskHeader = () => (
    <div className={`p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {/* Mobile back button */}
          <button 
            onClick={onClose}
            className="md:hidden mr-2 p-2 rounded-md text-brand-primary hover:text-brand-primary-hover"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
            Tasks
          </h2>
          {!sidebarMode && (
            <button 
              onClick={onClose}
              className={`hidden md:block ml-4 p-2 rounded-md ${
                isDark ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden p-2 rounded-md text-brand-primary hover:text-brand-primary-hover"
          >
            <Filter className="w-5 h-5" />
          </button>
          <button
            className={`px-3 py-2 rounded-md bg-[#5A9B91] text-white hover:bg-[#4A8B81] transition-colors flex items-center`}
          >
            <Plus className="w-4 h-4 mr-2" />
            <span className="hidden md:inline">Add Task</span>
          </button>
        </div>
      </div>

      {/* Tab buttons - Scrollable on mobile */}
      <div className="flex items-center space-x-4 mb-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        <button
          onClick={() => setActiveTab('tasks')}
          className={`flex-shrink-0 px-3 py-2 rounded-md transition-colors ${
            activeTab === 'tasks'
              ? 'bg-[#5A9B91] text-white'
              : isDark
              ? 'text-gray-400 hover:bg-gray-800'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Check className="w-4 h-4 inline-block mr-2" />
          Tasks
        </button>
        <button
          onClick={() => setActiveTab('due')}
          className={`flex-shrink-0 px-3 py-2 rounded-md transition-colors ${
            activeTab === 'due'
              ? 'bg-[#5A9B91] text-white'
              : isDark
              ? 'text-gray-400 hover:bg-gray-800'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Clock className="w-4 h-4 inline-block mr-2" />
          Due Tasks
        </button>
      </div>

      {/* Search and Filters - Responsive layout */}
      <div className={`space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 ${
        showFilters ? 'block' : 'hidden md:grid'
      }`}>
        <div className={`relative rounded-md ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-md border ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-500' 
                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`flex-1 px-4 py-2 rounded-md border ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-gray-200' 
                : 'bg-white border-gray-200 text-gray-900'
            }`}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className={`flex-1 px-4 py-2 rounded-md border ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-gray-200' 
                : 'bg-white border-gray-200 text-gray-900'
            }`}
          >
            {subcategories.map(subcategory => (
              <option key={subcategory} value={subcategory}>{subcategory}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const TaskList = () => (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="space-y-2">
        {filteredTasks.map(task => (
          <div
            key={task.id}
            className={`group flex items-center p-3 rounded-md transition-colors ${
              isDark 
                ? 'hover:bg-gray-800 bg-gray-900' 
                : 'hover:bg-gray-50 bg-white'
            }`}
          >
            <button
              onClick={() => handleTaskToggle(task.id)}
              className={`w-5 h-5 rounded border flex items-center justify-center ${
                task.completed
                  ? 'bg-[#5A9B91] border-[#5A9B91]'
                  : isDark
                  ? 'border-gray-600'
                  : 'border-gray-300'
              }`}
            >
              {task.completed && <Check className="w-3 h-3 text-white" />}
            </button>
            <div className="ml-3 flex-1">
              <div className={`font-medium ${
                isDark ? 'text-gray-200' : 'text-gray-900'
              } ${task.completed ? 'line-through opacity-50' : ''}`}>
                {task.title}
              </div>
              {task.dueDate && (
                <div className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Due: {task.dueDate.toLocaleDateString()}
                </div>
              )}
            </div>
            <button
              className={`p-2 rounded-md md:opacity-0 md:group-hover:opacity-100 transition-opacity ${
                isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col ${
        isExpanded
          ? 'fixed inset-0 z-50 bg-white dark:bg-gray-900'
          : sidebarMode
          ? 'h-full'
          : 'hidden'
      }`}
    >
      <TaskHeader />
      <TaskList />
    </div>
  );
};

export default TaskManager;
