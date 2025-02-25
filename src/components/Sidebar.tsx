import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { ChevronLeft, ChevronRight, MessageSquare, GitBranch, Settings } from 'lucide-react';

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
  const [isHovered, setIsHovered] = useState(false);
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

  // Add delay to prevent immediate closing
  let sidebarTimeout: NodeJS.Timeout;

  const handleSidebarMouseEnter = () => {
    clearTimeout(sidebarTimeout);
    setIsHovered(true);
    onToggle(); // Open sidebar
  };

  const handleSidebarMouseLeave = () => {
    sidebarTimeout = setTimeout(() => {
      setIsHovered(false);
      onToggle(); // Close sidebar
    }, 300);
  };

  return (
    <aside
      onMouseEnter={handleSidebarMouseEnter}
      onMouseLeave={handleSidebarMouseLeave}
      className={`fixed inset-y-0 left-0 ${
        isOpen || isHovered ? 'translate-x-0' : '-translate-x-full'
      } ${isExpanded ? 'w-64' : 'w-20'} flex flex-col border-r transition-all transform duration-200 ease-in-out ${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      }`}
    >
      <div className={`p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <button
          onMouseEnter={() => {
            onMainSessionClick();
            setActiveSection('main');
          }}
          className={`w-full mb-4 flex items-center px-4 py-2 rounded-md transition-colors ${
            activeSection === 'main'
              ? 'bg-[#5A9B91] text-white'
              : isDark
              ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          {isExpanded && <span>Main Session</span>}
        </button>

        <div className="space-y-2">
          {conversations.map(conversation => (
            <button
              key={conversation.id}
              onMouseEnter={() => {
                onConversationSelect(conversation.id);
                setActiveSection(null);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors ${
                activeConversation === conversation.id
                  ? isDark ? 'bg-gray-800' : 'bg-gray-100'
                  : isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
              }`}
            >
              <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {conversation.type === 'side' && <GitBranch className="w-4 h-4 mr-2 text-[#5A9B91]" />}
                {conversation.type === 'child' && <Settings className="w-4 h-4 mr-2 text-[#5A9B91]" />}
                <span>{conversation.title}</span>
              </div>
              {conversation.unreadCount && (
                <span className="px-2 py-1 text-xs rounded-full bg-[#5A9B91] text-white">
                  {conversation.unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          <button className={`w-full flex items-center px-3 py-2 rounded-md ${
            isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'
          }`}>
            <Settings className="w-4 h-4 mr-2 text-[#5A9B91]" />
            <span>Packs</span>
            <span className={`ml-2 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>(coming soon...)</span>
          </button>
          <button className={`w-full flex items-center px-3 py-2 rounded-md ${
            isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'
          }`}>
            <MessageSquare className="w-4 h-4 mr-2 text-[#5A9B91]" />
            <span>Messenger</span>
            <span className={`ml-2 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>(coming soon...)</span>
          </button>
          <button className={`w-full flex items-center px-3 py-2 rounded-md ${
            isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'
          }`}>
            <GitBranch className="w-4 h-4 mr-2 text-[#5A9B91]" />
            <span>Custom Chatbot</span>
          </button>
          <button className={`w-full flex items-center px-3 py-2 rounded-md ${
            isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'
          }`}>
            <Settings className="w-4 h-4 mr-2 text-[#5A9B91]" />
            <span>Family Pack</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
