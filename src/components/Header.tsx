import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { ChevronDown, Sun, Moon, Menu, RefreshCw, Bell, CheckSquare } from 'lucide-react';
import TaskManager from './TaskManager/TaskManager';

interface HeaderProps {
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuClick,
  onNotificationClick
}) => {
  const { isDark, toggleTheme } = useTheme();
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('gpt4');
  const [showTaskManager, setShowTaskManager] = useState(false);

  // Add delay to prevent immediate closing
  let taskManagerTimeout: NodeJS.Timeout;
  
  const handleTaskMouseEnter = () => {
    clearTimeout(taskManagerTimeout);
    setShowTaskManager(true);
  };

  const handleTaskMouseLeave = () => {
    taskManagerTimeout = setTimeout(() => {
      setShowTaskManager(false);
    }, 300); // 300ms delay before closing
  };

  const handleTaskManagerMouseEnter = () => {
    clearTimeout(taskManagerTimeout);
  };

  const handleTaskManagerMouseLeave = () => {
    taskManagerTimeout = setTimeout(() => {
      setShowTaskManager(false);
    }, 300);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-30 h-16 ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-b`}>
        <div className="h-full px-6 mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onMouseEnter={onMenuClick}
              className="text-brand-primary hover:text-brand-primary-hover transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            <h1 className="text-2xl font-semibold text-brand-primary">
              Zoomey
            </h1>

            <div className="relative">
              <button
                onMouseEnter={() => setIsModelDropdownOpen(true)}
                onMouseLeave={() => setIsModelDropdownOpen(false)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-md ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors`}
              >
                <span className={isDark ? 'text-gray-200' : 'text-gray-700'}>
                  {selectedModel.toUpperCase()}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isModelDropdownOpen && (
                <div 
                  onMouseEnter={() => setIsModelDropdownOpen(true)}
                  onMouseLeave={() => setIsModelDropdownOpen(false)}
                  className={`absolute top-full mt-1 w-40 rounded-md shadow-lg ${
                    isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  } border`}
                >
                  {['gpt4', 'gpt3.5', 'claude'].map(model => (
                    <button
                      key={model}
                      onClick={() => {
                        setSelectedModel(model);
                        setIsModelDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 ${
                        isDark ? 'hover:bg-gray-600 text-gray-200' : 'hover:bg-gray-100 text-gray-700'
                      } transition-colors`}
                    >
                      {model.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setSelectedModel('gpt4')}
              className="text-brand-primary hover:text-brand-primary-hover transition-colors"
              title="Reset to default model"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div
              onMouseEnter={handleTaskMouseEnter}
              onMouseLeave={handleTaskMouseLeave}
            >
              <button
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-md ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                } transition-colors`}
              >
                <CheckSquare className="w-5 h-5" />
                <span>Tasks</span>
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="text-brand-primary hover:text-brand-primary-hover transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onMouseEnter={onNotificationClick}
              className="text-brand-primary hover:text-brand-primary-hover transition-colors relative"
            >
              <Bell className="w-5 h-5" />
            </button>

            <button
              className={`px-4 py-1.5 rounded-md ${
                isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              } transition-colors`}
            >
              Clear Chat
            </button>

            <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-white font-medium">
              <span>JM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Task Manager Modal */}
      {showTaskManager && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-end pt-16"
          onMouseEnter={handleTaskManagerMouseEnter}
          onMouseLeave={handleTaskManagerMouseLeave}
        >
          <div className={`w-96 h-[calc(100vh-4rem)] rounded-lg shadow-lg ${
            isDark ? 'bg-gray-900' : 'bg-white'
          }`}>
            <TaskManager 
              isExpanded={true} 
              onClose={() => setShowTaskManager(false)}
              sidebarMode={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
