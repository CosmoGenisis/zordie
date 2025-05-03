
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const DashboardSelector = () => {
  const navigate = useNavigate();
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const { user } = useAuth();

  const goToHRDashboard = () => {
    navigate("/dashboard");
  };

  const goToJobSeekerDashboard = () => {
    navigate("/job-seeker-dashboard");
  };

  const getRecommendedDashboard = () => {
    if (user?.role === 'hr') {
      return {
        title: "HR Dashboard",
        description: "Recommended based on your role",
        action: goToHRDashboard,
        highlighted: true
      };
    } else {
      return {
        title: "Job Seeker Dashboard",
        description: "Recommended based on your role",
        action: goToJobSeekerDashboard,
        highlighted: true
      };
    }
  };

  const recommendedDashboard = getRecommendedDashboard();

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Welcome to Zordie</h1>
            <p className="text-lg text-gray-600">Choose your dashboard based on your role</p>
            {user && (
              <p className="mt-2 text-zordie-600">
                Logged in as {user.displayName} ({user.role})
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* HR Dashboard Option */}
            <Card 
              className={`border-2 transition-all duration-300 cursor-pointer ${
                hoveredOption === "hr" || (recommendedDashboard.title === "HR Dashboard" && !hoveredOption)
                  ? "border-zordie-500 shadow-lg transform scale-105" 
                  : "border-gray-200"
              }`}
              onMouseEnter={() => setHoveredOption("hr")}
              onMouseLeave={() => setHoveredOption(null)}
              onClick={goToHRDashboard}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-zordie-100 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-zordie-600" />
                </div>
                <CardTitle className="text-xl">HR Dashboard</CardTitle>
                <CardDescription>
                  For recruiters and hiring managers
                  {recommendedDashboard.title === "HR Dashboard" && (
                    <span className="block mt-1 text-zordie-600 font-medium">
                      Recommended for you
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Manage job postings, review applications, conduct assessments, and track your hiring pipeline.</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  onClick={goToHRDashboard}
                >
                  Continue to HR Dashboard
                </Button>
              </CardFooter>
            </Card>

            {/* Job Seeker Dashboard Option */}
            <Card 
              className={`border-2 transition-all duration-300 cursor-pointer ${
                hoveredOption === "jobseeker" || (recommendedDashboard.title === "Job Seeker Dashboard" && !hoveredOption)
                  ? "border-zordie-500 shadow-lg transform scale-105" 
                  : "border-gray-200"
              }`}
              onMouseEnter={() => setHoveredOption("jobseeker")}
              onMouseLeave={() => setHoveredOption(null)}
              onClick={goToJobSeekerDashboard}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-zordie-100 rounded-full flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-zordie-600" />
                </div>
                <CardTitle className="text-xl">Job Seeker Dashboard</CardTitle>
                <CardDescription>
                  For candidates looking for opportunities
                  {recommendedDashboard.title === "Job Seeker Dashboard" && (
                    <span className="block mt-1 text-zordie-600 font-medium">
                      Recommended for you
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Practice interviews, manage your resume, track applications, and improve your skills with AI assistance.</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  onClick={goToJobSeekerDashboard}
                >
                  Continue to Job Seeker Dashboard
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardSelector;
