import type { AnalyticsData } from '../types';

export const mockAnalyticsData: AnalyticsData = {
  metrics: [
    {
      id: 'patient-retention',
      label: 'Patient Retention',
      value: '92.4%',
      change: '+4.1%',
      direction: 'up',
      helperText: 'Compared to the previous 30 days',
    },
    {
      id: 'avg-wait-time',
      label: 'Average Wait Time',
      value: '18 min',
      change: '-6.3%',
      direction: 'up',
      helperText: 'Operationally improved from last month',
    },
    {
      id: 'care-completion',
      label: 'Care Plan Completion',
      value: '84%',
      change: '+2.8%',
      direction: 'up',
      helperText: 'Completed treatment milestones',
    },
    {
      id: 'readmission-risk',
      label: 'Readmission Risk',
      value: '11.2%',
      change: '-1.7%',
      direction: 'up',
      helperText: 'Lower risk across monitored patients',
    },
  ],
  trendSeries: {
    title: 'Clinical throughput trend',
    description:
      'A comparison of weekly consultations completed versus the previous week.',
    currentPeriodLabel: 'This week',
    previousPeriodLabel: 'Last week',
    currentPeriod: [
      { label: 'Mon', value: 52 },
      { label: 'Tue', value: 61 },
      { label: 'Wed', value: 57 },
      { label: 'Thu', value: 66 },
      { label: 'Fri', value: 72 },
      { label: 'Sat', value: 49 },
    ],
    previousPeriod: [
      { label: 'Mon', value: 44 },
      { label: 'Tue', value: 53 },
      { label: 'Wed', value: 50 },
      { label: 'Thu', value: 59 },
      { label: 'Fri', value: 63 },
      { label: 'Sat', value: 42 },
    ],
  },
  departmentPerformance: [
    {
      name: 'Cardiology',
      efficiencyScore: 91,
      patientLoad: 96,
      waitTime: '14 min',
    },
    {
      name: 'Emergency',
      efficiencyScore: 86,
      patientLoad: 118,
      waitTime: '9 min',
    },
    {
      name: 'Orthopedics',
      efficiencyScore: 82,
      patientLoad: 73,
      waitTime: '17 min',
    },
    {
      name: 'Neurology',
      efficiencyScore: 79,
      patientLoad: 64,
      waitTime: '22 min',
    },
  ],
  careInsights: [
    {
      title: 'Appointments completed',
      value: '184',
      description: 'Closed successfully across all care units this week',
    },
    {
      title: 'Lab turnaround time',
      value: '2.4 hrs',
      description: 'Average pathology report completion window',
    },
    {
      title: 'Escalations resolved',
      value: '28',
      description: 'Critical cases reviewed and closed within SLA',
    },
    {
      title: 'Insurance approvals',
      value: '87%',
      description: 'Verified before appointment day',
    },
  ],
  updatedAt: 'Updated 5 minutes ago',
};