import PageHeader from '../components/common/PageHeader';

function AnalyticsPage() {
  return (
    <div className="space-y-6 p-4">
      <PageHeader
        title="Analytics"
        description="Review engagement, operational performance, and patient activity trends."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">Analytics page placeholder</p>
      </div>
    </div>
  );
}

export default AnalyticsPage;