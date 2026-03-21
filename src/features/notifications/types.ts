export type NotificationSeverity = 'info' | 'warning' | 'critical';

export type AppNotification = {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  severity: NotificationSeverity;
  read: boolean;
};