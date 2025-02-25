import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { ChevronDown, Moon, Menu, RefreshCw, Bell, CheckSquare } from 'lucide-react';
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
      <header className="fixed top-0 left-0 right-0 z-30 h-16 bg-white border-gray-200 border-b">
        <div className="h-full px-6 mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onMouseEnter={onMenuClick}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            <h1 className="text-2xl font-semibold text-gray-900">
              Zoomey
            </h1>

            <div className="relative">
              <button
                onMouseEnter={() => setIsModelDropdownOpen(true)}
                onMouseLeave={() => setIsModelDropdownOpen(false)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-700">
                  {selectedModel.toUpperCase()}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isModelDropdownOpen && (
                <div 
                  onMouseEnter={() => setIsModelDropdownOpen(true)}
                  onMouseLeave={() => setIsModelDropdownOpen(false)}
                  className="absolute top-full mt-1 w-40 rounded-md shadow-lg bg-white border-gray-200 border"
                >
                  {['gpt4', 'gpt3.5', 'claude'].map(model => (
                    <button
                      key={model}
                      onClick={() => {
                        setSelectedModel(model);
                        setIsModelDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors"
                    >
                      {model.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setSelectedModel('gpt4')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
              title="Reset to default model"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Moon className="w-5 h-5" />
            </button>

            <button
              onMouseEnter={onNotificationClick}
              className="text-gray-700 hover:text-gray-900 transition-colors relative"
            >
              <Bell className="w-5 h-5" />
            </button>

            <button
              className="px-4 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            >
              Clear Chat
            </button>

            <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-white font-medium">
              <span>JM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Task Manager Sidebar - Always visible */}
      <div className="fixed inset-y-0 right-20 w-96 bg-white border-l border-gray-200 shadow-lg z-40">
        <TaskManager 
          isExpanded={true} 
          onClose={() => {}}
          sidebarMode={true}
        />
      </div>
    </>
  );
};

export default Header;
