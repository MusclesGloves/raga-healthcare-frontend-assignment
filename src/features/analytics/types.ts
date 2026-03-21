export type AnalyticsTrendDirection = 'up' | 'down' | 'neutral';

export type AnalyticsMetric = {
  id: string;
  label: string;
  value: string;
  change: string;
  direction: AnalyticsTrendDirection;
  helperText: string;
};

export type AnalyticsTrendPoint = {
  label: string;
  value: number;
};

export type AnalyticsTrendSeries = {
  title: string;
  description: string;
  currentPeriodLabel: string;
  previousPeriodLabel: string;
  currentPeriod: AnalyticsTrendPoint[];
  previousPeriod: AnalyticsTrendPoint[];
};

export type DepartmentPerformance = {
  name: string;
  efficiencyScore: number;
  patientLoad: number;
  waitTime: string;
};

export type CareInsight = {
  title: string;
  value: string;
  description: string;
};

export type AnalyticsData = {
  metrics: AnalyticsMetric[];
  trendSeries: AnalyticsTrendSeries;
  departmentPerformance: DepartmentPerformance[];
  careInsights: CareInsight[];
  updatedAt: string;
};