import React from 'react';
import { useTheme } from './ThemeProvider';
import { X, Bell, Trash2 } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  timestamp: Date;
  action?: () => void;
}

interface NotificationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onClearAll: () => void;
  onDismiss: (id: string) => void;
}

const NotificationSidebar: React.FC<NotificationSidebarProps> = ({
  isOpen,
  onClose,
  notifications,
  onClearAll,
  onDismiss,
}) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 transform transition-transform duration-200 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } ${isDark ? 'bg-gray-900 border-l border-gray-700' : 'bg-white border-l border-gray-200'}`}
    >
      <div className={`p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="w-5 h-5 text-[#5A9B91]" />
            <span className={`ml-2 font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
              Notifications
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onClearAll}
              className={`p-2 rounded-md ${
                isDark ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <Trash2 className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-md ${
                isDark ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {notifications.length === 0 ? (
          <div className={`text-center py-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            No notifications
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`relative p-4 rounded-lg transition-colors ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <button
                  onClick={() => onDismiss(notification.id)}
                  className={`absolute top-2 right-2 p-1 rounded-md ${
                    isDark 
                      ? 'text-gray-400 hover:bg-gray-700 hover:text-gray-300' 
                      : 'text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
                <div
                  className="cursor-pointer"
                  onClick={notification.action}
                >
                  <h3 className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                    {notification.title}
                  </h3>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {notification.timestamp.toLocaleTimeString()}
                  </p>
                  <button className="mt-2 text-sm text-[#5A9B91] hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationSidebar;
