import { Link } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';

function NotFoundPage() {
  return (
    <AppShell>
      <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">404</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-3 max-w-md text-sm text-slate-600">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Back to login
        </Link>
      </div>
    </AppShell>
  );
}

export default NotFoundPage;