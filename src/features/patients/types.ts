export type PatientStatus = 'stable' | 'attention' | 'critical';
export type PatientGender = 'Male' | 'Female' | 'Other';

export type PatientVital = {
  label: string;
  value: string;
};

export type PatientMedication = {
  name: string;
  dosage: string;
  frequency: string;
};

export type PatientVisit = {
  date: string;
  department: string;
  physician: string;
  reason: string;
};

export type PatientRecord = {
  id: number;
  patientId: string;
  fullName: string;
  age: number;
  gender: PatientGender;
  status: PatientStatus;
  department: string;
  physician: string;
  admissionDate: string;
  nextAppointment: string;
  diagnosis: string;
  insuranceProvider: string;
  roomNumber: string;
  avatar: string;
  email: string;
  phone: string;
  address: string;
  bloodGroup: string;
  vitals: PatientVital[];
  medications: PatientMedication[];
  recentVisits: PatientVisit[];
};