import { create } from 'zustand';
import { mockAnalyticsData } from '../data/mockAnalyticsData';
import type { AnalyticsData } from '../types';

type AnalyticsStore = {
  analytics: AnalyticsData;
  isLoading: boolean;
  refreshAnalytics: () => void;
};

export const useAnalyticsStore = create<AnalyticsStore>((set) => ({
  analytics: mockAnalyticsData,
  isLoading: false,
  refreshAnalytics: () => {
    set({ isLoading: true });

    window.setTimeout(() => {
      set({
        analytics: {
          ...mockAnalyticsData,
          updatedAt: 'Updated just now',
        },
        isLoading: false,
      });
    }, 600);
  },
}));