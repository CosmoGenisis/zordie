
import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/components/ui/use-toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresRole?: 'hr' | 'jobseeker';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children,
  requiresRole
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isLoading, getUserDashboardPath } = useAuth();
  
  useEffect(() => {
    if (!isLoading && !user) {
      toast({
        title: "Authentication required",
        description: "Please login to access this page",
        variant: "destructive"
      });
    }
  }, [user, isLoading]);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zordie-500"></div>
    </div>;
  }
  
  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // If role requirement is specified and user doesn't have that role, redirect
  if (requiresRole && user.role !== requiresRole) {
    toast({
      title: "Access denied",
      description: `This section requires ${requiresRole} privileges`,
      variant: "destructive"
    });
    return <Navigate to={getUserDashboardPath()} replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
