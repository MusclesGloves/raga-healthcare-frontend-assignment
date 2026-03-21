import { Navigate, useRoutes } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';
import { ROUTES } from '../constants/routes';
import { ProtectedRoute, PublicRoute } from '../features/auth/guards';
import AnalyticsPage from '../pages/AnalyticsPage';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import PatientDetailsPage from '../pages/PatientDetailsPage';

function AppRoutes() {
  const element = useRoutes([
    {
      path: ROUTES.LOGIN,
      element: (
        <PublicRoute>
          <LoginPage />
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
          element: <DashboardPage />,
        },
        {
          path: ROUTES.ANALYTICS,
          element: <AnalyticsPage />,
        },
        {
          path: ROUTES.PATIENT_DETAILS,
          element: <PatientDetailsPage />,
        },
      ],
    },
    {
      path: '/home',
      element: <Navigate to={ROUTES.DASHBOARD} replace />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return element;
}

export default AppRoutes;