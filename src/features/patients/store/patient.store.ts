import { create } from 'zustand';
import { mockPatients } from '../data/mockPatients';
import type { PatientRecord } from '../types';

type PatientViewMode = 'grid' | 'list';

type PatientStore = {
  patients: PatientRecord[];
  selectedPatient: PatientRecord | null;
  viewMode: PatientViewMode;
  selectPatientById: (id: number) => void;
  setViewMode: (mode: PatientViewMode) => void;
};

export const usePatientStore = create<PatientStore>((set) => ({
  patients: mockPatients,
  selectedPatient: mockPatients[0] ?? null,
  viewMode: 'grid',
  selectPatientById: (id) =>
    set((state) => ({
      selectedPatient:
        state.patients.find((patient) => patient.id === id) ?? null,
    })),
  setViewMode: (mode) => set({ viewMode: mode }),
}));