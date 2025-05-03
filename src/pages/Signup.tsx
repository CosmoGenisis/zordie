
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would create a user account
    // For now, we'll just redirect to the dashboard selector
    navigate('/dashboard-selector');
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
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zordie-500"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="your@email.com"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zordie-500"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <input 
                    type="password" 
                    id="password"
                    placeholder="••••••••"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zordie-500"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="accountType" className="text-sm font-medium">I am a</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-md p-3 cursor-pointer hover:border-zordie-500 hover:bg-zordie-50 transition-colors">
                      <input 
                        type="radio" 
                        name="accountType" 
                        id="jobSeeker" 
                        value="jobSeeker"
                        className="sr-only"
                        defaultChecked
                      />
                      <label 
                        htmlFor="jobSeeker" 
                        className="flex items-center cursor-pointer"
                      >
                        <span className="h-4 w-4 border rounded-full mr-2 flex items-center justify-center">
                          <span className="h-2 w-2 bg-zordie-500 rounded-full"></span>
                        </span>
                        <span>Job Seeker</span>
                      </label>
                    </div>
                    
                    <div className="border rounded-md p-3 cursor-pointer hover:border-zordie-500 hover:bg-zordie-50 transition-colors">
                      <input 
                        type="radio" 
                        name="accountType" 
                        id="employer" 
                        value="employer"
                        className="sr-only"
                      />
                      <label 
                        htmlFor="employer" 
                        className="flex items-center cursor-pointer"
                      >
                        <span className="h-4 w-4 border rounded-full mr-2 flex items-center justify-center">
                          <span className="h-2 w-2 bg-zordie-500 rounded-full opacity-0"></span>
                        </span>
                        <span>Employer</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="h-4 w-4 text-zordie-600 focus:ring-zordie-500 border-gray-300 rounded"
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
                
                <Button type="submit" className="w-full bg-zordie-600 hover:bg-zordie-700">
                  Create Account
                </Button>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <Separator className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300"></span>
                  </Separator>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                        <path
                          fill="#4285F4"
                          d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                        />
                        <path
                          fill="#34A853"
                          d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                        />
                        <path
                          fill="#EA4335"
                          d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                        />
                      </g>
                    </svg>
                    Google
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>
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
