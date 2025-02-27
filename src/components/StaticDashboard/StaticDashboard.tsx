import React from 'react';
import { Header } from '../Header';
import Sidebar from '../Sidebar';
import NotificationSidebar from '../NotificationSidebar';
import { Send, Mic, File, Globe } from 'lucide-react';

interface StaticDashboardProps {
  isDark: boolean;
}

const staticNotifications = [
  {
    id: '1',
    title: 'New message in Side Conversation 1',
    timestamp: new Date(),
    action: () => console.log('View side conversation 1')
  },
  {
    id: '2',
    title: 'Updates in Child Conversation 2',
    timestamp: new Date(),
    action: () => console.log('View child conversation 2')
  }
];

const staticMessages = [
  {
    id: '1',
    content: 'Hello, how can I help you today?',
    isUser: false,
    timestamp: new Date()
  },
  {
    id: '2',
    content: 'I need help with my project',
    isUser: true,
    timestamp: new Date()
  }
];

const StaticDashboard: React.FC<StaticDashboardProps> = ({ isDark }) => {
  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Header 
        onMenuClick={() => {}}
        onNotificationClick={() => {}}
        notificationCount={staticNotifications.length}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={true}
          onToggle={() => {}}
          activeConversation={null}
          onConversationSelect={() => {}}
          onMainSessionClick={() => {}}
        />
        <main className={`flex-1 flex flex-col ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto space-y-4">
              {staticMessages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg px-4 py-2 ${
                      message.isUser
                        ? isDark
                          ? 'bg-brand-primary text-white'
                          : 'bg-brand-primary text-white'
                        : isDark
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`p-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="max-w-4xl mx-auto">
              <div className={`flex items-center gap-2 p-2 rounded-lg ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className={`flex-1 bg-transparent border-none outline-none ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                  value=""
                  readOnly
                />
                <button className="p-2 hover:bg-opacity-80">
                  <File className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
                <button className="p-2 hover:bg-opacity-80">
                  <Globe className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
                <button className="p-2 hover:bg-opacity-80">
                  <Mic className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
                <button className="p-2 hover:bg-opacity-80">
                  <Send className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
              </div>
            </div>
          </div>
        </main>
        <NotificationSidebar
          isOpen={false}
          notifications={staticNotifications}
          onClose={() => {}}
          onDismiss={() => {}}
          onClearAll={() => {}}
        />
      </div>
    </div>
  );
};

export default StaticDashboard;
