import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verification from "./pages/Verification";
import VerifyProfile from "./pages/VerifyProfile";
import AiScreening from "./pages/AiScreening";
import FindJobs from "./pages/FindJobs";
import PostJob from "./pages/PostJob";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Dashboard from "./pages/Dashboard";
import UserDashboard from "./pages/UserDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import Chatbot from "./pages/Chatbot";
import IntegrationSettings from "./pages/IntegrationSettings";
import PracticeInterview from "./pages/PracticeInterview";
import AIInterview from "./pages/AIInterview";
import ResumeManager from "./pages/ResumeManager";
import NotFound from "./pages/NotFound";
import ForCompanies from "./pages/ForCompanies";
import ForJobSeekers from "./pages/ForJobSeekers";
import EnterpriseSolutions from "./pages/EnterpriseSolutions";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-react-theme">
      <AuthProvider>
        {isMounted ? (
          <>
            <Toaster />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/verify-profile" element={<VerifyProfile />} />
              <Route path="/ai-screening" element={<AiScreening />} />
              <Route path="/find-jobs" element={<FindJobs />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/for-companies" element={<ForCompanies />} />
              <Route path="/for-job-seekers" element={<ForJobSeekers />} />
              <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              
              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/company-dashboard" element={<CompanyDashboard />} />
                <Route path="/job-seeker-dashboard" element={<JobSeekerDashboard />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/integration-settings" element={<IntegrationSettings />} />
                <Route path="/practice-interview" element={<PracticeInterview />} />
                <Route path="/ai-interview" element={<AIInterview />} />
                <Route path="/resume-manager" element={<ResumeManager />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        ) : null}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
