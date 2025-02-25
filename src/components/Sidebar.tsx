import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { ChevronLeft, ChevronRight, MessageSquare, GitBranch, Settings, X } from 'lucide-react';

interface Conversation {
  id: string;
  title: string;
  category?: string;
  type: 'main' | 'side' | 'child';
  unreadCount?: number;
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeConversation?: string | null;
  onConversationSelect?: (id: string) => void;
  onMainSessionClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onToggle, 
  activeConversation,
  onConversationSelect = () => {},
  onMainSessionClick = () => {}
}) => {
  const { isDark } = useTheme();
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState<'main' | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      title: 'Side Conversation 1',
      category: 'side',
      type: 'side',
      unreadCount: 2
    },
    {
      id: '2',
      title: 'Child Conversation 1',
      category: 'child',
      type: 'child',
      unreadCount: 1
    }
  ]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onToggle}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isExpanded ? 'w-full md:w-64' : 'w-20'} flex flex-col transition-all transform duration-200 ease-in-out ${
          isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
        } border-r md:border-r`}
      >
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-semibold text-brand-primary">Menu</h1>
          <button
            onClick={onToggle}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className={`flex-1 overflow-y-auto p-4 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <button
            onClick={() => {
              onMainSessionClick();
              setActiveSection('main');
            }}
            className={`w-full mb-4 flex items-center px-4 py-3 rounded-md transition-colors ${
              activeSection === 'main'
                ? 'bg-[#5A9B91] text-white'
                : isDark
                ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            {isExpanded && <span>Main Session</span>}
          </button>

          <div className="space-y-2">
            {conversations.map(conversation => (
              <button
                key={conversation.id}
                onClick={() => {
                  onConversationSelect(conversation.id);
                  setActiveSection(null);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-md transition-colors ${
                  activeConversation === conversation.id
                    ? isDark ? 'bg-gray-800' : 'bg-gray-100'
                    : isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                }`}
              >
                <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {conversation.type === 'side' && <GitBranch className="w-4 h-4 mr-3 text-[#5A9B91]" />}
                  {conversation.type === 'child' && <Settings className="w-4 h-4 mr-3 text-[#5A9B91]" />}
                  <span className="line-clamp-1">{conversation.title}</span>
                </div>
                {conversation.unreadCount && (
                  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-[#5A9B91] text-white">
                    {conversation.unreadCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            <button className={`w-full flex items-center px-4 py-3 rounded-md ${
              isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'
            }`}>
              <Settings className="w-4 h-4 mr-3 text-[#5A9B91]" />
              <span>Packs</span>
              <span className={`ml-2 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>(coming soon...)</span>
            </button>
            <button className={`w-full flex items-center px-4 py-3 rounded-md ${
              isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'
            }`}>
              <MessageSquare className="w-4 h-4 mr-3 text-[#5A9B91]" />
              <span>Messenger</span>
              <span className={`ml-2 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>(coming soon...)</span>
            </button>
            <button className={`w-full flex items-center px-4 py-3 rounded-md ${
              isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'
            }`}>
              <GitBranch className="w-4 h-4 mr-3 text-[#5A9B91]" />
              <span>Custom Chatbot</span>
            </button>
            <button className={`w-full flex items-center px-4 py-3 rounded-md ${
              isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'
            }`}>
              <Settings className="w-4 h-4 mr-3 text-[#5A9B91]" />
              <span>Family Pack</span>
            </button>
          </div>
        </div>

        {/* Collapse button - Only visible on desktop */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`hidden md:flex items-center justify-center h-12 border-t ${
            isDark ? 'border-gray-700 text-gray-400 hover:text-gray-300' : 'border-gray-200 text-gray-600 hover:text-gray-800'
          }`}
        >
          {isExpanded ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
