export type MetricTrend = 'up' | 'down' | 'neutral';

export type AlertSeverity = 'low' | 'medium' | 'high';

export type ActivityStatus = 'stable' | 'attention' | 'critical';

export type DashboardMetric = {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: MetricTrend;
  description: string;
};

export type DashboardAlert = {
  id: string;
  title: string;
  description: string;
  severity: AlertSeverity;
  timestamp: string;
};

export type PatientActivity = {
  id: string;
  patientName: string;
  patientId: string;
  event: string;
  department: string;
  timestamp: string;
  status: ActivityStatus;
};

export type AppointmentSummary = {
  id: string;
  title: string;
  value: string;
  subtitle: string;
};

export type DepartmentLoad = {
  id: string;
  name: string;
  utilization: number;
  activeCases: number;
};

export type DashboardData = {
  metrics: DashboardMetric[];
  alerts: DashboardAlert[];
  recentActivities: PatientActivity[];
  appointments: AppointmentSummary[];
  departmentLoads: DepartmentLoad[];
  lastUpdated: string;
};