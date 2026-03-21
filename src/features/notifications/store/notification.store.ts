import { create } from 'zustand';
import type { AppNotification, NotificationSeverity } from '../types';

type NotificationPayload = {
  title: string;
  message: string;
  severity: NotificationSeverity;
};

type NotificationStore = {
  notifications: AppNotification[];
  permission: NotificationPermission | 'unsupported';
  setPermission: (permission: NotificationPermission | 'unsupported') => void;
  addNotification: (payload: NotificationPayload) => void;
  markAllAsRead: () => void;
  unreadCount: () => number;
};

function formatTimestamp() {
  return new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [
    {
      id: crypto.randomUUID(),
      title: 'Insurance verification pending',
      message: '8 upcoming appointments are waiting on insurance confirmation.',
      timestamp: formatTimestamp(),
      severity: 'warning',
      read: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'Critical vitals alert',
      message: 'ICU patient PT-1088 requires immediate respiratory review.',
      timestamp: formatTimestamp(),
      severity: 'critical',
      read: false,
    },
  ],
  permission:
    typeof window !== 'undefined' && 'Notification' in window
      ? Notification.permission
      : 'unsupported',
  setPermission: (permission) => set({ permission }),
  addNotification: ({ title, message, severity }) =>
    set((state) => ({
      notifications: [
        {
          id: crypto.randomUUID(),
          title,
          message,
          severity,
          timestamp: formatTimestamp(),
          read: false,
        },
        ...state.notifications,
      ],
    })),
  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    })),
  unreadCount: () => get().notifications.filter((item) => !item.read).length,
}));