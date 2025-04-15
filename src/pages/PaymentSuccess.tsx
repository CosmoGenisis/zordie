
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    // Show success toast when the page loads
    toast({
      title: "Payment successful!",
      description: "Thank you for your purchase. Your subscription is now active.",
    });
    
    // Additional logic to verify the payment with Stripe could be added here
  }, [toast]);

  const handleDashboardClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        
        <p className="text-gray-600 text-center max-w-lg mb-8">
          Thank you for your purchase. Your subscription has been activated and you now have access to all the premium features.
        </p>
        
        {sessionId && (
          <div className="bg-gray-50 p-4 rounded-md mb-8 w-full max-w-md">
            <p className="text-sm text-gray-500 mb-1">Transaction Reference:</p>
            <p className="text-sm font-mono break-all">{sessionId}</p>
          </div>
        )}
        
        <div className="space-y-4 w-full max-w-md">
          <Button 
            className="w-full btn-gradient" 
            size="lg"
            onClick={handleDashboardClick}
          >
            Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full" 
            size="lg"
            onClick={() => navigate('/contact')}
          >
            Need Help?
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
