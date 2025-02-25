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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 h-16 bg-gray-800 border-gray-700 border-b">
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
                className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <span className="text-gray-200">
                  {selectedModel.toUpperCase()}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isModelDropdownOpen && (
                <div 
                  onMouseEnter={() => setIsModelDropdownOpen(true)}
                  onMouseLeave={() => setIsModelDropdownOpen(false)}
                  className="absolute top-full mt-1 w-40 rounded-md shadow-lg bg-gray-700 border-gray-600 border"
                >
                  {['gpt4', 'gpt3.5', 'claude'].map(model => (
                    <button
                      key={model}
                      onClick={() => {
                        setSelectedModel(model);
                        setIsModelDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-600 text-gray-200 transition-colors"
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
            <div className="relative">
              <button
                className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-200 transition-colors"
              >
                <CheckSquare className="w-5 h-5" />
                <span>Tasks</span>
              </button>

              {/* Task Manager Overlay - Always visible */}
              <div 
                className="absolute right-0 mt-2 w-96"
              >
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <TaskManager 
                    isExpanded={true} 
                    onClose={() => {}}
                    sidebarMode={true}
                  />
                </div>
              </div>
            </div>

            <button
              className="text-brand-primary hover:text-brand-primary-hover transition-colors"
            >
              <Sun className="w-5 h-5" />
            </button>

            <button
              onMouseEnter={onNotificationClick}
              className="text-brand-primary hover:text-brand-primary-hover transition-colors relative"
            >
              <Bell className="w-5 h-5" />
            </button>

            <button
              className="px-4 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-200 transition-colors"
            >
              Clear Chat
            </button>

            <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-white font-medium">
              <span>JM</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
