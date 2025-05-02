
import { Link } from "react-router-dom";
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

const Signup = () => {
  return (
    <Layout>
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign Up Page Placeholder</CardTitle>
              <CardDescription className="text-center">
                Authentication has been removed from this application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="py-8">This is a placeholder for the signup page. Authentication functionality has been removed.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link to="/">
                <Button>Back to Home</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
