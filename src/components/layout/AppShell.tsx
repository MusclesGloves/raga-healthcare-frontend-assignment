import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BarChart3, Users, LogOut } from 'lucide-react';
import { signOut } from 'firebase/auth';

import PageContainer from './PageContainer';
import { auth } from '../../lib/firebase';
import { useAuthStore } from '../../features/auth/store';

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
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
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </PageContainer>
  );
}

export default AppShell;