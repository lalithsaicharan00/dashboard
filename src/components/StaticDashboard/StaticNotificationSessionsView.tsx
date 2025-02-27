import React from 'react';
import { 
  Search, 
  Plus, 
  MoreVertical, 
  ChevronDown,
  MessageSquare,
  Settings,
  Users,
  BarChart2,
  Bot,
  Bell,
  Mail,
  Calendar,
  AlertCircle,
  Clock,
  Inbox
} from 'lucide-react';

const sampleNotificationSessions = [
  {
    id: '1',
    title: 'Check my email',
    icon: Mail,
    isActive: true,
    time: '10 min ago',
    unread: true
  },
  {
    id: '2',
    title: 'Meeting reminder',
    icon: Calendar,
    isActive: false,
    time: '1h ago',
    unread: false
  },
  {
    id: '3',
    title: 'System alerts',
    icon: AlertCircle,
    isActive: false,
    time: '2h ago',
    unread: true
  },
  {
    id: '4',
    title: 'Daily digest',
    icon: Clock,
    isActive: false,
    time: '1d ago',
    unread: false
  },
  {
    id: '5',
    title: 'Message notifications',
    icon: Inbox,
    isActive: false,
    time: '2d ago',
    unread: false
  }
];

interface StaticNotificationSessionsViewProps {
  mode: 'light' | 'dark';
  isMobile?: boolean;
}

const StaticNotificationSessionsView: React.FC<StaticNotificationSessionsViewProps> = ({ mode, isMobile = false }) => {
  const isDark = mode === 'dark';

  return (
    <div className={`border-4 border-dashed border-gray-300 relative ${isMobile ? 'w-[390px]' : ''}`}>
      <div className={`absolute top-2 right-2 px-3 py-1 rounded-full ${
        isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      }`}>
        {mode.toUpperCase()} MODE (NOTIFICATION SESSIONS) {isMobile ? '- MOBILE' : ''}
      </div>

      <div className={`min-h-screen w-full flex ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        {/* Sidebar */}
        <div className={`w-80 flex-shrink-0 border-r ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Notification Sessions
              </h2>
              <div className="flex items-center space-x-2">
                <button className={`p-1.5 rounded-lg hover:bg-gray-100 ${
                  isDark ? 'hover:bg-gray-700 text-gray-300' : 'text-gray-600'
                }`}>
                  <Search className="w-5 h-5" />
                </button>
                <button className={`p-1.5 rounded-lg hover:bg-gray-100 ${
                  isDark ? 'hover:bg-gray-700 text-gray-300' : 'text-gray-600'
                }`}>
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className={`flex items-center justify-between px-4 py-2 rounded-lg ${
              isDark ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <div className="flex items-center space-x-3">
                <Bell className={`w-5 h-5 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`} />
                <span className={`text-sm font-medium ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  All Notifications
                </span>
              </div>
              <ChevronDown className={`w-5 h-5 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </div>
          </div>

          {/* Notification Sessions List */}
          <div className="p-2">
            {sampleNotificationSessions.map(session => {
              const Icon = session.icon;
              return (
                <div key={session.id} className="mb-2">
                  <div className={`flex items-center justify-between px-3 py-2 rounded-lg ${
                    session.isActive
                      ? isDark
                        ? 'bg-gray-700 text-white'
                        : 'bg-gray-100 text-gray-900'
                      : isDark
                        ? 'text-gray-300 hover:bg-gray-700/50'
                        : 'text-gray-600 hover:bg-gray-50'
                  }`}>
                    <div className="flex items-center space-x-2 min-w-0">
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium truncate">
                          {session.title}
                        </span>
                        <span className={`text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {session.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {session.unread && (
                        <div className={`w-2 h-2 rounded-full ${
                          isDark ? 'bg-brand-primary' : 'bg-brand-primary'
                        }`} />
                      )}
                      <button className={`p-1 rounded-lg ${
                        isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                      }`}>
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Navigation */}
          <div className={`mt-auto border-t ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="p-2 grid grid-cols-4 gap-1">
              <button className={`p-2 rounded-lg flex flex-col items-center ${
                isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
              }`}>
                <Bot className="w-5 h-5" />
                <span className="text-xs mt-1">AI</span>
              </button>
              <button className={`p-2 rounded-lg flex flex-col items-center ${
                isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
              }`}>
                <Users className="w-5 h-5" />
                <span className="text-xs mt-1">Team</span>
              </button>
              <button className={`p-2 rounded-lg flex flex-col items-center ${
                isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
              }`}>
                <BarChart2 className="w-5 h-5" />
                <span className="text-xs mt-1">Stats</span>
              </button>
              <button className={`p-2 rounded-lg flex flex-col items-center ${
                isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
              }`}>
                <Settings className="w-5 h-5" />
                <span className="text-xs mt-1">Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <div className={`h-16 flex items-center justify-between px-6 border-b ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center space-x-4">
              <div className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Notification Sessions
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6">
            <div className={`max-w-4xl mx-auto p-6 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h2 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Welcome to Notification Sessions! 🔔
              </h2>
              <p className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Stay updated with all your important notifications in one place. 
                Manage email alerts, meeting reminders, system notifications, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticNotificationSessionsView;
