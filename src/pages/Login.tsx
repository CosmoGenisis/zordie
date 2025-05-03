
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
import Layout from "@/components/layout/Layout";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // In a real app, this would authenticate the user
    // For now, we'll just redirect to the dashboard selector
    navigate("/dashboard-selector");
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
              <CardDescription className="text-center">
                Sign in to continue to your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="your@email.com"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zordie-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <input 
                  type="password" 
                  id="password"
                  placeholder="••••••••"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zordie-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="h-4 w-4 text-zordie-600 focus:ring-zordie-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-zordie-600 hover:text-zordie-700">
                  Forgot password?
                </a>
              </div>
              <Button 
                className="w-full bg-zordie-600 hover:bg-zordie-700"
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-600 text-center w-full">
                Don't have an account?{" "}
                <Link to="/signup" className="text-zordie-600 hover:text-zordie-700 font-medium">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
