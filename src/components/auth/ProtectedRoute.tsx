
import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/components/ui/use-toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectToDashboardSelector?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children,
  redirectToDashboardSelector = false
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  useEffect(() => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to access this page",
        variant: "destructive"
      });
    }
  }, [user]);

  if (redirectToDashboardSelector && location.pathname === '/dashboard') {
    return <Navigate to="/dashboard-selector" replace />;
  }
  
  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
