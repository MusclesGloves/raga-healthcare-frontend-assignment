import { create } from 'zustand';

import { mockDashboardData } from '../data/mockDashboardData';
import type { DashboardData } from '../types';

type DashboardState = DashboardData & {
  isLoading: boolean;
  refreshDashboard: () => void;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  ...mockDashboardData,
  isLoading: false,
  refreshDashboard: () => {
    set({
      ...mockDashboardData,
      lastUpdated: 'Just now',
      isLoading: false,
    });
  },
}));