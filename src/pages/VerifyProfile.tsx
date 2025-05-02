
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { useToast } from '@/hooks/use-toast';

const VerifyProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "Action taken",
      description: "This is a placeholder for profile verification functionality."
    });
    navigate('/dashboard');
  };

  return (
    <Layout>
      <div className="container max-w-4xl py-12">
        <SectionHeading
          title="Verify Your Profile"
          subtitle="Complete your profile verification"
          align="center"
        />
        
        <Card className="mt-8">
          <CardContent className="p-8 text-center">
            <p className="mb-6">
              This is a placeholder page for the profile verification functionality. 
              Authentication has been removed from this application.
            </p>
            <Button onClick={handleButtonClick}>Back to Dashboard</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default VerifyProfile;
