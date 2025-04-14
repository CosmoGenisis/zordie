
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LoadingScreen from './LoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredUserType?: 'company' | 'candidate';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredUserType 
}) => {
  const { user, userProfile, isLoading, getUserDashboardPath } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // Preload user profile data
    // This is already handled in AuthContext
  }, []);

  // Show loading screen while checking auth status
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Redirect to login if user is not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If a specific user type is required, check it
  if (requiredUserType && userProfile) {
    if (userProfile.user_type !== requiredUserType) {
      const redirectPath = getUserDashboardPath();
      if (location.pathname !== redirectPath) {
        return <Navigate to={redirectPath} replace />;
      }
    }
  }

  // Render children if user is authenticated and user type matches (if specified)
  return <>{children}</>;
};

export default ProtectedRoute;
