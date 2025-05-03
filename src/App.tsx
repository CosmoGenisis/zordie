
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import PostJob from "./pages/PostJob";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import ForCompanies from "./pages/ForCompanies";
import ForJobSeekers from "./pages/ForJobSeekers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Verification from "./pages/Verification";
import EnterpriseSolutions from "./pages/EnterpriseSolutions";
import AiScreening from "./pages/AiScreening";
import FindJobs from "./pages/FindJobs";
import PracticeInterview from "./pages/PracticeInterview";
import Resources from "./pages/Resources";
import AIInterview from "./pages/AIInterview";
import UserDashboard from "./pages/UserDashboard";
import Chatbot from "./pages/Chatbot";
import ResumeManager from "./pages/ResumeManager";
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import IntegrationSettings from "./pages/IntegrationSettings";
import VerifyProfile from "./pages/VerifyProfile";
import JobApplication from "./pages/JobApplication";
import DashboardSelector from "./components/dashboard/DashboardSelector";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Create a new QueryClient instance for each component render
const App = () => {
  // Create a new QueryClient instance
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/features" element={<Features />} />
                <Route path="/companies" element={<ForCompanies />} />
                <Route path="/candidates" element={<ForJobSeekers />} />
                <Route path="/dashboard-selector" element={<DashboardSelector />} />
                <Route path="/dashboard" element={
                  <ProtectedRoute requiresRole="hr">
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/user-dashboard" element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/job-seeker-dashboard" element={
                  <ProtectedRoute requiresRole="jobseeker">
                    <JobSeekerDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/company-dashboard" element={
                  <ProtectedRoute requiresRole="hr">
                    <CompanyDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/integration-settings" element={
                  <ProtectedRoute requiresRole="hr">
                    <IntegrationSettings />
                  </ProtectedRoute>
                } />
                <Route path="/resumes" element={
                  <ProtectedRoute>
                    <ResumeManager />
                  </ProtectedRoute>
                } />
                <Route path="/chat" element={
                  <ProtectedRoute>
                    <Chatbot />
                  </ProtectedRoute>
                } />
                <Route path="/post-job" element={
                  <ProtectedRoute requiresRole="hr">
                    <PostJob />
                  </ProtectedRoute>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/verification" element={<Verification />} />
                <Route path="/enterprise" element={<EnterpriseSolutions />} />
                <Route path="/ai-screening" element={
                  <ProtectedRoute requiresRole="hr">
                    <AiScreening />
                  </ProtectedRoute>
                } />
                <Route path="/find-jobs" element={<FindJobs />} />
                <Route path="/verify-profile" element={
                  <ProtectedRoute>
                    <VerifyProfile />
                  </ProtectedRoute>
                } />
                <Route path="/practice-interview" element={
                  <ProtectedRoute requiresRole="jobseeker">
                    <PracticeInterview />
                  </ProtectedRoute>
                } />
                <Route path="/ai-interview" element={
                  <ProtectedRoute>
                    <AIInterview />
                  </ProtectedRoute>
                } />
                <Route path="/resources" element={<Resources />} />
                <Route path="/job-application/:jobId" element={
                  <ProtectedRoute>
                    <JobApplication />
                  </ProtectedRoute>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
