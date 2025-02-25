import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { ChevronDown, Sun, Moon, Menu, RefreshCw, Bell, CheckSquare, MoreVertical } from 'lucide-react';
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-30 h-16 ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-b`}>
        <div className="h-full px-4 md:px-6 mx-auto max-w-7xl flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              onClick={onMenuClick}
              className="text-brand-primary hover:text-brand-primary-hover transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            <h1 className="text-xl md:text-2xl font-semibold text-brand-primary">
              Zoomey
            </h1>

            {/* Model Selector - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
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
                <div className={`absolute top-full mt-1 w-40 rounded-md shadow-lg ${
                  isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                } border`}>
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
              className="hidden md:block text-brand-primary hover:text-brand-primary-hover transition-colors"
              title="Reset to default model"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Mobile-only model button */}
            <button
              onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
              className="md:hidden px-2 py-1 rounded-md text-sm font-medium text-brand-primary"
            >
              {selectedModel.toUpperCase()}
            </button>

            {/* Tasks button - Compact on mobile */}
            <button
              onClick={() => setShowTaskManager(true)}
              className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1.5 rounded-md ${
                isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              } transition-colors`}
            >
              <CheckSquare className="w-5 h-5" />
              <span className="hidden md:inline">Tasks</span>
            </button>

            <button
              onClick={toggleTheme}
              className="text-brand-primary hover:text-brand-primary-hover transition-colors p-2"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={onNotificationClick}
              className="text-brand-primary hover:text-brand-primary-hover transition-colors relative p-2"
            >
              <Bell className="w-5 h-5" />
            </button>

            {/* More menu for mobile */}
            <div className="relative md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 rounded-md text-brand-primary hover:text-brand-primary-hover transition-colors"
              >
                <MoreVertical className="w-5 h-5" />
              </button>

              {showMobileMenu && (
                <div className={`absolute right-0 top-full mt-2 w-48 rounded-md shadow-lg ${
                  isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                } border`}>
                  <button
                    onClick={() => {
                      setShowMobileMenu(false);
                    }}
                    className={`w-full text-left px-4 py-3 ${
                      isDark ? 'hover:bg-gray-600 text-gray-200' : 'hover:bg-gray-100 text-gray-700'
                    } transition-colors flex items-center space-x-2`}
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Reset Model</span>
                  </button>
                  <button
                    className={`w-full text-left px-4 py-3 ${
                      isDark ? 'hover:bg-gray-600 text-gray-200' : 'hover:bg-gray-100 text-gray-700'
                    } transition-colors`}
                  >
                    Clear Chat
                  </button>
                </div>
              )}
            </div>

            {/* Clear Chat button - Hidden on mobile */}
            <button
              className={`hidden md:block px-4 py-1.5 rounded-md ${
                isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              } transition-colors`}
            >
              Clear Chat
            </button>

            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-secondary flex items-center justify-center text-white font-medium">
              <span className="text-sm md:text-base">JM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Task Manager Modal - Full screen on mobile */}
      {showTaskManager && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black bg-opacity-50">
          <div className={`relative w-full h-full md:h-[80vh] md:max-w-4xl md:rounded-lg shadow-lg ${
            isDark ? 'bg-gray-900' : 'bg-white'
          }`}>
            <TaskManager 
              isExpanded={true} 
              onClose={() => setShowTaskManager(false)}
            />
          </div>
        </div>
      )}

      {/* Mobile Model Selector Modal */}
      {isModelDropdownOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50">
          <div className={`w-full rounded-t-xl shadow-lg ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="p-4">
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
              <div className="space-y-2">
                {['gpt4', 'gpt3.5', 'claude'].map(model => (
                  <button
                    key={model}
                    onClick={() => {
                      setSelectedModel(model);
                      setIsModelDropdownOpen(false);
                    }}
                    className={`w-full text-center py-3 rounded-md ${
                      selectedModel === model
                        ? 'bg-brand-primary text-white'
                        : isDark
                        ? 'text-gray-200 hover:bg-gray-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    } transition-colors`}
                  >
                    {model.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsModelDropdownOpen(false)}
                className={`w-full text-center py-3 mt-4 rounded-md ${
                  isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
