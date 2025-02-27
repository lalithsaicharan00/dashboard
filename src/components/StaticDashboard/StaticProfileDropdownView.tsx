import React from 'react';
import { User, LogOut, Key, Home, ChevronDown } from 'lucide-react';

interface StaticProfileDropdownViewProps {
  mode?: 'light' | 'dark';
  isMobile?: boolean;
}

const StaticProfileDropdownView: React.FC<StaticProfileDropdownViewProps> = ({
  mode = 'light',
  isMobile = false,
}) => {
  const bgClass = mode === 'light' ? 'bg-white' : 'bg-gray-900';
  const textClass = mode === 'light' ? 'text-gray-900' : 'text-gray-100';
  const borderClass = mode === 'light' ? 'border-gray-200' : 'border-gray-700';
  const dropdownBgClass = mode === 'light' ? 'bg-white' : 'bg-gray-800';
  const hoverBgClass = mode === 'light' ? 'bg-gray-50' : 'bg-gray-700';

  return (
    <div className={`${mode === 'light' ? 'bg-gray-100' : 'bg-gray-800'} p-8 min-h-screen`}>
      <div className="mx-auto" style={{ width: isMobile ? '390px' : '100%' }}>
        {/* Header */}
        <div className={`${bgClass} border-b ${borderClass} p-4 flex items-center justify-between`}>
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-lg bg-[#5A9B91]"></div>
            <span className={`text-lg font-semibold ${textClass}`}>Zoomey</span>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            <div className="relative">
              <div className="flex items-center space-x-2">
                <span className={`${textClass}`}>Jay Mahoney</span>
                <ChevronDown className="w-4 h-4" />
              </div>

              {/* Dropdown */}
              <div className={`${dropdownBgClass} border ${borderClass} rounded-lg shadow-lg absolute right-0 top-full mt-2 w-48 py-1`}>
                <div className={`px-4 py-2 flex items-center space-x-3 ${hoverBgClass}`}>
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </div>
                <div className={`px-4 py-2 flex items-center space-x-3 ${hoverBgClass}`}>
                  <Home className="w-4 h-4" />
                  <span>Main Session</span>
                </div>
                <div className={`px-4 py-2 flex items-center space-x-3 ${hoverBgClass}`}>
                  <Key className="w-4 h-4" />
                  <span>Change Password</span>
                </div>
                <div className={`px-4 py-2 flex items-center space-x-3 text-red-500`}>
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content representation */}
        <div className={`${mode === 'light' ? 'bg-white/50' : 'bg-black/50'} mt-8 p-8 rounded-lg`}>
          <div className="space-y-4">
            <div className="h-4 w-2/3 rounded-lg bg-gray-400/20"></div>
            <div className="h-4 w-1/2 rounded-lg bg-gray-400/20"></div>
            <div className="h-4 w-3/4 rounded-lg bg-gray-400/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticProfileDropdownView;
