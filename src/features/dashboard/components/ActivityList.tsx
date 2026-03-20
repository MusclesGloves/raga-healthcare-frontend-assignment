import type { PatientActivity } from '../types';

type ActivityListProps = {
  activities: PatientActivity[];
};

const statusStyles: Record<PatientActivity['status'], string> = {
  stable: 'bg-emerald-100 text-emerald-700',
  attention: 'bg-amber-100 text-amber-700',
  critical: 'bg-rose-100 text-rose-700',
};

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <article
          key={activity.id}
          className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 p-4"
        >
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold text-slate-900">
                {activity.patientName}
              </h3>
              <span className="text-xs text-slate-400">{activity.patientId}</span>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[activity.status]}`}
              >
                {activity.status}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-600">{activity.event}</p>

            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span>{activity.department}</span>
              <span>{activity.timestamp}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}