import type { DashboardData } from '../types';

export const mockDashboardData: DashboardData = {
  metrics: [
    {
      id: 'total-patients',
      label: 'Total Patients',
      value: '1,284',
      change: '+8.2%',
      trend: 'up',
      description: 'Compared to the previous 30 days',
    },
    {
      id: 'active-cases',
      label: 'Active Cases',
      value: '326',
      change: '+3.1%',
      trend: 'up',
      description: 'Currently under care management',
    },
    {
      id: 'appointments-today',
      label: "Today's Appointments",
      value: '84',
      change: '-2.4%',
      trend: 'down',
      description: 'Scheduled consultations and reviews',
    },
    {
      id: 'critical-alerts',
      label: 'Critical Alerts',
      value: '12',
      change: 'Needs attention',
      trend: 'neutral',
      description: 'High-priority items requiring follow-up',
    },
  ],
  alerts: [
    {
      id: 'alert-1',
      title: 'Elevated post-operative risk',
      description:
        '3 patients in Cardiology require immediate review based on overnight vitals.',
      severity: 'high',
      timestamp: '10 minutes ago',
    },
    {
      id: 'alert-2',
      title: 'Insurance verification pending',
      description:
        '8 upcoming appointments are waiting on insurance confirmation.',
      severity: 'medium',
      timestamp: '35 minutes ago',
    },
    {
      id: 'alert-3',
      title: 'Lab results synced successfully',
      description:
        'Morning pathology reports have been pushed to the patient records module.',
      severity: 'low',
      timestamp: '1 hour ago',
    },
  ],
  recentActivities: [
    {
      id: 'activity-1',
      patientName: 'Aarav Sharma',
      patientId: 'PT-1024',
      event: 'Follow-up consultation completed',
      department: 'Cardiology',
      timestamp: '09:40 AM',
      status: 'stable',
    },
    {
      id: 'activity-2',
      patientName: 'Meera Nair',
      patientId: 'PT-1056',
      event: 'Abnormal blood pressure trend detected',
      department: 'General Medicine',
      timestamp: '09:15 AM',
      status: 'attention',
    },
    {
      id: 'activity-3',
      patientName: 'Rohan Iyer',
      patientId: 'PT-1088',
      event: 'Emergency case escalated to ICU care team',
      department: 'Emergency',
      timestamp: '08:50 AM',
      status: 'critical',
    },
    {
      id: 'activity-4',
      patientName: 'Diya Shetty',
      patientId: 'PT-1097',
      event: 'Discharge summary generated',
      department: 'Orthopedics',
      timestamp: '08:20 AM',
      status: 'stable',
    },
  ],
  appointments: [
    {
      id: 'appointment-1',
      title: 'Consultations',
      value: '46',
      subtitle: 'Completed today',
    },
    {
      id: 'appointment-2',
      title: 'Pending Reviews',
      value: '18',
      subtitle: 'Awaiting physician input',
    },
    {
      id: 'appointment-3',
      title: 'New Admissions',
      value: '09',
      subtitle: 'Recorded since midnight',
    },
  ],
  departmentLoads: [
    {
      id: 'dept-1',
      name: 'Cardiology',
      utilization: 78,
      activeCases: 96,
    },
    {
      id: 'dept-2',
      name: 'Emergency',
      utilization: 91,
      activeCases: 74,
    },
    {
      id: 'dept-3',
      name: 'Orthopedics',
      utilization: 64,
      activeCases: 58,
    },
    {
      id: 'dept-4',
      name: 'Neurology',
      utilization: 69,
      activeCases: 41,
    },
  ],
  lastUpdated: 'Today, 10:05 AM',
};