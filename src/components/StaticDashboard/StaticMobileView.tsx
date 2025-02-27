import React from 'react';
import { ChevronDown, Sun, Moon, Menu, RefreshCw, Bell, CheckSquare, MoreVertical, Send, Mic, File, Globe, MessageSquare, GitBranch, Settings, Copy, X, Users, HelpCircle } from 'lucide-react';

const staticConversations = [
  {
    id: '1',
    title: 'Side Conversation 1',
    type: 'side',
    unreadCount: 2
  },
  {
    id: '2',
    title: 'Child Conversation 1',
    type: 'child',
    unreadCount: 1
  }
];

const staticMessages = [
  {
    id: '1',
    content: 'Hello, how can I help you today?',
    isUser: false,
  },
  {
    id: '2',
    content: 'I need help with my project',
    isUser: true,
  }
];

interface StaticMobileViewProps {
  mode: 'light' | 'dark';
  showSidebar?: boolean;
}

const StaticMobileView: React.FC<StaticMobileViewProps> = ({ mode, showSidebar = false }) => {
  const isDark = mode === 'dark';
  
  return (
    <div className="border-4 border-dashed border-gray-300 relative" style={{ width: '390px' }}>
      <div className={`absolute top-2 right-2 px-3 py-1 rounded-full ${
        isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      }`}>
        {mode.toUpperCase()} MODE {showSidebar ? '(SIDEBAR)' : ''}
      </div>
      
      <div className={`h-[844px] flex flex-col ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Mobile Header */}
        <header className={`h-14 ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-b flex-shrink-0`}>
          <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Menu className="w-5 h-5 text-brand-primary" />
              <span className="text-lg font-semibold text-brand-primary">Zoomey</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 rounded-md text-sm font-medium text-brand-primary">
                GPT4
              </span>
              {isDark ? 
                <Sun className="w-5 h-5 text-brand-primary" /> : 
                <Moon className="w-5 h-5 text-brand-primary" />
              }
              <Bell className="w-5 h-5 text-brand-primary" />
              <div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center text-white">
                <span className="text-sm">JM</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* Mobile Sidebar - Only shown when showSidebar is true */}
          {showSidebar && (
            <div className="relative flex-1 flex overflow-hidden">
              <div className={`w-[80%] flex-shrink-0 ${
                isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              }`}
              style={{
                boxShadow: '4px 0 6px -1px rgba(0, 0, 0, 0.1), 2px 0 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="font-semibold">Navigation</h2>
                  <button className={`p-1.5 rounded-lg ${
                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4 overflow-y-auto">
                  <button className={`w-full mb-4 px-4 py-2 rounded-lg flex items-center justify-between ${
                    isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5" />
                      <span>Main Session</span>
                    </div>
                  </button>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Side Conversations</h3>
                      {staticConversations.filter(c => c.type === 'side').map(conv => (
                        <div key={conv.id} className={`flex items-center justify-between p-2 rounded-lg ${
                          isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}>
                          <span>{conv.title}</span>
                          {conv.unreadCount > 0 && (
                            <span className="bg-brand-primary text-white px-2 py-0.5 rounded-full text-xs">
                              {conv.unreadCount}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Child Conversations</h3>
                      {staticConversations.filter(c => c.type === 'child').map(conv => (
                        <div key={conv.id} className={`flex items-center justify-between p-2 rounded-lg ${
                          isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}>
                          <span>{conv.title}</span>
                          {conv.unreadCount > 0 && (
                            <span className="bg-brand-primary text-white px-2 py-0.5 rounded-full text-xs">
                              {conv.unreadCount}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className={`flex items-center justify-between p-2 rounded-lg ${
                        isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      }`}>
                        <div className="flex items-center space-x-2">
                          <GitBranch className="w-5 h-5" />
                          <span>Packs</span>
                        </div>
                        <span className="text-xs text-brand-primary">Coming soon</span>
                      </div>
                      <div className={`flex items-center justify-between p-2 rounded-lg ${
                        isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      }`}>
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="w-5 h-5" />
                          <span>Messenger</span>
                        </div>
                        <span className="text-xs text-brand-primary">Coming soon</span>
                      </div>
                      <div className={`flex items-center space-x-2 p-2 rounded-lg ${
                        isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      }`}>
                        <Settings className="w-5 h-5" />
                        <span>Custom Chatbot</span>
                      </div>
                      <div className={`flex items-center space-x-2 p-2 rounded-lg ${
                        isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      }`}>
                        <Users className="w-5 h-5" />
                        <span>Family Pack</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className={`flex items-center space-x-2 p-2 rounded-lg ${
                        isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      }`}>
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                      </div>
                      <div className={`flex items-center space-x-2 p-2 rounded-lg ${
                        isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      }`}>
                        <HelpCircle className="w-5 h-5" />
                        <span>Help & Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-black/20" />
            </div>
          )}

          {/* Mobile Chat Area - Only shown when showSidebar is false */}
          {!showSidebar && (
            <div className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {staticMessages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`relative max-w-[85%] rounded-lg px-4 py-2 ${
                          message.isUser
                            ? isDark
                              ? 'bg-brand-primary text-white'
                              : 'bg-brand-primary text-white'
                            : isDark
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <div className="absolute top-2 right-2 flex items-center space-x-1">
                          <button className="p-1 hover:bg-black/10 rounded">
                            <Copy className="w-3 h-3" />
                          </button>
                          <button className="p-1 hover:bg-black/10 rounded">
                            <MoreVertical className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="pr-12">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Chat Input */}
              <div className={`border-t p-3 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className={`flex items-center space-x-2 rounded-lg border px-3 py-2 ${
                  isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
                }`}>
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className={`flex-1 bg-transparent focus:outline-none text-sm ${
                      isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                    }`}
                    readOnly
                  />
                  <div className="flex items-center space-x-1.5">
                    <button className={`p-1.5 rounded-full hover:bg-gray-100 ${isDark ? 'hover:bg-gray-700' : ''}`}>
                      <File className="w-4 h-4 text-brand-primary" />
                    </button>
                    <button className={`p-1.5 rounded-full hover:bg-gray-100 ${isDark ? 'hover:bg-gray-700' : ''}`}>
                      <Mic className="w-4 h-4 text-brand-primary" />
                    </button>
                    <button className={`p-1.5 rounded-full hover:bg-gray-100 ${isDark ? 'hover:bg-gray-700' : ''}`}>
                      <Globe className="w-4 h-4 text-brand-primary" />
                    </button>
                    <button className={`p-1.5 rounded-full bg-brand-primary text-white`}>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaticMobileView;
