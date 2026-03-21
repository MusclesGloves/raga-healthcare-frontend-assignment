import type { DepartmentPerformance } from '../types';

type DepartmentPerformanceCardProps = {
  departments: DepartmentPerformance[];
};

function DepartmentPerformanceCard({
  departments,
}: DepartmentPerformanceCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Department performance
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Efficiency score, patient load, and average wait time across units.
        </p>
      </div>

      <div className="space-y-5">
        {departments.map((department) => (
          <div key={department.name} className="rounded-2xl bg-slate-50 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-semibold text-slate-900">
                  {department.name}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {department.patientLoad} active patients
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:min-w-[220px]">
                <div className="rounded-2xl bg-white px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Efficiency
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {department.efficiencyScore}%
                  </p>
                </div>

                <div className="rounded-2xl bg-white px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Wait time
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {department.waitTime}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 h-3 rounded-full bg-slate-200">
              <div
                className="h-3 rounded-full bg-slate-900"
                style={{ width: `${department.efficiencyScore}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DepartmentPerformanceCard;