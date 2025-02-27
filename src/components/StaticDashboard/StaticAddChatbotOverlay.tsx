import React from 'react';
import { X, Upload } from 'lucide-react';

interface StaticAddChatbotOverlayProps {
  mode?: 'light' | 'dark';
  isMobile?: boolean;
}

const StaticAddChatbotOverlay: React.FC<StaticAddChatbotOverlayProps> = ({
  mode = 'light',
  isMobile = false,
}) => {
  const bgClass = mode === 'light' ? 'bg-white' : 'bg-gray-900';
  const textClass = mode === 'light' ? 'text-gray-900' : 'text-gray-100';
  const borderClass = mode === 'light' ? 'border-gray-200' : 'border-gray-700';
  const inputBgClass = mode === 'light' ? 'bg-gray-50' : 'bg-gray-800';
  const buttonBgClass = mode === 'light' ? 'bg-gray-100' : 'bg-gray-800';
  const primaryButtonClass = 'bg-[#5A9B91] hover:bg-[#4A8A81] text-white';

  return (
    <div className={`${mode === 'light' ? 'bg-gray-100' : 'bg-gray-800'} p-8 min-h-screen`}>
      <div className="mx-auto" style={{ width: isMobile ? '390px' : '100%' }}>
        {/* Background representation */}
        <div className={`${mode === 'light' ? 'bg-white/50' : 'bg-black/50'} p-8 rounded-lg mb-4`}>
          <div className="h-16 w-full rounded-lg bg-gray-400/20 mb-4"></div>
          <div className="h-8 w-1/3 rounded-lg bg-gray-400/20"></div>
        </div>

        {/* Modal */}
        <div 
          className={`${bgClass} ${textClass} rounded-lg shadow-xl mx-auto ${
            isMobile ? 'w-[90%] max-w-[360px]' : 'w-[600px]'
          }`}
        >
          {/* Header */}
          <div className={`flex items-center justify-between p-6 border-b ${borderClass}`}>
            <h2 className="text-xl font-semibold">Add Chatbot</h2>
            <button className={`p-1 rounded-full ${buttonBgClass}`}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter chatbot name"
                className={`w-full px-4 py-2 rounded-lg border ${borderClass} ${inputBgClass}`}
              />
            </div>

            {/* Custom Instructions */}
            <div className="space-y-2">
              <label className="block font-medium">Custom Instructions</label>
              <textarea
                placeholder="Enter any special instructions for your chatbot..."
                rows={4}
                className={`w-full px-4 py-2 rounded-lg border ${borderClass} ${inputBgClass} resize-none`}
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <label className="block font-medium">Upload Files</label>
              <div 
                className={`border-2 border-dashed ${borderClass} rounded-lg p-6 text-center`}
              >
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="font-medium">Choose Files</p>
                <p className="text-sm text-gray-500 mt-1">
                  or drag and drop files here
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`p-6 border-t ${borderClass} flex ${isMobile ? 'flex-col space-y-3' : 'justify-end space-x-3'}`}>
            <button 
              className={`px-4 py-2 rounded-lg font-medium ${buttonBgClass} ${
                isMobile ? 'w-full' : ''
              }`}
            >
              Cancel
            </button>
            <button 
              className={`px-4 py-2 rounded-lg font-medium ${primaryButtonClass} ${
                isMobile ? 'w-full' : ''
              }`}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticAddChatbotOverlay;
