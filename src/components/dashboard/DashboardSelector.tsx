
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { toast } from "@/components/ui/use-toast";

const DashboardSelector = () => {
  const navigate = useNavigate();
  const { user, getUserDashboardPath } = useAuth();

  // Automatically redirect to the appropriate dashboard based on user role
  useEffect(() => {
    if (user) {
      const dashboardPath = getUserDashboardPath();
      toast({
        title: "Redirecting",
        description: `Taking you to your ${user.role === 'hr' ? 'HR' : 'Job Seeker'} dashboard`,
      });
      navigate(dashboardPath);
    }
  }, [user, navigate, getUserDashboardPath]);

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Redirecting to your dashboard...</h1>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zordie-500 mx-auto"></div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardSelector;
