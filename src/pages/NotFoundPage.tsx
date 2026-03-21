import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="w-full max-w-xl rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Back to login
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;