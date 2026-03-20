import AppShell from '../components/layout/AppShell';
import PageHeader from '../components/common/PageHeader';

function DashboardPage() {
  return (
    <AppShell>
      <PageHeader
        title="Dashboard"
        description="Monitor healthcare operations, patient workflows, and key system activity."
      />
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">Dashboard page placeholder</p>
      </div>
    </AppShell>
  );
}

export default DashboardPage;
