import type { CareInsight } from '../types';

type CareInsightsCardProps = {
  insights: CareInsight[];
};

function CareInsightsCard({ insights }: CareInsightsCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">Care insights</h2>
        <p className="mt-1 text-sm text-slate-500">
          Snapshot of operational and clinical service outcomes.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {insights.map((insight) => (
          <div key={insight.title} className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">{insight.title}</p>
            <p className="mt-3 text-3xl font-bold text-slate-900">
              {insight.value}
            </p>
            <p className="mt-3 text-sm text-slate-500">{insight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareInsightsCard;