
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
import { Github, Loader2, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import LoadingScreen from "@/components/auth/LoadingScreen";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  
  const { signIn, user, isLoading: authLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  // Show loading screen while checking auth
  if (authLoading) {
    return <LoadingScreen />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    setError(null);
    setIsLoading(true);
    
    try {
      const { error: signInError } = await signIn(email, password);
      
      if (signInError) {
        throw signInError;
      }
      
      // Success - navigation will happen automatically via the useEffect
      toast({
        title: "Logged in successfully",
        description: "Redirecting to dashboard...",
      });
      
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: window.location.origin + '/dashboard'
        }
      });
      
      if (error) {
        if (error.message.includes("provider is not enabled")) {
          throw new Error("GitHub authentication is not enabled in the Supabase project settings. Please enable it in the Supabase dashboard.");
        }
        throw error;
      }
      
      // The redirect happens automatically, so no need for additional code here
    } catch (error: any) {
      console.error("GitHub sign in error:", error);
      setError(error.message || "Failed to sign in with GitHub. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Log in to Zordie</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full" 
                disabled={isLoading}
                onClick={handleGithubSignIn}
                type="button"
              >
                <Github className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link 
                      to="/forgot-password" 
                      className="text-xs text-zordie-600 hover:text-zordie-700 font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading} 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-gradient" 
                  disabled={isLoading}
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Sign In
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Separator />
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-zordie-600 hover:text-zordie-700 font-medium">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
