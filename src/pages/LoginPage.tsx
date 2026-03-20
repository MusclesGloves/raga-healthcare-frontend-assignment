import AppShell from '../components/layout/AppShell';
import PageHeader from '../components/common/PageHeader';

function LoginPage() {
  return (
    <AppShell>
      <PageHeader
        title="Welcome to RAGA Health Dashboard"
        description="Securely sign in to manage analytics, workflows, and patient information."
      />
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">Login page placeholder</p>
      </div>
    </AppShell>
  );
}

export default LoginPage;
