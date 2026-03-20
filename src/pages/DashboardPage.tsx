import { ActivityList } from '../features/dashboard/components/ActivityList';
import { AlertBanner } from '../features/dashboard/components/AlertBanner';
import { OverviewCard } from '../features/dashboard/components/OverviewCard';
import { StatCard } from '../features/dashboard/components/StatCard';
import { useDashboardStore } from '../features/dashboard/store/dashboard.store';

function DashboardPage() {
  const {
    metrics,
    alerts,
    recentActivities,
    appointments,
    departmentLoads,
    lastUpdated,
  } = useDashboardStore();

  return (
    <div className="space-y-10 p-4">
      <section className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
            Operations Overview
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Healthcare Command Center
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Monitor patient flow, care-team activity, appointment volume, and
            critical operational alerts from a unified dashboard.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
          <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-600">
            Last updated: <span className="font-semibold">{lastUpdated}</span>
          </div>
          <button
            type="button"
            onClick={() => useDashboardStore.getState().refreshDashboard()}
            className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Refresh overview
          </button>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <StatCard key={metric.id} metric={metric} />
        ))}
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.25fr_0.95fr]">
        <OverviewCard
          title="Recent patient activity"
          subtitle="Live care updates across departments"
          actionLabel={`${recentActivities.length} events`}
        >
          <ActivityList activities={recentActivities} />
        </OverviewCard>

        <OverviewCard
          title="Critical alerts"
          subtitle="Items requiring operational attention"
          actionLabel={`${alerts.length} active`}
        >
          <AlertBanner alerts={alerts} />
        </OverviewCard>
      </section>

      <section className="grid gap-8 xl:grid-cols-2">
        <OverviewCard
          title="Today's appointment summary"
          subtitle="Snapshot of daily clinical throughput"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-medium text-slate-500">
                  {appointment.title}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                  {appointment.value}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {appointment.subtitle}
                </p>
              </div>
            ))}
          </div>
        </OverviewCard>

        <OverviewCard
          title="Department utilization"
          subtitle="Current load across key care units"
        >
          <div className="space-y-4">
            {departmentLoads.map((department) => (
              <div key={department.id} className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {department.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {department.activeCases} active cases
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    {department.utilization}%
                  </p>
                </div>

                <div className="h-2.5 rounded-full bg-slate-200">
                  <div
                    className="h-2.5 rounded-full bg-slate-900 transition-all"
                    style={{ width: `${department.utilization}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </OverviewCard>
      </section>
    </div>
  );
}

export default DashboardPage;
