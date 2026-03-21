import { useMemo, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  LogOut,
  Bell,
} from 'lucide-react';
import { signOut } from 'firebase/auth';

import PageContainer from './PageContainer';
import { auth } from '../../lib/firebase';
import { useAuthStore } from '../../features/auth/store';
import NotificationPanel from '../../features/notifications/components/NotificationPanel';
import { useNotificationStore } from '../../features/notifications/store';
import { showBrowserNotification } from '../../features/notifications/utils/browserNotifications';

const navigationItems = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Analytics',
    to: '/analytics',
    icon: BarChart3,
  },
  {
    label: 'Patients',
    to: '/patients/1',
    icon: Users,
  },
];

function AppShell() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const notifications = useNotificationStore((state) => state.notifications);
  const permission = useNotificationStore((state) => state.permission);
  const setPermission = useNotificationStore((state) => state.setPermission);
  const addNotification = useNotificationStore((state) => state.addNotification);
  const markAllAsRead = useNotificationStore((state) => state.markAllAsRead);
  const unreadCountValue = useNotificationStore((state) => state.unreadCount());

  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);

  const sortedNotifications = useMemo(
    () => [...notifications],
    [notifications],
  );

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleRequestPermission = async () => {
    if (!('Notification' in window)) {
      setPermission('unsupported');
      return;
    }

    const result = await Notification.requestPermission();
    setPermission(result);
  };

  const handleTriggerDemoAlert = async () => {
    const title = 'Critical care escalation';
    const message = 'Patient PT-1088 requires immediate ICU respiratory review.';

    addNotification({
      title,
      message,
      severity: 'critical',
    });

    await showBrowserNotification({
      title,
      body: message,
    });
  };

  return (
    <PageContainer>
      <div className="min-h-screen py-4">
        <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-full flex-col">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                  RagaAI
                </p>
                <h1 className="mt-2 text-2xl font-bold text-slate-900">
                  Healthcare OS
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                  Clinical operations, analytics and patient monitoring.
                </p>
              </div>

              <nav className="flex flex-1 flex-col gap-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`
                      }
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </nav>

              <div className="mt-8 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Signed in as
                </p>
                <p className="mt-2 truncate text-sm font-medium text-slate-800">
                  {user?.email ?? 'Unknown user'}
                </p>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
          </aside>

          <main className="rounded-3xl bg-slate-50 p-2">
            <div className="min-h-full rounded-[1.5rem] bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-end">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setIsNotificationPanelOpen((current) => !current)
                    }
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    <Bell size={18} />
                    {unreadCountValue > 0 ? (
                      <span className="absolute -right-1 -top-1 inline-flex min-h-[22px] min-w-[22px] items-center justify-center rounded-full bg-rose-500 px-1 text-[11px] font-bold text-white">
                        {unreadCountValue}
                      </span>
                    ) : null}
                  </button>

                  {isNotificationPanelOpen ? (
                    <NotificationPanel
                      notifications={sortedNotifications}
                      permission={permission}
                      unreadCount={unreadCountValue}
                      onMarkAllAsRead={markAllAsRead}
                      onRequestPermission={handleRequestPermission}
                      onTriggerDemoAlert={handleTriggerDemoAlert}
                    />
                  ) : null}
                </div>
              </div>

              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </PageContainer>
  );
}

export default AppShell;