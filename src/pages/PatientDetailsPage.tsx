import AppShell from '../components/layout/AppShell';
import PageHeader from '../components/common/PageHeader';

function PatientDetailsPage() {
  return (
    <AppShell>
      <PageHeader
        title="Patient Details"
        description="View patient information, records, and care-related workflow details."
      />
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">Patient details page placeholder</p>
      </div>
    </AppShell>
  );
}

export default PatientDetailsPage;
