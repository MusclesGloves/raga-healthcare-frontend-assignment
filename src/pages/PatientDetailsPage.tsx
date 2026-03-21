import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import PatientCollection from '../features/patients/components/PatientCollection';
import PatientInfoSection from '../features/patients/components/PatientInfoSection';
import ViewToggle from '../features/patients/components/ViewToggle';
import { usePatientStore } from '../features/patients/store';

const statusPillStyles = {
  stable: 'bg-emerald-100 text-emerald-700',
  attention: 'bg-amber-100 text-amber-700',
  critical: 'bg-rose-100 text-rose-700',
};

function PatientDetailsPage() {
  const navigate = useNavigate();
  const { patientId } = useParams();

  const patients = usePatientStore((state) => state.patients);
  const selectedPatient = usePatientStore((state) => state.selectedPatient);
  const viewMode = usePatientStore((state) => state.viewMode);
  const selectPatientById = usePatientStore((state) => state.selectPatientById);
  const setViewMode = usePatientStore((state) => state.setViewMode);

  useEffect(() => {
    const parsedId = Number(patientId);

    if (Number.isNaN(parsedId)) {
      navigate('/patients/1', { replace: true });
      return;
    }

    const exists = patients.some((patient) => patient.id === parsedId);

    if (!exists) {
      navigate('/patients/1', { replace: true });
      return;
    }

    selectPatientById(parsedId);
  }, [navigate, patientId, patients, selectPatientById]);

  if (!selectedPatient) {
    return (
      <div className="p-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-600">Patient record not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-4">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <PageHeader
          title="Patient Details"
          description="Monitor patient profiles, care plans, vitals, medications, and recent clinical activity."
        />

        <ViewToggle value={viewMode} onChange={setViewMode} />
      </div>

      <PatientCollection
        patients={patients}
        selectedPatientId={selectedPatient.id}
        viewMode={viewMode}
        onSelectPatient={(id) => navigate(`/patients/${id}`)}
      />

      <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-lg font-semibold">
              {selectedPatient.avatar}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold">{selectedPatient.fullName}</h2>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                    statusPillStyles[selectedPatient.status]
                  }`}
                >
                  {selectedPatient.status}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-300">
                {selectedPatient.patientId} • {selectedPatient.age} years •{' '}
                {selectedPatient.gender}
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {selectedPatient.department} • {selectedPatient.physician}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-300">
                Next appointment
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {selectedPatient.nextAppointment}
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-300">
                Insurance
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {selectedPatient.insuranceProvider}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <PatientInfoSection
          title="Patient overview"
          description="Core profile and admission details for the active care cycle."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Diagnosis
              </p>
              <p className="mt-2 text-sm font-medium text-slate-800">
                {selectedPatient.diagnosis}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Admission date
              </p>
              <p className="mt-2 text-sm font-medium text-slate-800">
                {selectedPatient.admissionDate}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Room number
              </p>
              <p className="mt-2 text-sm font-medium text-slate-800">
                {selectedPatient.roomNumber}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Blood group
              </p>
              <p className="mt-2 text-sm font-medium text-slate-800">
                {selectedPatient.bloodGroup}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Contact email
              </p>
              <p className="mt-2 text-sm font-medium text-slate-800">
                {selectedPatient.email}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Contact phone
              </p>
              <p className="mt-2 text-sm font-medium text-slate-800">
                {selectedPatient.phone}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Address
              </p>
              <p className="mt-2 text-sm font-medium text-slate-800">
                {selectedPatient.address}
              </p>
            </div>
          </div>
        </PatientInfoSection>

        <PatientInfoSection
          title="Live vitals"
          description="Current monitored values from the latest patient reading."
        >
          <div className="space-y-3">
            {selectedPatient.vitals.map((vital) => (
              <div
                key={vital.label}
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
              >
                <span className="text-sm text-slate-500">{vital.label}</span>
                <span className="text-sm font-semibold text-slate-900">
                  {vital.value}
                </span>
              </div>
            ))}
          </div>
        </PatientInfoSection>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <PatientInfoSection
          title="Medication plan"
          description="Active treatment and administration schedule."
        >
          <div className="space-y-3">
            {selectedPatient.medications.map((medication) => (
              <div
                key={medication.name}
                className="rounded-2xl bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">{medication.name}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {medication.dosage} • {medication.frequency}
                </p>
              </div>
            ))}
          </div>
        </PatientInfoSection>

        <PatientInfoSection
          title="Recent visits"
          description="Latest consultations, tests, and department interactions."
        >
          <div className="space-y-3">
            {selectedPatient.recentVisits.map((visit) => (
              <div key={`${visit.date}-${visit.reason}`} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-semibold text-slate-900">{visit.department}</p>
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {visit.date}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-700">{visit.reason}</p>
                <p className="mt-1 text-sm text-slate-500">{visit.physician}</p>
              </div>
            ))}
          </div>
        </PatientInfoSection>
      </div>
    </div>
  );
}

export default PatientDetailsPage;