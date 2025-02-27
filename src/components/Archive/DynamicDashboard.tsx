import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { Header } from '../Header';
import TasksPopup from '../TasksPopup';
import NotificationSidebar from '../NotificationSidebar';
import { useTheme } from '../ThemeProvider';
import { Send, Mic, File, Globe } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface Notification {
  id: string;
  title: string;
  timestamp: Date;
  action?: () => void;
}

const DynamicDashboard = () => {
  const { isDark } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationSidebarOpen, setIsNotificationSidebarOpen] = useState(false);
  const [activeConversation, setActiveConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [notifications, setNotifications] = useState<Notification[]>([
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
  ]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: inputValue,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleDismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const handleClearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Header 
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        onNotificationClick={() => setIsNotificationSidebarOpen(!isNotificationSidebarOpen)}
        notificationCount={notifications.length}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          activeConversation={activeConversation}
          onConversationSelect={setActiveConversation}
          onMainSessionClick={() => setActiveConversation(null)}
        />
        <main className={`flex-1 flex flex-col ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map(message => (
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
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
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
                <button
                  onClick={handleSendMessage}
                  className="p-2 hover:bg-opacity-80"
                >
                  <Send className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
              </div>
            </div>
          </div>
        </main>
        <NotificationSidebar
          isOpen={isNotificationSidebarOpen}
          notifications={notifications}
          onClose={() => setIsNotificationSidebarOpen(false)}
          onDismiss={handleDismissNotification}
          onClearAll={handleClearAllNotifications}
        />
      </div>
    </div>
  );
};

export default DynamicDashboard;
