import PageHeader from '../components/common/PageHeader';
import {
  AnalyticsMetricCard,
  CareInsightsCard,
  DepartmentPerformanceCard,
  TrendComparisonCard,
} from '../features/analytics/components';
import { useAnalyticsStore } from '../features/analytics/store';

function AnalyticsPage() {
  const analytics = useAnalyticsStore((state) => state.analytics);
  const isLoading = useAnalyticsStore((state) => state.isLoading);
  const refreshAnalytics = useAnalyticsStore((state) => state.refreshAnalytics);

  return (
    <div className="space-y-8 p-4">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <PageHeader
          title="Analytics"
          description="Review healthcare performance, patient care throughput, and department-level operational trends."
        />

        <div className="flex flex-col items-start gap-3 xl:items-end">
          <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
            {analytics.updatedAt}
          </span>

          <button
            type="button"
            onClick={refreshAnalytics}
            disabled={isLoading}
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? 'Refreshing...' : 'Refresh analytics'}
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {analytics.metrics.map((metric) => (
          <AnalyticsMetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      <TrendComparisonCard trendSeries={analytics.trendSeries} />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <DepartmentPerformanceCard
          departments={analytics.departmentPerformance}
        />
        <CareInsightsCard insights={analytics.careInsights} />
      </div>
    </div>
  );
}

export default AnalyticsPage;