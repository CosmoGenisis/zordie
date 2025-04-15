
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";

const CTASection = () => {
  const navigate = useNavigate();
  const [isLoadingJob, setIsLoadingJob] = useState(false);
  const [isLoadingAccount, setIsLoadingAccount] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handlePostJob = async () => {
    setIsLoadingJob(true);
    
    try {
      if (user) {
        // Track user action in analytics
        await supabase
          .from('user_actions' as any)
          .insert({
            user_id: user.id,
            action_type: 'cta_click',
            action_details: 'post_job_cta'
          });
      }
      
      navigate("/post-job");
    } catch (error) {
      console.error("Error logging CTA click:", error);
    } finally {
      setIsLoadingJob(false);
    }
  };

  const handleCreateAccount = async () => {
    setIsLoadingAccount(true);
    
    try {
      if (user) {
        toast({
          title: "You're already logged in",
          description: "You already have an account with us."
        });
        navigate("/dashboard");
        return;
      }
      
      navigate("/signup");
    } catch (error) {
      console.error("Error navigating to signup:", error);
    } finally {
      setIsLoadingAccount(false);
    }
  };

  return <section className="py-16 bg-gradient-to-r from-zordie-700 to-accent1 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
          Ready to transform your hiring process with AI and verification?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of companies and candidates building a more transparent and efficient hiring ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg" 
            variant="default" 
            className="bg-white text-zordie-700 hover:bg-white/90"
            onClick={handlePostJob}
            disabled={isLoadingJob}
          >
            {isLoadingJob ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                Post a Job <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white bg-[#0e0520]/0 text-inherit text-base"
            onClick={handleCreateAccount}
            disabled={isLoadingAccount}
          >
            {isLoadingAccount ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </div>
      </div>
    </section>;
};

export default CTASection;
