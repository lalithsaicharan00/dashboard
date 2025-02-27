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
  Zap,
  Bot
} from 'lucide-react';

const sampleSideConvos = [
  {
    id: '1',
    title: 'Customer Support Improvement',
    isActive: true,
    children: [
      {
        id: '1-1',
        title: 'Response Time Analysis',
        isActive: false
      },
      {
        id: '1-2',
        title: 'Common Issues Database',
        isActive: false
      }
    ]
  },
  {
    id: '2',
    title: 'Product Feature Research',
    isActive: false,
    children: [
      {
        id: '2-1',
        title: 'User Feedback Collection',
        isActive: false
      },
      {
        id: '2-2',
        title: 'Competitor Analysis',
        isActive: false
      }
    ]
  },
  {
    id: '3',
    title: 'Team Communication',
    isActive: false,
    children: [
      {
        id: '3-1',
        title: 'Daily Standup Notes',
        isActive: false
      }
    ]
  }
];

interface StaticSideConvoViewProps {
  mode: 'light' | 'dark';
  isMobile?: boolean;
}

const StaticSideConvoView: React.FC<StaticSideConvoViewProps> = ({ mode, isMobile = false }) => {
  const isDark = mode === 'dark';

  return (
    <div className={`border-4 border-dashed border-gray-300 relative ${isMobile ? 'w-[390px]' : ''}`}>
      <div className={`absolute top-2 right-2 px-3 py-1 rounded-full ${
        isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      }`}>
        {mode.toUpperCase()} MODE (SIDE CONVO) {isMobile ? '- MOBILE' : ''}
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
                Side Conversations
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
                placeholder="Search side convos..."
                className={`flex-1 bg-transparent border-none text-sm focus:outline-none ${
                  isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                }`}
                readOnly
              />
            </div>
          </div>

          {/* Side Convos List */}
          <div className="p-2">
            {sampleSideConvos.map(convo => (
              <div key={convo.id} className="mb-2">
                <div className={`flex items-center justify-between px-3 py-2 rounded-lg ${
                  convo.isActive
                    ? isDark
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-100 text-gray-900'
                    : isDark
                      ? 'text-gray-300 hover:bg-gray-700/50'
                      : 'text-gray-600 hover:bg-gray-50'
                }`}>
                  <div className="flex items-center space-x-2 min-w-0">
                    <MessageSquare className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium truncate">
                      {convo.title}
                    </span>
                  </div>
                  <button className={`p-1 rounded-lg ${
                    isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                  }`}>
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                {/* Child Convos */}
                {convo.children && convo.children.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1">
                    {convo.children.map(child => (
                      <div
                        key={child.id}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg ${
                          child.isActive
                            ? isDark
                              ? 'bg-gray-700 text-white'
                              : 'bg-gray-100 text-gray-900'
                            : isDark
                              ? 'text-gray-400 hover:bg-gray-700/50'
                              : 'text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-2 min-w-0">
                          <div className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm truncate">
                            {child.title}
                          </span>
                        </div>
                        <button className={`p-1 rounded-lg ${
                          isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                        }`}>
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
        <div className="flex-1 flex items-center justify-center">
          <div className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <Zap className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">Select a side conversation to view its content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticSideConvoView;
