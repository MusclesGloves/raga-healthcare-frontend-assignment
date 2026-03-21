import type { AnalyticsMetric } from '../types';

type AnalyticsMetricCardProps = {
  metric: AnalyticsMetric;
};

const trendStyles = {
  up: 'bg-emerald-100 text-emerald-700',
  down: 'bg-rose-100 text-rose-700',
  neutral: 'bg-slate-100 text-slate-600',
};

function AnalyticsMetricCard({ metric }: AnalyticsMetricCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{metric.label}</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">{metric.value}</p>
        </div>

        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${trendStyles[metric.direction]}`}
        >
          {metric.change}
        </span>
      </div>

      <p className="mt-4 text-sm text-slate-500">{metric.helperText}</p>
    </div>
  );
}

export default AnalyticsMetricCard;