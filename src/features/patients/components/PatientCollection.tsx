import StatusBadge from '../../../components/common/StatusBadge';
import type { PatientRecord } from '../types';

type PatientCollectionProps = {
  patients: PatientRecord[];
  selectedPatientId: number | null;
  viewMode: 'grid' | 'list';
  onSelectPatient: (id: number) => void;
};

function PatientCollection({
  patients,
  selectedPatientId,
  viewMode,
  onSelectPatient,
}: PatientCollectionProps) {
  if (viewMode === 'list') {
    return (
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="px-4 py-4">Patient</th>
                <th className="px-4 py-4">Department</th>
                <th className="px-4 py-4">Physician</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Next Appointment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {patients.map((patient) => {
                const isSelected = patient.id === selectedPatientId;

                return (
                  <tr
                    key={patient.id}
                    onClick={() => onSelectPatient(patient.id)}
                    className={`cursor-pointer transition ${
                      isSelected ? 'bg-sky-50' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                          {patient.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            {patient.fullName}
                          </p>
                          <p className="text-sm text-slate-500">
                            {patient.patientId}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      {patient.department}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      {patient.physician}
                    </td>
                    <td className="px-4 py-4">
                      <StatusBadge
                        label={patient.status}
                        variant={patient.status}
                      />
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      {patient.nextAppointment}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {patients.map((patient) => {
        const isSelected = patient.id === selectedPatientId;

        return (
          <button
            key={patient.id}
            type="button"
            onClick={() => onSelectPatient(patient.id)}
            className={`cursor-pointer rounded-3xl border p-5 text-left shadow-sm transition hover:-translate-y-0.5 ${
              isSelected
                ? 'border-sky-200 bg-sky-50'
                : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {patient.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {patient.fullName}
                  </p>
                  <p className="text-sm text-slate-500">{patient.patientId}</p>
                </div>
              </div>

              <StatusBadge label={patient.status} variant={patient.status} />
            </div>

            <div className="mt-5 space-y-2 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-800">Department:</span>{' '}
                {patient.department}
              </p>
              <p>
                <span className="font-medium text-slate-800">Physician:</span>{' '}
                {patient.physician}
              </p>
              <p>
                <span className="font-medium text-slate-800">Diagnosis:</span>{' '}
                {patient.diagnosis}
              </p>
              <p>
                <span className="font-medium text-slate-800">Next Visit:</span>{' '}
                {patient.nextAppointment}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default PatientCollection;