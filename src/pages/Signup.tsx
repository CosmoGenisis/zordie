import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Loader2, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import LoadingScreen from "@/components/auth/LoadingScreen";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState("company");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { signUp, signInWithOAuth, user, isLoading: authLoading, getUserDashboardPath } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      const dashboardPath = getUserDashboardPath();
      navigate(dashboardPath);
    }
  }, [user, navigate, getUserDashboardPath]);

  if (authLoading) {
    return <LoadingScreen />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !name) {
      setError("Please fill out all required fields");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    
    if (userType === "company" && (!companyName || !companySize)) {
      setError("Please provide company details");
      return;
    }
    
    setError(null);
    setIsLoading(true);
    
    try {
      const userData = {
        full_name: name,
        user_type: userType,
        ...(userType === "company" && { 
          company_name: companyName,
          company_size: companySize
        })
      };
      
      const { error: signUpError } = await signUp(email, password, userData);
      
      if (signUpError) {
        throw signUpError;
      }
      
      toast({
        title: "Account created successfully",
        description: "Please check your email to confirm your account",
      });
      
      navigate('/verification');
      
    } catch (error: any) {
      console.error("Signup error:", error);
      setError(error.message || "Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError(null);
    
    try {
      const { error } = await signInWithOAuth('google');
      
      if (error) {
        throw error;
      }
      
    } catch (error: any) {
      console.error("Google sign up error:", error);
      setError(error.message || "Failed to sign up with Google. Please try again.");
    }
  };

  const handleLinkedInSignUp = async () => {
    setError(null);
    
    try {
      const { error } = await signInWithOAuth('linkedin_oidc');
      
      if (error) {
        throw error;
      }
      
    } catch (error: any) {
      console.error("LinkedIn sign up error:", error);
      setError(error.message || "Failed to sign up with LinkedIn. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Create your account</CardTitle>
              <CardDescription className="text-center">
                Join Zordie and start hiring smarter or get hired faster
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="company" onValueChange={setUserType}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="company">I'm Hiring</TabsTrigger>
                  <TabsTrigger value="candidate">Looking for a Job</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  disabled={isLoading}
                  onClick={handleGoogleSignUp}
                  type="button"
                >
                  <FcGoogle className="mr-2 h-5 w-5" />
                  Google
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full" 
                  disabled={isLoading}
                  onClick={handleLinkedInSignUp}
                  type="button"
                >
                  <FaLinkedin className="mr-2 h-5 w-5 text-blue-700" />
                  LinkedIn
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with email
                  </span>
                </div>
              </div>
              
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-start">
                  <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isLoading} 
                  />
                </div>
                
                {userType === "company" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input 
                        id="companyName" 
                        placeholder="Acme Inc."
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                        disabled={isLoading} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Company Size</Label>
                      <Select value={companySize} onValueChange={setCompanySize} disabled={isLoading}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading} 
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Password must be at least 6 characters long.
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-gradient" 
                  disabled={isLoading}
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create Account
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By signing up, you agree to our{" "}
                  <Link to="/terms" className="text-zordie-600 hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="text-zordie-600 hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </CardContent>
            <CardFooter>
              <div className="text-center text-sm w-full">
                Already have an account?{" "}
                <Link to="/login" className="text-zordie-600 hover:text-zordie-700 font-medium">
                  Log in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
