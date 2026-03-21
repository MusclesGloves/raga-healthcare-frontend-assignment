import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import AppShell from '../components/layout/AppShell';
import PageLoader from '../components/common/PageLoader';
import { ROUTES } from '../constants/routes';
import { ProtectedRoute, PublicRoute } from '../features/auth/guards';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const AnalyticsPage = lazy(() => import('../pages/AnalyticsPage'));
const PatientDetailsPage = lazy(() => import('../pages/PatientDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

function AppRoutes() {
  const element = useRoutes([
    {
      path: ROUTES.LOGIN,
      element: (
        <PublicRoute>
          {withSuspense(<LoginPage />)}
        </PublicRoute>
      ),
    },
    {
      element: (
        <ProtectedRoute>
          <AppShell />
        </ProtectedRoute>
      ),
      children: [
        {
          path: ROUTES.DASHBOARD,
          element: withSuspense(<DashboardPage />),
        },
        {
          path: ROUTES.ANALYTICS,
          element: withSuspense(<AnalyticsPage />),
        },
        {
          path: ROUTES.PATIENT_DETAILS,
          element: withSuspense(<PatientDetailsPage />),
        },
      ],
    },
    {
      path: '/home',
      element: <Navigate to={ROUTES.DASHBOARD} replace />,
    },
    {
      path: '*',
      element: withSuspense(<NotFoundPage />),
    },
  ]);

  return element;
}

export default AppRoutes;