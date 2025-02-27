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
  Book,
  Code,
  Database,
  FileText,
  Zap,
  Star
} from 'lucide-react';

const sampleChatbots = [
  {
    id: '1',
    title: 'Anthology Expert',
    description: 'Literature and writing assistant',
    icon: Book,
    isActive: true,
    status: 'online'
  },
  {
    id: '2',
    title: 'Code Companion',
    description: 'Programming and debugging helper',
    icon: Code,
    isActive: false,
    status: 'training'
  },
  {
    id: '3',
    title: 'Data Analyst',
    description: 'Data analysis and visualization',
    icon: Database,
    isActive: false,
    status: 'online'
  },
  {
    id: '4',
    title: 'Document Assistant',
    description: 'Document processing and analysis',
    icon: FileText,
    isActive: false,
    status: 'online'
  }
];

interface StaticCustomChatbotViewProps {
  mode: 'light' | 'dark';
  isMobile?: boolean;
}

const StaticCustomChatbotView: React.FC<StaticCustomChatbotViewProps> = ({ 
  mode,
  isMobile = false 
}) => {
  const isDark = mode === 'dark';

  return (
    <div className={`border-4 border-dashed border-gray-300 relative ${
      isMobile ? 'w-[390px]' : ''
    }`}>
      <div className={`absolute top-2 right-2 px-3 py-1 rounded-full ${
        isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      }`}>
        {mode.toUpperCase()} MODE (CUSTOM CHATBOT) {isMobile ? '- MOBILE' : ''}
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
                Custom Chatbots
              </h2>
              <button className={`p-1.5 rounded-lg hover:bg-gray-100 ${
                isDark ? 'hover:bg-gray-700 text-gray-300' : 'text-gray-600'
              }`}>
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${
              isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-300'
            }`}>
              <Search className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search chatbots..."
                className={`flex-1 bg-transparent border-none text-sm focus:outline-none ${
                  isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                }`}
                readOnly
              />
            </div>
          </div>

          {/* Create New Chatbot Button */}
          <div className="p-4">
            <button className={`w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg ${
              isDark 
                ? 'bg-brand-primary text-white hover:bg-brand-primary/90' 
                : 'bg-brand-primary text-white hover:bg-brand-primary/90'
            }`}>
              <Plus className="w-5 h-5" />
              <span className="font-medium">New Chatbot</span>
            </button>
          </div>

          {/* Chatbots List */}
          <div className="px-2">
            {sampleChatbots.map(chatbot => {
              const Icon = chatbot.icon;
              return (
                <div key={chatbot.id} className="mb-2">
                  <div className={`flex items-center justify-between px-3 py-2 rounded-lg ${
                    chatbot.isActive
                      ? isDark
                        ? 'bg-gray-700 text-white'
                        : 'bg-gray-100 text-gray-900'
                      : isDark
                        ? 'text-gray-300 hover:bg-gray-700/50'
                        : 'text-gray-600 hover:bg-gray-50'
                  }`}>
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className={`p-2 rounded-lg ${
                        isDark ? 'bg-gray-600' : 'bg-gray-200'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium truncate">
                            {chatbot.title}
                          </span>
                          {chatbot.status === 'training' && (
                            <span className={`px-2 py-0.5 text-xs rounded-full ${
                              isDark ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-600'
                            }`}>
                              Training
                            </span>
                          )}
                        </div>
                        <div className={`text-xs truncate ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {chatbot.description}
                        </div>
                      </div>
                    </div>
                    <button className={`p-1 rounded-lg ${
                      isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                    }`}>
                      <MoreVertical className="w-4 h-4" />
                    </button>
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
                Custom Chatbots
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
                Welcome to Custom Chatbots! 🤖
              </h2>
              <p className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Create and manage your specialized AI assistants. Train them on your data
                and customize their behavior to suit your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticCustomChatbotView;
