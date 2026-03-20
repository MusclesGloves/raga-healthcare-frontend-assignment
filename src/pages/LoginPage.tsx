import LoginForm from '../features/auth/components/LoginForm';

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="grid min-h-[640px] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-between bg-slate-900 p-8 text-white sm:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
                RAGA Health Dashboard
              </p>
              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                Modern healthcare operations, analytics, and patient workflows in one place.
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Securely access dashboards, patient insights, operational metrics, and care
                workflows through a clean B2B healthcare interface built for high-performance teams.
              </p>
            </div>

            <div className="grid gap-4 pt-10 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">24/7</p>
                <p className="mt-2 text-sm text-slate-300">System visibility and workflow access</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">128+</p>
                <p className="mt-2 text-sm text-slate-300">Active care operations tracked daily</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">99.9%</p>
                <p className="mt-2 text-sm text-slate-300">Reliable workflow monitoring experience</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-slate-100 p-6 sm:p-10">
            <div className="w-full max-w-md">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900">Sign in</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Use your authorized healthcare operations account to continue.
                </p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;