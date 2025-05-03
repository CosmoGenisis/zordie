
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/components/ui/use-toast';

const Signup = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState<'jobseeker' | 'hr'>('jobseeker');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!termsAccepted) {
      toast({
        title: "Terms and Conditions",
        description: "You must accept the Terms of Service and Privacy Policy",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { error, data } = await signUp(email, password, accountType);
      
      if (error) {
        toast({
          title: "Sign up failed",
          description: error.message || "Please try again with different credentials",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Account created",
          description: "Your account has been successfully created!"
        });
        
        // Redirect directly to the appropriate dashboard based on role
        if (accountType === 'hr') {
          navigate("/dashboard");
        } else {
          navigate("/job-seeker-dashboard");
        }
      }
    } catch (error: any) {
      toast({
        title: "Unexpected error",
        description: error?.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
              <CardDescription className="text-center">
                Sign up to get started with Zordie
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    id="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <Input 
                    type="password" 
                    id="password"
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">I am a</label>
                  <RadioGroup 
                    value={accountType} 
                    onValueChange={(value) => setAccountType(value as 'jobseeker' | 'hr')}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className={`border rounded-md p-3 cursor-pointer ${accountType === 'jobseeker' ? 'border-zordie-500 bg-zordie-50' : 'hover:border-zordie-500 hover:bg-zordie-50'} transition-colors`}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="jobseeker" id="jobSeeker" />
                        <Label htmlFor="jobSeeker" className="cursor-pointer">Job Seeker</Label>
                      </div>
                    </div>
                    
                    <div className={`border rounded-md p-3 cursor-pointer ${accountType === 'hr' ? 'border-zordie-500 bg-zordie-50' : 'hover:border-zordie-500 hover:bg-zordie-50'} transition-colors`}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hr" id="employer" />
                        <Label htmlFor="employer" className="cursor-pointer">HR / Employer</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="h-4 w-4 text-zordie-600 focus:ring-zordie-500 border-gray-300 rounded"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{' '}
                    <Link to="/terms" className="text-zordie-600 hover:text-zordie-700 font-medium">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-zordie-600 hover:text-zordie-700 font-medium">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-zordie-600 hover:bg-zordie-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-600 text-center w-full">
                Already have an account?{' '}
                <Link to="/login" className="text-zordie-600 hover:text-zordie-700 font-medium">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
