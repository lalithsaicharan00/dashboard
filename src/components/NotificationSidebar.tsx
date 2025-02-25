import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { X, Bell, Trash2 } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

interface NotificationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationSidebar: React.FC<NotificationSidebarProps> = ({
  isOpen,
  onClose
}) => {
  const { isDark } = useTheme();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'New Message',
      message: 'You have a new message from John',
      time: '2 min ago',
      isRead: false
    },
    {
      id: '2',
      title: 'Task Completed',
      message: 'Project setup has been completed',
      time: '1 hour ago',
      isRead: true
    }
  ]);

  const [isHovered, setIsHovered] = useState(false);
  let notificationTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(notificationTimeout);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    notificationTimeout = setTimeout(() => {
      setIsHovered(false);
      onClose();
    }, 300);
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const dismissNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      className={`fixed inset-y-0 right-0 w-80 ${
        isOpen || isHovered ? 'translate-x-0' : 'translate-x-full'
      } transform transition-transform duration-200 ease-in-out ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } border-l ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      } shadow-lg z-40`}
    >
      <div className={`p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Bell className={`w-5 h-5 mr-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
            <h2 className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
              Notifications
            </h2>
          </div>
          {notifications.length > 0 && (
            <button
              onClick={clearAllNotifications}
              className={`p-2 rounded-md transition-colors ${
                isDark ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-5rem)]">
        {notifications.length === 0 ? (
          <div className={`text-center py-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            No notifications
          </div>
        ) : (
          notifications.map(notification => (
            <div
              key={notification.id}
              className={`relative p-4 rounded-lg ${
                notification.isRead
                  ? isDark
                    ? 'bg-gray-800'
                    : 'bg-gray-50'
                  : isDark
                  ? 'bg-gray-800 border-l-4 border-[#5A9B91]'
                  : 'bg-gray-50 border-l-4 border-[#5A9B91]'
              }`}
            >
              <button
                onClick={() => dismissNotification(notification.id)}
                className={`absolute top-2 right-2 p-1 rounded-md ${
                  isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-200 text-gray-500'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className={`font-medium mb-1 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                {notification.title}
              </h3>
              <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {notification.message}
              </p>
              <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {notification.time}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationSidebar;
