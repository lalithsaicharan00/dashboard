import React from 'react';
import StaticView from './components/StaticDashboard/StaticView';
import StaticMobileView from './components/StaticDashboard/StaticMobileView';
import StaticNotificationView from './components/StaticDashboard/StaticNotificationView';
import StaticTasksOverlay from './components/StaticDashboard/StaticTasksOverlay';
import StaticSideConvoView from './components/StaticDashboard/StaticSideConvoView';
import StaticPacksView from './components/StaticDashboard/StaticPacksView';
import StaticNotificationSessionsView from './components/StaticDashboard/StaticNotificationSessionsView';
import StaticReplyNotificationOverlay from './components/StaticDashboard/StaticReplyNotificationOverlay';
import StaticCustomChatbotView from './components/StaticDashboard/StaticCustomChatbotView';
import StaticAddChatbotOverlay from './components/StaticDashboard/StaticAddChatbotOverlay';
import StaticProfileDropdownView from './components/StaticDashboard/StaticProfileDropdownView';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Static Dashboard Views</h1>
        
        {/* Desktop Views */}
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl font-semibold">Desktop Views</h2>
          <div className="space-y-8">
            <h3 className="text-xl font-medium">Standard Layout</h3>
            <StaticView mode="light" />
            <StaticView mode="dark" />
            
            <h3 className="text-xl font-medium">With Notifications</h3>
            <StaticNotificationView mode="light" />
            <StaticNotificationView mode="dark" />

            <h3 className="text-xl font-medium">Tasks Overlay</h3>
            <StaticTasksOverlay mode="light" />
            <StaticTasksOverlay mode="dark" />
            
            <h3 className="text-xl font-medium">Tasks Overlay (New Task Form)</h3>
            <StaticTasksOverlay mode="light" showNewTaskForm={true} />
            <StaticTasksOverlay mode="dark" showNewTaskForm={true} />

            <h3 className="text-xl font-medium">Side Conversations (Expanded)</h3>
            <StaticSideConvoView mode="light" />
            <StaticSideConvoView mode="dark" />

            <h3 className="text-xl font-medium">Packs (Expanded)</h3>
            <StaticPacksView mode="light" />
            <StaticPacksView mode="dark" />

            <h3 className="text-xl font-medium">Notification Sessions (Expanded)</h3>
            <StaticNotificationSessionsView mode="light" />
            <StaticNotificationSessionsView mode="dark" />

            <h3 className="text-xl font-medium">Reply to Notification Overlay</h3>
            <StaticReplyNotificationOverlay mode="light" />
            <StaticReplyNotificationOverlay mode="dark" />

            <h3 className="text-xl font-medium">Custom Chatbot (Expanded)</h3>
            <StaticCustomChatbotView mode="light" />
            <StaticCustomChatbotView mode="dark" />

            <h3 className="text-xl font-medium">Add Chatbot Overlay</h3>
            <StaticAddChatbotOverlay mode="light" />
            <StaticAddChatbotOverlay mode="dark" />

            <h3 className="text-xl font-medium">Profile Dropdown</h3>
            <StaticProfileDropdownView mode="light" />
            <StaticProfileDropdownView mode="dark" />
          </div>
        </div>

        {/* Mobile Views */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Mobile Views (390px)</h2>
          <div className="space-y-8">
            <h3 className="text-xl font-medium">Chat Interface</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticMobileView mode="light" />
              <StaticMobileView mode="dark" />
            </div>
            
            <h3 className="text-xl font-medium">With Sidebar Open</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticMobileView mode="light" showSidebar={true} />
              <StaticMobileView mode="dark" showSidebar={true} />
            </div>

            <h3 className="text-xl font-medium">With Notifications</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticNotificationView mode="light" isMobile={true} />
              <StaticNotificationView mode="dark" isMobile={true} />
            </div>

            <h3 className="text-xl font-medium">Mobile Tasks Overlay</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticTasksOverlay mode="light" isMobile={true} />
              <StaticTasksOverlay mode="dark" isMobile={true} />
            </div>
            
            <h3 className="text-xl font-medium">Mobile Tasks Overlay (New Task Form)</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticTasksOverlay mode="light" isMobile={true} showNewTaskForm={true} />
              <StaticTasksOverlay mode="dark" isMobile={true} showNewTaskForm={true} />
            </div>

            <h3 className="text-xl font-medium">Mobile Side Conversations</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticSideConvoView mode="light" isMobile={true} />
              <StaticSideConvoView mode="dark" isMobile={true} />
            </div>

            <h3 className="text-xl font-medium">Mobile Packs</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticPacksView mode="light" isMobile={true} />
              <StaticPacksView mode="dark" isMobile={true} />
            </div>

            <h3 className="text-xl font-medium">Mobile Notification Sessions</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticNotificationSessionsView mode="light" isMobile={true} />
              <StaticNotificationSessionsView mode="dark" isMobile={true} />
            </div>

            <h3 className="text-xl font-medium">Mobile Reply to Notification Overlay</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticReplyNotificationOverlay mode="light" isMobile={true} />
              <StaticReplyNotificationOverlay mode="dark" isMobile={true} />
            </div>

            <h3 className="text-xl font-medium">Mobile Custom Chatbot</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticCustomChatbotView mode="light" isMobile={true} />
              <StaticCustomChatbotView mode="dark" isMobile={true} />
            </div>

            <h3 className="text-xl font-medium">Mobile Add Chatbot Overlay</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticAddChatbotOverlay mode="light" isMobile={true} />
              <StaticAddChatbotOverlay mode="dark" isMobile={true} />
            </div>

            <h3 className="text-xl font-medium">Mobile Profile Dropdown</h3>
            <div className="flex flex-wrap gap-12 justify-center">
              <StaticProfileDropdownView mode="light" isMobile={true} />
              <StaticProfileDropdownView mode="dark" isMobile={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;