import type { AnalyticsTrendSeries } from '../types';

type TrendComparisonCardProps = {
  trendSeries: AnalyticsTrendSeries;
};

function TrendComparisonCard({ trendSeries }: TrendComparisonCardProps) {
  const maxValue = Math.max(
    ...trendSeries.currentPeriod.map((point) => point.value),
    ...trendSeries.previousPeriod.map((point) => point.value),
    1,
  );

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            {trendSeries.title}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {trendSeries.description}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="h-3 w-3 rounded-full bg-slate-900" />
            {trendSeries.currentPeriodLabel}
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span className="h-3 w-3 rounded-full bg-slate-300" />
            {trendSeries.previousPeriodLabel}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {trendSeries.currentPeriod.map((currentPoint, index) => {
          const previousPoint = trendSeries.previousPeriod[index];

          const currentHeight = `${(currentPoint.value / maxValue) * 100}%`;
          const previousHeight = `${(previousPoint.value / maxValue) * 100}%`;

          return (
            <div
              key={currentPoint.label}
              className="rounded-2xl bg-slate-50 p-4"
            >
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {currentPoint.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {currentPoint.value} vs {previousPoint.value} visits
                  </p>
                </div>
              </div>

              <div className="mt-6 flex h-40 items-end gap-3">
                <div className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-28 w-full items-end rounded-xl bg-slate-100 p-1">
                    <div
                      className="w-full rounded-lg bg-slate-300"
                      style={{ height: previousHeight }}
                    />
                  </div>
                  <span className="text-xs text-slate-500">
                    {trendSeries.previousPeriodLabel}
                  </span>
                </div>

                <div className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-28 w-full items-end rounded-xl bg-slate-100 p-1">
                    <div
                      className="w-full rounded-lg bg-slate-900"
                      style={{ height: currentHeight }}
                    />
                  </div>
                  <span className="text-xs text-slate-500">
                    {trendSeries.currentPeriodLabel}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TrendComparisonCard;