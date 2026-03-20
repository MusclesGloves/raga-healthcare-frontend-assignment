import type { DashboardAlert } from '../types';

type AlertBannerProps = {
  alerts: DashboardAlert[];
};

const severityStyles: Record<DashboardAlert['severity'], string> = {
  low: 'border-sky-200 bg-sky-50 text-sky-700',
  medium: 'border-amber-200 bg-amber-50 text-amber-700',
  high: 'border-rose-200 bg-rose-50 text-rose-700',
};

export function AlertBanner({ alerts }: AlertBannerProps) {
  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <article
          key={alert.id}
          className={`rounded-xl border p-4 ${severityStyles[alert.severity]}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold">{alert.title}</h3>
              <p className="mt-1 text-sm opacity-90">{alert.description}</p>
            </div>
            <span className="shrink-0 rounded-full bg-white/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide">
              {alert.severity}
            </span>
          </div>

          <p className="mt-3 text-xs opacity-80">{alert.timestamp}</p>
        </article>
      ))}
    </div>
  );
}