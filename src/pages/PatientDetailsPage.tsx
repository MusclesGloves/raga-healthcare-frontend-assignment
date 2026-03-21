import PageHeader from '../components/common/PageHeader';

function PatientDetailsPage() {
  return (
    <div className="space-y-6 p-4">
      <PageHeader
        title="Patient Details"
        description="View patient information, records, and care-related workflow details."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">
          Patient details page placeholder
        </p>
      </div>
    </div>
  );
}

export default PatientDetailsPage;