import type { ReactNode } from 'react';

type OverviewCardProps = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  children: ReactNode;
};

export function OverviewCard({
  title,
  subtitle,
  actionLabel,
  children,
}: OverviewCardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
          ) : null}
        </div>

        {actionLabel ? (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {actionLabel}
          </span>
        ) : null}
      </div>

      <div className="mt-5">{children}</div>
    </section>
  );
}