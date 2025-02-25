import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Sidebar from './components/Sidebar';
import { Header } from './components/Header';
import TasksPopup from './components/TasksPopup';
import NotificationSidebar from './components/NotificationSidebar';
import { useTheme } from './components/ThemeProvider';
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

const AppContent = () => {
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
          <div className={`p-4 border-t ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
            <div className="max-w-4xl mx-auto flex items-center space-x-4">
              <div className={`flex-1 flex items-center space-x-2 rounded-lg border px-4 py-2 ${
                isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
              }`}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className={`flex-1 bg-transparent focus:outline-none ${
                    isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                  }`}
                />
                <button className={`p-1 rounded hover:bg-gray-100 ${
                  isDark ? 'text-gray-400 hover:bg-gray-600' : 'text-gray-500'
                }`}>
                  <Mic className="w-5 h-5" />
                </button>
                <button className={`p-1 rounded hover:bg-gray-100 ${
                  isDark ? 'text-gray-400 hover:bg-gray-600' : 'text-gray-500'
                }`}>
                  <File className="w-5 h-5" />
                </button>
                <button className={`p-1 rounded hover:bg-gray-100 ${
                  isDark ? 'text-gray-400 hover:bg-gray-600' : 'text-gray-500'
                }`}>
                  <Globe className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className={`p-2 rounded-lg ${
                  isDark
                    ? 'bg-brand-primary hover:bg-brand-primary-hover text-white'
                    : 'bg-brand-primary hover:bg-brand-primary-hover text-white'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </main>
        <NotificationSidebar
          isOpen={isNotificationSidebarOpen}
          onClose={() => setIsNotificationSidebarOpen(false)}
          notifications={notifications}
          onClearAll={handleClearAllNotifications}
          onDismiss={handleDismissNotification}
        />
      </div>
      <TasksPopup />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;