import React from 'react';
import { ChevronDown, Sun, Moon, Menu, RefreshCw, Bell, CheckSquare, MoreVertical, Send, Mic, File, Globe, MessageSquare, GitBranch, Settings, Copy, X, Clock, Check } from 'lucide-react';

const staticNotifications = [
  {
    id: '1',
    title: 'New message in Side Conversation 1',
    time: '2 min ago',
    isRead: false
  },
  {
    id: '2',
    title: 'Updates in Child Conversation 2',
    time: '15 min ago',
    isRead: false
  },
  {
    id: '3',
    title: 'Family Pack invitation received',
    time: '1 hour ago',
    isRead: true
  },
  {
    id: '4',
    title: 'Custom Chatbot setup completed',
    time: '2 hours ago',
    isRead: true
  }
];

interface StaticNotificationViewProps {
  mode: 'light' | 'dark';
  isMobile?: boolean;
}

const StaticNotificationView: React.FC<StaticNotificationViewProps> = ({ mode, isMobile = false }) => {
  const isDark = mode === 'dark';
  
  return (
    <div className={`border-4 border-dashed border-gray-300 relative ${isMobile ? 'w-[390px]' : ''}`}>
      <div className={`absolute top-2 right-2 px-3 py-1 rounded-full ${
        isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      }`}>
        {mode.toUpperCase()} MODE (NOTIFICATIONS)
      </div>
      
      <div className={`${isMobile ? 'h-[844px]' : 'h-screen'} flex flex-col ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Header */}
        <header className={`h-16 ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-b flex-shrink-0`}>
          <div className="h-full px-4 md:px-6 mx-auto max-w-7xl flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Menu className="w-5 h-5 text-brand-primary" />
              <h1 className="text-xl font-semibold text-brand-primary">
                Zoomey
              </h1>
              {!isMobile && (
                <>
                  <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-md ${
                    isDark ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <span className={isDark ? 'text-gray-200' : 'text-gray-700'}>
                      GPT4
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <RefreshCw className="w-5 h-5 text-brand-primary" />
                </>
              )}
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              {isMobile && (
                <span className="px-2 py-1 rounded-md text-sm font-medium text-brand-primary">
                  GPT4
                </span>
              )}
              <button className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1.5 rounded-md ${
                isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
              }`}>
                <CheckSquare className="w-5 h-5" />
                {!isMobile && <span>Tasks</span>}
              </button>
              {isDark ? 
                <Sun className="w-5 h-5 text-brand-primary" /> : 
                <Moon className="w-5 h-5 text-brand-primary" />
              }
              <Bell className="w-5 h-5 text-brand-primary" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-secondary flex items-center justify-center text-white">
                <span className="text-sm md:text-base">JM</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* Main Chat Area - Hidden on mobile when notifications are shown */}
          <div className={`flex-1 flex flex-col ${isMobile ? 'hidden' : ''}`}>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="max-w-4xl mx-auto space-y-4">
                {/* Example chat messages */}
                <div className="flex justify-start">
                  <div className={`relative max-w-[70%] rounded-lg px-4 py-2 ${
                    isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                  }`}>
                    <div className="absolute top-2 right-2 flex items-center space-x-1">
                      <button className="p-1 hover:bg-black/10 rounded">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-black/10 rounded">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="pr-16">
                      Hello, how can I help you today?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className={`border-t p-4 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="max-w-4xl mx-auto">
                <div className={`flex items-center space-x-2 rounded-lg border px-4 py-2 ${
                  isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
                }`}>
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className={`flex-1 bg-transparent focus:outline-none ${
                      isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                    }`}
                    readOnly
                  />
                  <div className="flex items-center space-x-2">
                    <button className={`p-2 rounded-full hover:bg-gray-100 ${isDark ? 'hover:bg-gray-700' : ''}`}>
                      <File className="w-5 h-5 text-brand-primary" />
                    </button>
                    <button className={`p-2 rounded-full hover:bg-gray-100 ${isDark ? 'hover:bg-gray-700' : ''}`}>
                      <Mic className="w-5 h-5 text-brand-primary" />
                    </button>
                    <button className={`p-2 rounded-full hover:bg-gray-100 ${isDark ? 'hover:bg-gray-700' : ''}`}>
                      <Globe className="w-5 h-5 text-brand-primary" />
                    </button>
                    <button className={`p-2 rounded-full bg-brand-primary text-white`}>
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notification Bar */}
          <div className={`${isMobile ? 'w-[80%]' : 'w-80'} flex-shrink-0 border-l flex flex-col ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } ${isMobile ? 'animate-slide-in-right absolute right-0 h-full' : ''}`}
          style={isMobile ? {
            boxShadow: '-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)'
          } : undefined}>
            <div className={`flex items-center justify-between p-3 md:p-4 border-b border-gray-200 dark:border-gray-700`}>
              <div className="flex items-center space-x-2">
                <Bell className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                <h2 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Notifications
                </h2>
              </div>
              {isMobile && (
                <button className={`p-1.5 rounded-lg ${
                  isDark ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-900'
                }`}>
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className={`p-3 md:p-4 space-y-2 md:space-y-3`}>
                {staticNotifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`relative p-2.5 md:p-3 rounded-lg border ${
                      isDark
                        ? notification.isRead
                          ? 'bg-gray-700/50 border-gray-600'
                          : 'bg-gray-700 border-gray-600'
                        : notification.isRead
                          ? 'bg-gray-50 border-gray-200'
                          : 'bg-white border-gray-200 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-14">
                        <p className={`text-sm font-medium ${
                          isDark
                            ? notification.isRead ? 'text-gray-300' : 'text-white'
                            : notification.isRead ? 'text-gray-600' : 'text-gray-900'
                        }`}>
                          {notification.title}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className={`w-3.5 h-3.5 ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`} />
                          <span className={`text-xs ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {notification.time}
                          </span>
                        </div>
                      </div>
                      {/* Action buttons */}
                      <div className="absolute top-2.5 md:top-3 right-2.5 md:right-3 flex items-center space-x-1">
                        <button className={`p-1 md:p-1.5 rounded-full ${
                          isDark
                            ? 'hover:bg-gray-600 text-gray-300'
                            : 'hover:bg-gray-100 text-gray-600'
                        }`}>
                          <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                        <button className={`p-1 md:p-1.5 rounded-full ${
                          isDark
                            ? 'hover:bg-gray-600 text-gray-300'
                            : 'hover:bg-gray-100 text-gray-600'
                        }`}>
                          <X className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                      </div>
                      {/* Unread indicator */}
                      {!notification.isRead && (
                        <div className="absolute top-2.5 md:top-3 right-14 md:right-16">
                          <div className="w-2 h-2 rounded-full bg-brand-primary" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-3 md:p-4 border-t ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <button className={`w-full py-2 px-4 rounded-lg text-sm font-medium ${
                isDark
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Mark all as read
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticNotificationView;
