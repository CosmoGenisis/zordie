
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-zordie-700">404</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <p className="text-gray-500 mb-8">
            The page you requested may have been moved, deleted, or never existed.
          </p>
          <Link to="/">
            <Button variant="default" size="lg" className="btn-gradient">
              <ChevronLeft className="mr-2 h-5 w-5" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
