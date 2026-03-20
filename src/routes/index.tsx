import { Navigate, useRoutes } from 'react-router-dom';
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
      path: ROUTES.DASHBOARD,
      element: (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      ),
    },
    {
      path: ROUTES.ANALYTICS,
      element: (
        <ProtectedRoute>
          <AnalyticsPage />
        </ProtectedRoute>
      ),
    },
    {
      path: ROUTES.PATIENT_DETAILS,
      element: (
        <ProtectedRoute>
          <PatientDetailsPage />
        </ProtectedRoute>
      ),
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