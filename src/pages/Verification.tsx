import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle, 
  Shield, 
  Lock, 
  User, 
  Briefcase, 
  Building, 
  FileCheck, 
  Award,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleButtonClick = async (actionType: string, details: any = {}) => {
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData.session?.user?.id;

      if (userId) {
        // Log the user action
        await supabase
          .from('user_actions' as any)
          .insert({
            user_id: userId,
            action_type: actionType,
            action_details: JSON.stringify(details),
            page: 'verification'
          });
        
        // Show toast notification
        toast({
          title: "Request received",
          description: "We're processing your verification request."
        });
        
        // Navigate based on action type
        if (actionType === 'start_verification') {
          navigate('/verify-profile');
        }
      } else {
        // User is not logged in
        toast({
          title: "Login required",
          description: "Please login to continue with verification.",
          variant: "destructive"
        });
        navigate('/login');
      }
    } catch (error) {
      console.error('Error logging action:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zordie-50 to-zordie-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white rounded-full mb-6">
              <Shield className="h-6 w-6 text-zordie-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zordie-800">
              Verification Solutions
            </h1>
            <p className="text-lg text-zordie-600 mb-8">
              Trust and transparency in the recruitment process. Our verification tools provide accurate and reliable information for both employers and candidates.
            </p>
            <Button className="btn-gradient text-lg py-6 px-8" onClick={() => handleButtonClick('start_verification')}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Verification Capabilities"
            subtitle="Trust through thorough verification"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              icon={<User className="h-6 w-6 text-zordie-700" />}
              title="Identity Verification"
              description="Confirm the identity of candidates through multiple verification methods, including document verification and biometric checks."
            />
            
            <FeatureCard 
              icon={<Briefcase className="h-6 w-6 text-zordie-700" />}
              title="Experience Verification"
              description="Verify work experience claims by contacting previous employers and checking employment records."
            />
            
            <FeatureCard 
              icon={<Building className="h-6 w-6 text-zordie-700" />}
              title="Company Verification"
              description="Verify the legitimacy of companies posting jobs to protect job seekers from scams and fraudulent listings."
            />
            
            <FeatureCard 
              icon={<FileCheck className="h-6 w-6 text-zordie-700" />}
              title="Credential Verification"
              description="Validate educational credentials, certifications, and licenses directly with issuing institutions."
            />
            
            <FeatureCard 
              icon={<Award className="h-6 w-6 text-zordie-700" />}
              title="Skills Assessment"
              description="Verify claimed skills through AI-powered assessments tailored to specific roles and industries."
            />
            
            <FeatureCard 
              icon={<Lock className="h-6 w-6 text-zordie-700" />}
              title="Secure Data Handling"
              description="All verification processes follow strict security protocols to protect sensitive information."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How It Works"
            subtitle="Our verification process"
            align="center"
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Connect steps with a vertical line */}
              <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-zordie-200 ml-0.5"></div>
              
              <StepItem
                number="1"
                title="Request Verification"
                description="Employers or candidates initiate the verification process by submitting a request through our platform."
              />
              
              <StepItem
                number="2"
                title="Document Submission"
                description="The subject of verification uploads required documents or provides necessary information through our secure portal."
              />
              
              <StepItem
                number="3"
                title="AI Analysis"
                description="Our AI systems analyze the submitted information, checking for inconsistencies or red flags."
              />
              
              <StepItem
                number="4"
                title="Human Review"
                description="Our verification specialists review the AI analysis and conduct additional checks where necessary."
              />
              
              <StepItem
                number="5"
                title="Verification Report"
                description="A comprehensive verification report is generated, highlighting verified information and any discrepancies."
              />
              
              <StepItem
                number="6"
                title="Results Delivered"
                description="The verification report is delivered to the requesting party through our secure platform, with optional notifications."
                isLast={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Verification Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Verification Solutions"
            subtitle="Tailored to your specific needs"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-zordie-100 mr-4">
                    <Briefcase className="h-6 w-6 text-zordie-700" />
                  </div>
                  <h3 className="text-2xl font-semibold">For Employers</h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <VerificationListItem text="Candidate background checks (identity, education, employment)" />
                  <VerificationListItem text="Criminal record verification where legally permissible" />
                  <VerificationListItem text="Skills validation through assessments" />
                  <VerificationListItem text="Reference verification and analysis" />
                  <VerificationListItem text="Social media presence analysis" />
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-zordie-100 mr-4">
                    <User className="h-6 w-6 text-zordie-700" />
                  </div>
                  <h3 className="text-2xl font-semibold">For Candidates</h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <VerificationListItem text="Pre-verification of credentials for job applications" />
                  <VerificationListItem text="Skills certification through standardized assessments" />
                  <VerificationListItem text="Employment history verification" />
                  <VerificationListItem text="Digital profile verification" />
                  <VerificationListItem text="Verified candidate badge for profiles" />
                </ul>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zordie-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Companies & Candidates</h2>
            <p className="text-zordie-100">
              See what our users say about our verification solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <p className="italic text-zordie-100 mb-6">
                    "Zordie's verification process has dramatically reduced the time our HR team spends on background checks. We've been able to hire faster while maintaining high standards for verification."
                  </p>
                  <div className="mt-auto flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/women/68.jpg" 
                      alt="Testimonial" 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">Jennifer Martinez</div>
                      <div className="text-sm text-zordie-200">HR Director, TechGrowth Inc.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <p className="italic text-zordie-100 mb-6">
                    "As a job seeker, having my credentials pre-verified through Zordie has given me an edge in applications. Employers appreciate the transparency, and I've received more interview requests."
                  </p>
                  <div className="mt-auto flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/men/35.jpg" 
                      alt="Testimonial" 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">Robert Kim</div>
                      <div className="text-sm text-zordie-200">Software Engineer</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Trust Through Verification?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start using our verification tools today to ensure transparent and reliable recruitment processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-lg py-6 px-8" onClick={() => handleButtonClick('employer_verification', { user_type: 'employer' })}>
              For Employers
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8" onClick={() => handleButtonClick('candidate_verification', { user_type: 'candidate' })}>
              For Candidates
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-zordie-100 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

interface StepItemProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const StepItem = ({ number, title, description, isLast = false }: StepItemProps) => {
  return (
    <div className="flex mb-12">
      <div className="shrink-0 mr-6">
        <div className="w-8 h-8 bg-zordie-600 text-white rounded-full flex items-center justify-center font-semibold text-sm z-10 relative">
          {number}
        </div>
      </div>
      <div className={`pb-${isLast ? '0' : '8'}`}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const VerificationListItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start">
      <CheckCircle className="h-5 w-5 text-zordie-600 mr-3 shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
};

export default Verification;
