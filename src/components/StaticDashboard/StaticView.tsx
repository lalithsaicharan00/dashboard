import React from 'react';
import { ChevronDown, Sun, Moon, Menu, RefreshCw, Bell, CheckSquare, MoreVertical, Send, Mic, File, Globe, MessageSquare, GitBranch, Settings, Copy } from 'lucide-react';

const staticConversations = [
  {
    id: 1,
    title: 'Welcome to Zoomey',
    preview: 'Get started with your AI assistant',
    time: '2m ago',
    unread: true
  },
  {
    id: 2,
    title: 'Project Planning',
    preview: 'Let\'s outline the next steps',
    time: '1h ago',
    unread: false
  },
  {
    id: 3,
    title: 'Code Review',
    preview: 'Review the latest PR changes',
    time: '2h ago',
    unread: false
  }
];

interface StaticViewProps {
  mode: 'light' | 'dark';
}

const StaticView: React.FC<StaticViewProps> = ({ mode }) => {
  const isDark = mode === 'dark';

  return (
    <div className="border-4 border-dashed border-gray-300 relative">
      <div className={`absolute top-2 right-2 px-3 py-1 rounded-full ${
        isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      }`}>
        {mode.toUpperCase()} MODE
      </div>

      <div className={`min-h-screen w-full flex ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        {/* Sidebar */}
        <div className={`w-80 flex-shrink-0 border-r ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <button className={`p-2 rounded-lg hover:bg-gray-100 ${
                isDark ? 'hover:bg-gray-700 text-gray-300' : 'text-gray-600'
              }`}>
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <button className={`p-2 rounded-lg hover:bg-gray-100 ${
                  isDark ? 'hover:bg-gray-700 text-gray-300' : 'text-gray-600'
                }`}>
                  <RefreshCw className="w-5 h-5" />
                </button>
                <button className={`p-2 rounded-lg hover:bg-gray-100 ${
                  isDark ? 'hover:bg-gray-700 text-gray-300' : 'text-gray-600'
                }`}>
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <div className={`flex items-center justify-between px-4 py-2 rounded-lg ${
              isDark ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary" />
                <div>
                  <div className={`text-sm font-medium ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>John Doe</div>
                  <div className={`text-xs ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>Pro Plan</div>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </div>
          </div>

          {/* Conversations List */}
          <div className="p-4">
            <div className="space-y-2">
              {staticConversations.map(conversation => (
                <div
                  key={conversation.id}
                  className={`flex items-start space-x-3 p-3 rounded-lg cursor-pointer ${
                    conversation.unread
                      ? isDark
                        ? 'bg-gray-700'
                        : 'bg-gray-100'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg ${
                    isDark ? 'bg-gray-600' : 'bg-gray-200'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className={`text-sm font-medium truncate ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {conversation.title}
                      </div>
                      <div className={`text-xs ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {conversation.time}
                      </div>
                    </div>
                    <div className={`text-sm truncate ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {conversation.preview}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className={`h-16 flex items-center justify-between px-6 border-b ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center space-x-4">
              <div className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Welcome to Zoomey
              </div>
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}>
                <GitBranch className="w-3.5 h-3.5" />
                <span>3 branches</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className={`p-2 rounded-lg hover:bg-gray-100 ${
                isDark ? 'hover:bg-gray-700 text-gray-300' : 'text-gray-600'
              }`}>
                <Bell className="w-5 h-5" />
              </button>
              <button className={`p-2 rounded-lg hover:bg-gray-100 ${
                isDark ? 'hover:bg-gray-700 text-gray-300' : 'text-gray-600'
              }`}>
                <CheckSquare className="w-5 h-5" />
              </button>
              <button className={`p-2 rounded-lg hover:bg-gray-100 ${
                isDark ? 'hover:bg-gray-700 text-gray-300' : 'text-gray-600'
              }`}>
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-4xl mx-auto">
              {/* Welcome Message */}
              <div className={`mb-8 p-6 rounded-lg ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}>
                <h2 className={`text-xl font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Welcome to Zoomey! 👋
                </h2>
                <p className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  I'm your AI assistant, ready to help you with your tasks. Feel free to ask me anything!
                </p>
              </div>

              {/* Message Groups */}
              <div className="space-y-6">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className={`max-w-lg rounded-lg px-4 py-2 ${
                    isDark ? 'bg-brand-primary text-white' : 'bg-brand-primary text-white'
                  }`}>
                    <p className="text-sm">Hello! Can you help me with project planning?</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex">
                  <div className={`max-w-lg rounded-lg px-4 py-2 ${
                    isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                  }`}>
                    <p className="text-sm">Of course! I'd be happy to help you with project planning. What kind of project are you working on?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className={`p-4 border-t ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className="max-w-4xl mx-auto">
              <div className={`flex items-center space-x-2 p-2 rounded-lg border ${
                isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
              }`}>
                <button className={`p-2 rounded-lg ${
                  isDark ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
                }`}>
                  <File className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className={`flex-1 bg-transparent border-none text-sm focus:outline-none ${
                    isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                  }`}
                  readOnly
                />
                <div className="flex items-center space-x-1">
                  <button className={`p-2 rounded-lg ${
                    isDark ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
                  }`}>
                    <Globe className="w-5 h-5" />
                  </button>
                  <button className={`p-2 rounded-lg ${
                    isDark ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
                  }`}>
                    <Mic className="w-5 h-5" />
                  </button>
                  <button className={`p-2 rounded-lg ${
                    isDark ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
                  }`}>
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticView;
