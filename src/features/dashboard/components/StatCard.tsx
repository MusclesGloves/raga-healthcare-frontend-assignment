import type { DashboardMetric } from '../types';

type StatCardProps = {
  metric: DashboardMetric;
};

const trendStyles: Record<DashboardMetric['trend'], string> = {
  up: 'bg-emerald-50 text-emerald-700',
  down: 'bg-rose-50 text-rose-700',
  neutral: 'bg-slate-100 text-slate-700',
};

export function StatCard({ metric }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{metric.label}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            {metric.value}
          </h3>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${trendStyles[metric.trend]}`}
        >
          {metric.change}
        </span>
      </div>

      <p className="mt-4 text-sm text-slate-500">{metric.description}</p>
    </div>
  );
}