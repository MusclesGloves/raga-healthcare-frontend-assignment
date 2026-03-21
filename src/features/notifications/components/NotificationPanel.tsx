import type { AppNotification, NotificationSeverity } from '../types';

type NotificationPanelProps = {
  notifications: AppNotification[];
  permission: NotificationPermission | 'unsupported';
  unreadCount: number;
  onMarkAllAsRead: () => void;
  onRequestPermission: () => void;
  onTriggerDemoAlert: () => void;
};

const severityStyles: Record<NotificationSeverity, string> = {
  info: 'bg-sky-100 text-sky-700',
  warning: 'bg-amber-100 text-amber-700',
  critical: 'bg-rose-100 text-rose-700',
};

function NotificationPanel({
  notifications,
  permission,
  unreadCount,
  onMarkAllAsRead,
  onRequestPermission,
  onTriggerDemoAlert,
}: NotificationPanelProps) {
  return (
    <div className="absolute right-0 top-14 z-50 w-[360px] rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Notifications
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {unreadCount} unread healthcare alerts
          </p>
        </div>

        <button
          type="button"
          onClick={onMarkAllAsRead}
          className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
          Mark all read
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {permission !== 'granted' ? (
          <button
            type="button"
            onClick={onRequestPermission}
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Enable browser notifications
          </button>
        ) : null}

        <button
          type="button"
          onClick={onTriggerDemoAlert}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Trigger demo alert
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {notifications.length === 0 ? (
          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">
            No alerts available.
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`rounded-2xl border p-4 ${
                notification.read
                  ? 'border-slate-200 bg-slate-50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900">
                    {notification.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {notification.message}
                  </p>
                </div>

                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${severityStyles[notification.severity]}`}
                >
                  {notification.severity}
                </span>
              </div>

              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                {notification.timestamp}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotificationPanel;