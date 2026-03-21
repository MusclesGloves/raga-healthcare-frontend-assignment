import StatusBadge from '../../../components/common/StatusBadge';
import type { AppNotification } from '../types';

type NotificationPanelProps = {
  notifications: AppNotification[];
  permission: NotificationPermission | 'unsupported';
  unreadCount: number;
  onMarkAllAsRead: () => void;
  onRequestPermission: () => void;
  onTriggerDemoAlert: () => void;
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

                <StatusBadge
                  label={notification.severity}
                  variant={notification.severity}
                />
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