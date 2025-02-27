import React from 'react';
import { X, Send, Bell } from 'lucide-react';

interface StaticReplyNotificationOverlayProps {
  mode: 'light' | 'dark';
  isMobile?: boolean;
}

const StaticReplyNotificationOverlay: React.FC<StaticReplyNotificationOverlayProps> = ({ 
  mode,
  isMobile = false 
}) => {
  const isDark = mode === 'dark';

  return (
    <div className={`border-4 border-dashed border-gray-300 relative ${
      isMobile ? 'w-[390px]' : 'w-full'
    }`}>
      <div className={`absolute top-2 right-2 px-3 py-1 rounded-full ${
        isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
      }`}>
        {mode.toUpperCase()} MODE (REPLY NOTIFICATION) {isMobile ? '- MOBILE' : ''}
      </div>

      <div className={`min-h-screen w-full flex items-center justify-center ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        {/* Semi-transparent Backdrop */}
        <div className={`absolute inset-0 ${
          isDark ? 'bg-gray-900/75' : 'bg-gray-500/50'
        }`} />

        {/* Modal */}
        <div className={`relative w-full max-w-lg mx-4 rounded-xl shadow-2xl ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          {/* Header */}
          <div className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex items-center space-x-3">
              <Bell className={`w-5 h-5 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`} />
              <h2 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Reply to Notification
              </h2>
            </div>
            <button className={`p-2 rounded-lg ${
              isDark 
                ? 'hover:bg-gray-700 text-gray-400' 
                : 'hover:bg-gray-100 text-gray-500'
            }`}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Original Notification */}
            <div className={`mb-6 p-4 rounded-lg ${
              isDark ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <div className={`text-sm font-medium mb-1 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Original Notification:
              </div>
              <div className={`${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Check my tasklist - New tasks have been assigned to you
              </div>
            </div>

            {/* Reply Text Area */}
            <div className="space-y-4">
              <label className={`block text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Your Reply
              </label>
              <textarea
                className={`w-full h-32 px-4 py-3 rounded-lg border resize-none ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Type your reply here..."
                readOnly
              />
            </div>
          </div>

          {/* Footer */}
          <div className={`px-6 py-4 border-t ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex justify-end space-x-3">
              <button className={`px-4 py-2 rounded-lg ${
                isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                Cancel
              </button>
              <button className="px-4 py-2 rounded-lg bg-brand-primary text-white hover:bg-brand-primary/90 flex items-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Send Reply</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticReplyNotificationOverlay;
