
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  CheckCircle2, 
  Upload, 
  FileText, 
  User, 
  Briefcase, 
  Building, 
  GraduationCap,
  BadgeCheck,
  Shield,
  Clock,
  ChevronRight,
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

const VerifyProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zordie-50 to-zordie-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white rounded-full mb-6">
              <BadgeCheck className="h-6 w-6 text-zordie-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zordie-800">
              Verify Your Professional Profile
            </h1>
            <p className="text-lg text-zordie-600 mb-8">
              Enhance your credibility and stand out to employers by verifying your skills, experience, and credentials.
            </p>
            <Button className="btn-gradient text-lg py-6 px-8">
              Start Verification
            </Button>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Verification Process"
            subtitle="Simple steps to verify your profile"
            align="center"
          />
          
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <StepCard 
              number="1"
              title="Create Profile"
              description="Complete your professional profile with accurate information about your experience and skills."
              icon={User}
              isActive={currentStep >= 1}
              isCompleted={currentStep > 1}
            />
            
            <StepCard 
              number="2"
              title="Submit Documents"
              description="Upload supporting documents like certificates, diplomas, and employment verification."
              icon={FileText}
              isActive={currentStep >= 2}
              isCompleted={currentStep > 2}
            />
            
            <StepCard 
              number="3"
              title="Verification"
              description="Our team verifies your information with schools, employers, and certification authorities."
              icon={Shield}
              isActive={currentStep >= 3}
              isCompleted={currentStep > 3}
            />
            
            <StepCard 
              number="4"
              title="Verified Badge"
              description="Receive your verified badge to display on your profile and stand out to employers."
              icon={BadgeCheck}
              isActive={currentStep >= 4}
              isCompleted={currentStep > 4}
            />
          </div>
        </div>
      </section>

      {/* Verification Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold">Profile Verification</h2>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500 mr-3">Completion: {getCompletionPercentage(currentStep)}%</p>
                    <Progress value={getCompletionPercentage(currentStep)} className="w-32" />
                  </div>
                </div>
                
                <div className="space-y-8">
                  {/* Step 1: Personal Information */}
                  <div className={`transition-all duration-300 ${currentStep === 1 ? 'opacity-100' : 'opacity-50'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${currentStep >= 1 ? 'bg-zordie-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        1
                      </div>
                      <h3 className="text-xl font-semibold">Personal Information</h3>
                      {currentStep > 1 && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />
                      )}
                    </div>
                    
                    <div className={`space-y-4 mt-6 ${currentStep !== 1 ? 'hidden' : ''}`}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">First Name</label>
                          <Input placeholder="Enter your first name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Last Name</label>
                          <Input placeholder="Enter your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <Input type="email" placeholder="Enter your email address" />
                        <p className="text-xs text-gray-500 mt-1">We'll send a verification code to this email.</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <Input placeholder="Enter your phone number" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Current Location</label>
                        <Input placeholder="City, State/Province, Country" />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button onClick={() => setCurrentStep(2)}>
                          Continue <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2: Professional Experience */}
                  <div className={`transition-all duration-300 ${currentStep === 2 ? 'opacity-100' : 'opacity-50'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${currentStep >= 2 ? 'bg-zordie-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        2
                      </div>
                      <h3 className="text-xl font-semibold">Professional Experience</h3>
                      {currentStep > 2 && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />
                      )}
                    </div>
                    
                    <div className={`space-y-6 mt-6 ${currentStep !== 2 ? 'hidden' : ''}`}>
                      <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center">
                          <Briefcase className="h-5 w-5 text-zordie-600 mr-2" />
                          <h4 className="text-lg font-medium">Current/Most Recent Position</h4>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Job Title</label>
                            <Input placeholder="Enter your job title" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Company</label>
                            <Input placeholder="Enter company name" />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Start Date</label>
                            <Input type="date" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">End Date</label>
                            <Input type="date" />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Job Description</label>
                          <Textarea placeholder="Briefly describe your responsibilities and achievements" />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Reference Contact (Optional)</label>
                          <div className="grid md:grid-cols-2 gap-4">
                            <Input placeholder="Reference name" />
                            <Input placeholder="Reference email" />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">We may contact this person to verify your employment.</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full text-zordie-600 border-dashed border-zordie-300">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Add Another Position
                      </Button>
                      
                      <div className="flex justify-between">
                        <Button variant="outline" onClick={() => setCurrentStep(1)}>
                          Back
                        </Button>
                        <Button onClick={() => setCurrentStep(3)}>
                          Continue <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3: Education */}
                  <div className={`transition-all duration-300 ${currentStep === 3 ? 'opacity-100' : 'opacity-50'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${currentStep >= 3 ? 'bg-zordie-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        3
                      </div>
                      <h3 className="text-xl font-semibold">Education</h3>
                      {currentStep > 3 && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />
                      )}
                    </div>
                    
                    <div className={`space-y-6 mt-6 ${currentStep !== 3 ? 'hidden' : ''}`}>
                      <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center">
                          <GraduationCap className="h-5 w-5 text-zordie-600 mr-2" />
                          <h4 className="text-lg font-medium">Highest Education</h4>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">School/University</label>
                            <Input placeholder="Enter institution name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Degree</label>
                            <Input placeholder="E.g., Bachelor of Science" />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Field of Study</label>
                            <Input placeholder="E.g., Computer Science" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Graduation Date</label>
                            <Input type="date" />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Upload Degree Certificate</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-500 mb-2">Drag and drop your certificate or click to browse</p>
                            <Button variant="outline" size="sm">Select File</Button>
                            <p className="text-xs text-gray-500 mt-2">PDF, JPG or PNG, max 5MB</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full text-zordie-600 border-dashed border-zordie-300">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        Add Another Education
                      </Button>
                      
                      <div className="flex justify-between">
                        <Button variant="outline" onClick={() => setCurrentStep(2)}>
                          Back
                        </Button>
                        <Button onClick={() => setCurrentStep(4)}>
                          Continue <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 4: Skills & Certifications */}
                  <div className={`transition-all duration-300 ${currentStep === 4 ? 'opacity-100' : 'opacity-50'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${currentStep >= 4 ? 'bg-zordie-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        4
                      </div>
                      <h3 className="text-xl font-semibold">Skills & Certifications</h3>
                      {currentStep > 4 && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />
                      )}
                    </div>
                    
                    <div className={`space-y-6 mt-6 ${currentStep !== 4 ? 'hidden' : ''}`}>
                      <div>
                        <label className="block text-sm font-medium mb-1">Key Skills</label>
                        <Input placeholder="E.g., Project Management, JavaScript, Machine Learning (comma-separated)" />
                      </div>
                      
                      <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center">
                          <BadgeCheck className="h-5 w-5 text-zordie-600 mr-2" />
                          <h4 className="text-lg font-medium">Professional Certification</h4>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Certification Name</label>
                            <Input placeholder="E.g., PMP, AWS Certified Solutions Architect" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Issuing Organization</label>
                            <Input placeholder="E.g., PMI, Amazon Web Services" />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Issue Date</label>
                            <Input type="date" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Expiration Date (if applicable)</label>
                            <Input type="date" />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Credential ID (if applicable)</label>
                          <Input placeholder="Enter credential ID" />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Upload Certificate</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-500 mb-2">Drag and drop your certificate or click to browse</p>
                            <Button variant="outline" size="sm">Select File</Button>
                            <p className="text-xs text-gray-500 mt-2">PDF, JPG or PNG, max 5MB</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full text-zordie-600 border-dashed border-zordie-300">
                        <BadgeCheck className="h-4 w-4 mr-2" />
                        Add Another Certification
                      </Button>
                      
                      <div className="flex justify-between">
                        <Button variant="outline" onClick={() => setCurrentStep(3)}>
                          Back
                        </Button>
                        <Button onClick={() => setCurrentStep(5)} className="btn-gradient">
                          Submit for Verification
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 5: Confirmation */}
                  <div className={`transition-all duration-300 ${currentStep === 5 ? 'opacity-100' : 'hidden'}`}>
                    <div className="text-center p-6">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Verification Request Submitted</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for submitting your information for verification. Our team will review your documents and complete the verification process within 3-5 business days.
                      </p>
                      
                      <div className="bg-zordie-50 p-4 rounded-lg mb-6">
                        <div className="flex items-center mb-2">
                          <Clock className="h-5 w-5 text-zordie-600 mr-2" />
                          <p className="font-medium">Verification Timeline</p>
                        </div>
                        <p className="text-sm text-gray-600">
                          You will receive email updates as your information is verified. You can also check the status of your verification on your profile dashboard.
                        </p>
                      </div>
                      
                      <div className="flex justify-center">
                        <Button>
                          Go to Dashboard
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Benefits of Verification"
            subtitle="Stand out from the crowd"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <BenefitCard 
              icon={<BadgeCheck className="h-6 w-6 text-zordie-700" />}
              title="Boost Credibility"
              description="A verified profile builds trust with employers and increases your chances of being considered for roles."
            />
            
            <BenefitCard 
              icon={<Briefcase className="h-6 w-6 text-zordie-700" />}
              title="Priority in Job Matching"
              description="Verified profiles are prioritized in our AI matching algorithm, connecting you with better opportunities."
            />
            
            <BenefitCard 
              icon={<User className="h-6 w-6 text-zordie-700" />}
              title="Enhanced Profile Visibility"
              description="Verified profiles receive up to 4x more views from potential employers and recruiters."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-zordie-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-zordie-100">
              Hear from professionals who boosted their career with a verified profile
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <p className="italic text-zordie-100 mb-6">
                    "After getting my profile verified, I received interview requests from companies that hadn't responded to my applications before. The verification badge made a real difference."
                  </p>
                  <div className="mt-auto flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Testimonial" 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">Michael Chen</div>
                      <div className="text-sm text-zordie-200">Software Engineer</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <p className="italic text-zordie-100 mb-6">
                    "As someone transitioning careers, having my transferable skills verified gave me credibility in a new industry. I landed a job within two weeks of completing verification."
                  </p>
                  <div className="mt-auto flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Testimonial" 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">Jessica Williams</div>
                      <div className="text-sm text-zordie-200">Marketing Manager</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Learn more about our verification process"
            align="center"
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            <Accordion title="How long does the verification process take?">
              <p className="text-gray-600">
                The verification process typically takes 3-5 business days, depending on the complexity of your profile and the responsiveness of your references and institutions. You'll receive regular updates on the status of your verification.
              </p>
            </Accordion>
            
            <Accordion title="What documents do I need to provide?">
              <p className="text-gray-600">
                You'll need to provide copies of your educational certificates, professional certifications, and any other relevant documentation that supports your claims. For employment verification, we may ask for employment contracts, pay stubs, or reference contacts.
              </p>
            </Accordion>
            
            <Accordion title="Is there a fee for profile verification?">
              <p className="text-gray-600">
                Basic verification is included with your premium membership. For extensive verification including multiple positions, educational qualifications, and certifications, there may be an additional fee. See our pricing page for details.
              </p>
            </Accordion>
            
            <Accordion title="How do employers know my profile is verified?">
              <p className="text-gray-600">
                Verified profiles display a prominent verification badge that employers can see. When they click on the badge, they can see exactly which aspects of your profile have been verified (education, experience, certifications, etc.)
              </p>
            </Accordion>
            
            <Accordion title="What if some of my information cannot be verified?">
              <p className="text-gray-600">
                If we're unable to verify certain information, we'll contact you to provide additional documentation or clarification. If verification still isn't possible, that specific element won't receive the verification badge, but the rest of your verified information will still display the badge.
              </p>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Stand Out to Employers?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get your professional credentials verified and increase your chances of landing your dream job.
          </p>
          <Button className="btn-gradient text-lg py-6 px-8 group">
            Start Verification Process
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

const getCompletionPercentage = (step: number): number => {
  const totalSteps = 4;
  return Math.round(((step - 1) / totalSteps) * 100);
};

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  isCompleted: boolean;
}

const StepCard = ({ number, title, description, icon: Icon, isActive, isCompleted }: StepCardProps) => {
  return (
    <Card className={`border ${isActive ? 'border-zordie-300 shadow-md' : 'border-gray-200'} transition-all duration-300 h-full`}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${isCompleted ? 'bg-green-600 text-white' : isActive ? 'bg-zordie-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
            {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : number}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="w-12 h-12 rounded-full bg-zordie-100 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-zordie-700" />
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
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

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-4 text-left font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronRight className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 p-4 pt-0' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default VerifyProfile;
