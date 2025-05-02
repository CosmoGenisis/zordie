import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Briefcase, Building, Clock, MapPin, Calendar, FileText, 
  User, CheckCircle, Loader2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ResumeUploader from '@/components/resume/ResumeUploader';

// Job details mock data (in a real app, this would be fetched from a database)
const jobData = {
  id: '1',
  title: 'Senior Frontend Developer',
  company: 'TechCorp Inc.',
  location: 'San Francisco, CA (Remote)',
  salary: '$120,000 - $150,000',
  type: 'Full-time',
  posted: '2 days ago',
  deadline: 'June 15, 2025',
  description: `We are seeking an experienced Frontend Developer to join our growing team. You will be responsible for building and maintaining user interfaces for our web applications.
  
  The ideal candidate has extensive experience with React, TypeScript, and modern frontend frameworks.
  
  Responsibilities:
  - Develop and maintain responsive web applications
  - Collaborate with designers to implement UI/UX designs
  - Work with backend developers to integrate frontend with APIs
  - Optimize applications for maximum performance
  
  Requirements:
  - 5+ years of experience with frontend development
  - Strong proficiency in React, TypeScript, and HTML/CSS
  - Experience with state management (Redux, Context API)
  - Knowledge of modern frontend build tools and workflows`,
  skills: ['React', 'TypeScript', 'Redux', 'CSS', 'HTML5', 'Responsive Design', 'Git'],
  benefits: [
    'Competitive salary',
    'Health, dental, and vision insurance',
    'Flexible work hours',
    '401(k) matching',
    'Remote work options',
    'Professional development budget'
  ]
};

const JobApplication = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { jobId } = useParams();
  const [activeTab, setActiveTab] = useState('job-details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [applicationScore, setApplicationScore] = useState<number | null>(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [referralSource, setReferralSource] = useState('');

  const handleResumeUpload = (files: File[]) => {
    if (files.length === 0) return;
    
    setIsSubmitting(true);
    
    // Simulate resume upload and analysis
    setTimeout(() => {
      setResumeUploaded(true);
      
      // Simulate AI scoring (in a real app, this would come from backend analysis)
      const randomScore = Math.floor(Math.random() * 31) + 70; // Score between 70-100
      setApplicationScore(randomScore);
      
      setIsSubmitting(false);
      
      toast({
        title: "Resume uploaded successfully",
        description: "Your resume has been analyzed and scored based on job requirements."
      });
    }, 3000);
  };

  const handleApplyClick = () => {
    if (!resumeUploaded) {
      toast({
        title: "Resume required",
        description: "Please upload your resume before applying.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate application submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application submitted successfully",
        description: "Your application has been sent to the hiring team."
      });
      navigate('/job-seeker-dashboard');
    }, 2000);
  };

  return (
    <Layout>
      <div className="container py-12">
        <SectionHeading
          title={jobData.title}
          subtitle={`${jobData.company} • ${jobData.location}`}
          align="left"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left column - Job details */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="job-details">Job Details</TabsTrigger>
                <TabsTrigger value="company-info">Company</TabsTrigger>
                <TabsTrigger value="apply">Apply</TabsTrigger>
              </TabsList>
              
              <TabsContent value="job-details" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Job Description</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 mr-2 text-zordie-600" />
                        <span className="text-gray-700">{jobData.type}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-zordie-600" />
                        <span className="text-gray-700">{jobData.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-zordie-600" />
                        <span className="text-gray-700">Posted: {jobData.posted}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-zordie-600" />
                        <span className="text-gray-700">Apply by: {jobData.deadline}</span>
                      </div>
                    </div>

                    <Separator />
                    
                    <div>
                      <h3 className="font-medium text-lg mb-2">Salary Range</h3>
                      <p className="text-gray-700">{jobData.salary}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium text-lg mb-2">Description</h3>
                      <div className="text-gray-700 whitespace-pre-line">
                        {jobData.description}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium text-lg mb-3">Required Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {jobData.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium text-lg mb-2">Benefits</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {jobData.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="company-info" className="mt-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-xl">{jobData.company}</CardTitle>
                    <Building className="h-5 w-5 text-zordie-600" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">
                      TechCorp Inc. is a leading technology company specializing in innovative software solutions. 
                      With over 500 employees across multiple locations, we're committed to creating 
                      cutting-edge products that solve real-world problems.
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Technology</Badge>
                      <Badge variant="outline">Software</Badge>
                      <Badge variant="outline">Enterprise</Badge>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium text-lg mb-2">Company Culture</h3>
                      <p className="text-gray-700">
                        We value innovation, collaboration, and work-life balance. Our team members enjoy a 
                        flexible working environment that encourages creativity and personal growth.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium text-lg mb-2">More Jobs at {jobData.company}</h3>
                      <div className="space-y-2">
                        <div className="p-3 border rounded-md">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">UX Designer</p>
                              <p className="text-sm text-gray-500">Remote • Full-time</p>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => navigate('/job-application/2')}>
                              View
                            </Button>
                          </div>
                        </div>
                        <div className="p-3 border rounded-md">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Backend Developer</p>
                              <p className="text-sm text-gray-500">San Francisco • Full-time</p>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => navigate('/job-application/3')}>
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="apply" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Apply for {jobData.title}</CardTitle>
                    <CardDescription>Complete your application below</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="resume" className="mb-2 block">Resume</Label>
                      {resumeUploaded ? (
                        <div className="p-4 border border-green-200 bg-green-50 rounded-md flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <div>
                            <p className="font-medium text-green-800">Resume uploaded successfully</p>
                            <p className="text-sm text-green-700">Your resume has been analyzed and scored</p>
                          </div>
                        </div>
                      ) : (
                        <ResumeUploader onUpload={handleResumeUpload} />
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="cover-letter" className="mb-2 block">Cover Letter (Optional)</Label>
                      <Textarea 
                        id="cover-letter" 
                        placeholder="Write a brief cover letter explaining why you're a good fit for this position"
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        className="min-h-[150px]"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="work-experience" className="mb-2 block">Relevant Work Experience</Label>
                      <Textarea 
                        id="work-experience" 
                        placeholder="Briefly describe your most relevant work experience for this position"
                        value={workExperience}
                        onChange={(e) => setWorkExperience(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="referral" className="mb-2 block">How did you hear about this position?</Label>
                      <RadioGroup
                        value={referralSource}
                        onValueChange={setReferralSource}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="job-board" id="job-board" />
                          <Label htmlFor="job-board">Job Board</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="company-website" id="company-website" />
                          <Label htmlFor="company-website">Company Website</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="referral" id="referral" />
                          <Label htmlFor="referral">Employee Referral</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-end">
                      <Button 
                        className="bg-zordie-600 hover:bg-zordie-700"
                        onClick={handleApplyClick}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right column - Application status */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Application Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeUploaded ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">Resume:</p>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" /> Uploaded
                      </Badge>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 mb-2">Match Score:</p>
                      <div className="relative pt-1">
                        <div className="flex items-center justify-between mb-1">
                          <div>
                            <span className="text-xs font-semibold inline-block text-zordie-800">
                              {applicationScore}%
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                          <div
                            style={{ width: `${applicationScore}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-zordie-600"
                          ></div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {applicationScore && applicationScore >= 85
                          ? "Excellent match for this position"
                          : applicationScore && applicationScore >= 70
                          ? "Good match for this position"
                          : "Moderate match for this position"}
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <p className="text-gray-700 mb-2">Skill Match:</p>
                      <ul className="space-y-2">
                        {jobData.skills.slice(0, 4).map((skill, index) => (
                          <li key={index} className="flex items-center justify-between">
                            <span className="text-sm">{skill}</span>
                            <span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded">
                              {Math.floor(Math.random() * 31) + 70}%
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <FileText className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-700">No resume uploaded yet</p>
                    <p className="text-sm text-gray-500">Upload your resume to see your match score</p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Apply Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-3">
                <p>• Tailor your resume to highlight relevant skills for this position</p>
                <p>• Include specific achievements with measurable results</p>
                <p>• Mention projects that demonstrate the required technical skills</p>
                <p>• Keep your cover letter concise and focused on why you're a good fit</p>
                <p>• Use keywords from the job description in your application</p>
              </CardContent>
            </Card>
            
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => navigate('/find-jobs')}
            >
              Back to Job Search
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobApplication;
