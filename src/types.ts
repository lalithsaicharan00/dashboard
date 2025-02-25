export type MessageType = 'text' | 'audio';

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: MessageType;
  audioUrl?: string;
}

export interface Session {
  id: string;
  name: string;
  messages: Message[];
  createdAt: Date;
  parentId?: string;
  description?: string;
  children?: Session[];
  type: 'main' | 'side';
}

export type LLMModel = 'gpt4' | 'gpt3.5' | 'claude' | 'default';

export interface MessageAction {
  onPlay?: () => void;
  onCopy: () => void;
  onNewSideConvo: () => void;
  onNewChildConvo: () => void;
}

import { LucideIcon } from 'lucide-react';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  categoryId: string;
  subCategoryId?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  categoryId: string;
  tasks: Task[];
}

export interface TaskCategory {
  id: string;
  name: string;
  tasks: Task[];
  expanded: boolean;
  subCategories: SubCategory[];
}

export interface SidebarItemChild {
  id: string;
  title: string;
}

export interface SidebarItem {
  id: string;
  title: string;
  icon: LucideIcon;
  isComingSoon?: boolean;
  items?: SidebarItemChild[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
  actionable?: boolean;
  sessionData?: {
    initialMessage: string;
    title: string;
  };
}