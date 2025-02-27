import React from 'react';
import { 
  Search, 
  Plus, 
  MoreVertical, 
  ChevronDown,
  MessageSquare,
  Settings,
  Mail,
  Share2,
  LineChart,
  Globe,
  Users,
  BarChart2,
  Bot,
  Package
} from 'lucide-react';

const samplePacks = [
  {
    id: '1',
    title: 'Email',
    icon: Mail,
    isActive: true
  },
  {
    id: '2',
    title: 'Social Media Content',
    icon: Share2,
    isActive: false
  },
  {
    id: '3',
    title: 'Market Research',
    icon: LineChart,
    isActive: false
  },
  {
    id: '4',
    title: 'Global Outreach',
    icon: Globe,
    isActive: false
  }
];

interface StaticPacksViewProps {
  mode: 'light' | 'dark';
  isMobile?: boolean;
}

const StaticPacksView: React.FC<StaticPacksViewProps> = ({ mode, isMobile = false }) => {
  const isDark = mode === 'dark';

  return (
    <div className={`border-4 border-dashed border-gray-300 relative ${isMobile ? 'w-[390px]' : ''}`}>
      <div className={`absolute top-2 right-2 px-3 py-1 rounded-full ${
        isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      }`}>
        {mode.toUpperCase()} MODE (PACKS) {isMobile ? '- MOBILE' : ''}
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
                Packs
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
                <Package className={`w-5 h-5 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`} />
                <span className={`text-sm font-medium ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  All Packs
                </span>
              </div>
              <ChevronDown className={`w-5 h-5 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </div>
          </div>

          {/* Packs List */}
          <div className="p-2">
            {samplePacks.map(pack => {
              const Icon = pack.icon;
              return (
                <div key={pack.id} className="mb-2">
                  <div className={`flex items-center justify-between px-3 py-2 rounded-lg ${
                    pack.isActive
                      ? isDark
                        ? 'bg-gray-700 text-white'
                        : 'bg-gray-100 text-gray-900'
                      : isDark
                        ? 'text-gray-300 hover:bg-gray-700/50'
                        : 'text-gray-600 hover:bg-gray-50'
                  }`}>
                    <div className="flex items-center space-x-2 min-w-0">
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm font-medium truncate">
                        {pack.title}
                      </span>
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
                Packs Overview
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
                Welcome to Packs! 🎁
              </h2>
              <p className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Packs are coming soon! They will help you organize and streamline your workflows.
                Stay tuned for updates on this exciting feature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticPacksView;
