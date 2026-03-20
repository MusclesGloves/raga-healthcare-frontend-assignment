import AppShell from '../components/layout/AppShell';
import PageHeader from '../components/common/PageHeader';

function AnalyticsPage() {
  return (
    <AppShell>
      <PageHeader
        title="Analytics"
        description="Review engagement, operational performance, and patient activity trends."
      />
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">Analytics page placeholder</p>
      </div>
    </AppShell>
  );
}

export default AnalyticsPage;