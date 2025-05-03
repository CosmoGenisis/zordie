
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectToDashboardSelector?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children,
  redirectToDashboardSelector = false
}) => {
  const location = useLocation();

  // In a real application with auth, you would check for authentication here
  // For now, just return the children directly
  if (redirectToDashboardSelector && location.pathname === '/dashboard') {
    return <Navigate to="/dashboard-selector" replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
