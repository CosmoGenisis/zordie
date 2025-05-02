import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Wand2, Info, AlertCircle, Loader2, Eye, PenLine } from "lucide-react";
import { JobPreview } from "@/components/jobs/JobPreview";

// Define job templates for AI generation
const jobTemplates = [
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote/Hybrid",
    jobType: "full-time",
    experience: "mid",
    salary: "₹10-15 LPA",
    description: "We are seeking a talented Frontend Developer to join our engineering team. You will be responsible for implementing visual elements that users see and interact with in our web applications. You'll work closely with our design and backend teams to create seamless, user-friendly interfaces.\n\nYour work will directly impact our product's user experience and satisfaction. The ideal candidate is passionate about responsive design, performance optimization, and creating engaging user experiences.",
    requirements: "• 3+ years of experience with modern JavaScript frameworks (React, Vue, Angular)\n• Strong proficiency in HTML5, CSS3, and responsive design\n• Experience with RESTful APIs and asynchronous request handling\n• Understanding of cross-browser compatibility issues and solutions\n• Familiarity with version control systems (Git)\n• Good understanding of SEO principles and best practices\n• Bachelor's degree in Computer Science or related field (or equivalent experience)",
    benefits: "• Competitive salary package\n• Flexible working hours and remote work options\n• Health insurance coverage\n• 401(k) matching\n• Professional development budget\n• Modern equipment and software\n• Casual work environment with team events\n• Paid time off and holidays",
    skills: "JavaScript, React, HTML5, CSS3, TypeScript, RESTful APIs, Responsive Design, Git, UI/UX, Performance Optimization",
  },
  {
    title: "AI Developer",
    department: "Data Science",
    location: "Remote/Hybrid",
    jobType: "full-time",
    experience: "mid",
    salary: "₹30,000/month",
    description: "Are you passionate about AI, machine learning, and solving real-world problems with smart tech? Join our growing team and work on exciting AI-based projects that make a difference.\n\nAs an AI Developer, you will design, develop and deploy machine learning models and contribute to our core AI products. This is an excellent opportunity for someone with strong fundamentals and hands-on experience in Python, NLP, or Computer Vision.",
    requirements: "• Bachelor's or Master's degree in Computer Science, Data Science, or a related field\n• Strong programming skills in Python\n• Experience with machine learning frameworks (TensorFlow, PyTorch)\n• Knowledge of natural language processing or computer vision\n• Ability to preprocess and analyze large datasets\n• Good understanding of model evaluation and tuning\n• Experience with version control systems (Git)",
    benefits: "• Real project exposure\n• Mentorship from experienced professionals\n• Fast growth environment\n• Flexible work schedule\n• Regular team building activities\n• Professional development opportunities\n• Health insurance\n• Paid time off",
    skills: "Python, Machine Learning, TensorFlow, PyTorch, NLP, Computer Vision, Data Analysis, Git",
  },
  {
    title: "Financial Operations Support",
    department: "Finance",
    location: "Tokyo, Japan",
    jobType: "full-time",
    experience: "entry",
    salary: "¥220,000 – ¥350,000 monthly",
    description: "You will work at an operations center providing Level 1 and Level 2 support for a global financial system. This position requires English communication skills. No prior experience is necessary - we will provide comprehensive training.\n\nThis is an excellent opportunity to start a career in financial operations with a global company in Tokyo.",
    requirements: "• Fluent English communication skills\n• Basic computer literacy\n• Ability to work in a shift-based environment\n• Strong attention to detail\n• Good problem-solving skills\n• Customer service orientation\n• Willingness to learn financial systems",
    benefits: "• Full transportation allowance\n• Social insurance (Health, Welfare Pension, Employment, Workers' Compensation)\n• Education and training programs\n• Certification incentive program\n• Two days off per week (shift-based)\n• 10 days of paid vacation granted after six months\n• Bereavement leave, maternity/paternity leave, childcare and caregiving leave",
    skills: "English, Customer Support, Problem Solving, Financial Systems, Shift Work",
  },
  {
    title: "Sustainability Coordinator",
    department: "Environmental Affairs",
    location: "Hybrid",
    jobType: "full-time",
    experience: "mid",
    salary: "Competitive",
    description: "We are looking for a dedicated Sustainability Coordinator to join our Environmental Affairs team. In this role, you will help implement and manage our organization's sustainability initiatives, track environmental performance metrics, and engage stakeholders in sustainability programs.\n\nThe ideal candidate is passionate about environmental stewardship, has experience with sustainability frameworks, and excels at collaborating across departments.",
    requirements: "• Bachelor's degree in Environmental Science, Sustainability, or related field\n• 2+ years of experience in sustainability or environmental management\n• Knowledge of environmental management systems and sustainability frameworks\n• Experience with data collection, analysis, and reporting for ESG metrics\n• Strong project management skills\n• Excellent written and verbal communication\n• Ability to engage and educate stakeholders at all levels",
    benefits: "• Hybrid work schedule\n• Comprehensive health benefits\n• Retirement savings plan with employer match\n• Professional development opportunities\n• Paid volunteer time\n• Generous PTO policy\n• Employee wellness program\n• Eco-friendly workplace initiatives",
    skills: "Environmental Management, Sustainability Reporting, Carbon Footprint Analysis, ESG, Data Analysis, Project Management, Stakeholder Engagement",
  }
];

const PostJob = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("edit");
  const [formData, setFormData] = useState({
    title: "",
    company: "Your Company",
    location: "",
    jobType: "",
    experience: "",
    salary: "",
    department: "",
    description: "",
    requirements: "",
    benefits: "",
    skills: "",
    startDate: "Immediate",
    applicationProcess: "Apply with resume and cover letter",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getRandomJobTemplate = () => {
    // If title is provided, try to find a matching template or one with similar keywords
    if (formData.title) {
      const titleLower = formData.title.toLowerCase();
      const matchingTemplates = jobTemplates.filter(template => 
        template.title.toLowerCase().includes(titleLower) || 
        titleLower.includes(template.title.toLowerCase())
      );
      
      if (matchingTemplates.length > 0) {
        return matchingTemplates[Math.floor(Math.random() * matchingTemplates.length)];
      }
    }
    
    // If department is provided, try to find a matching template
    if (formData.department) {
      const deptLower = formData.department.toLowerCase();
      const matchingTemplates = jobTemplates.filter(template => 
        template.department.toLowerCase().includes(deptLower)
      );
      
      if (matchingTemplates.length > 0) {
        return matchingTemplates[Math.floor(Math.random() * matchingTemplates.length)];
      }
    }
    
    // Otherwise, just pick a random template
    return jobTemplates[Math.floor(Math.random() * jobTemplates.length)];
  };

  const handleGenerateWithAI = () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const template = getRandomJobTemplate();
      
      setFormData({
        ...formData,
        title: formData.title || template.title,
        department: formData.department || template.department,
        location: formData.location || template.location,
        jobType: formData.jobType || template.jobType,
        experience: formData.experience || template.experience,
        salary: formData.salary || template.salary,
        description: template.description,
        requirements: template.requirements,
        benefits: template.benefits,
        skills: template.skills,
      });
      
      setIsGenerating(false);
      
      toast({
        title: "AI Generation Complete",
        description: "Job description has been generated. Feel free to edit it further."
      });
      
      // Switch to preview tab
      setActiveTab("preview");
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Job Posted Successfully",
        description: "Your job has been published and is now visible to candidates."
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Post a New Job</h1>
          <p className="text-gray-600 mt-2">
            Create a detailed job posting to attract the most qualified candidates
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit" className="flex items-center gap-2">
              <PenLine className="h-4 w-4" />
              Edit Job
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="edit" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
                <CardDescription>
                  Fill out the form below or use our AI assistant to generate content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title *</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. Frontend Developer"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="department">Department *</Label>
                      <Input
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="e.g. Engineering"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Remote, New York, NY"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jobType">Job Type *</Label>
                      <Select 
                        value={formData.jobType} 
                        onValueChange={(value) => handleSelectChange("jobType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                          <SelectItem value="internship">Internship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience Level *</Label>
                      <Select 
                        value={formData.experience} 
                        onValueChange={(value) => handleSelectChange("experience", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                          <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                          <SelectItem value="senior">Senior (5-8 years)</SelectItem>
                          <SelectItem value="lead">Lead/Manager (8+ years)</SelectItem>
                          <SelectItem value="executive">Executive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="salary">Salary Range</Label>
                      <Input
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        placeholder="e.g. ₹10-15 LPA or Competitive"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      placeholder="e.g. Immediate, June 1, 2025"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="description">Job Description *</Label>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Info className="h-4 w-4 mr-1" /> Tips
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Writing Tips</AlertDialogTitle>
                            <AlertDialogDescription>
                              <ul className="list-disc pl-4 space-y-2 text-sm">
                                <li>Be specific about day-to-day responsibilities</li>
                                <li>Use inclusive language to attract diverse candidates</li>
                                <li>Avoid jargon or industry-specific terms</li>
                                <li>Highlight growth opportunities and team culture</li>
                                <li>Keep descriptions concise and engaging</li>
                              </ul>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Close</AlertDialogCancel>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe the role, responsibilities, and ideal candidate"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Requirements *</Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="List the skills, qualifications, and experience needed"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="benefits">Benefits and Perks</Label>
                    <Textarea
                      id="benefits"
                      name="benefits"
                      value={formData.benefits}
                      onChange={handleChange}
                      placeholder="Describe the benefits, perks, and company culture"
                      rows={4}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="skills">Key Skills (comma separated)</Label>
                    <Input
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder="e.g. JavaScript, React, CSS, Communication"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="applicationProcess">Application Process</Label>
                    <Textarea
                      id="applicationProcess"
                      name="applicationProcess"
                      value={formData.applicationProcess}
                      onChange={handleChange}
                      placeholder="How should candidates apply? Any specific instructions?"
                      rows={3}
                    />
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start gap-3">
                    <div className="mt-1">
                      <AlertCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700">Verification and AI Features</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Once posted, Zordie will automatically verify candidates against your requirements and 
                        provide AI-powered insights on the best matches. Prime AI will handle initial screening 
                        and communications.
                      </p>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGenerateWithAI}
                  disabled={isGenerating}
                  className="w-full sm:w-auto"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" /> Generate with AI
                    </>
                  )}
                </Button>
                
                <div className="flex gap-4 w-full sm:w-auto">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Save as Draft
                  </Button>
                  <Button
                    type="submit"
                    className="btn-gradient w-full sm:w-auto"
                    disabled={isSubmitting}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Posting...
                      </>
                    ) : (
                      "Post Job"
                    )}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="preview">
            <Card>
              <CardHeader>
                <CardTitle>Job Post Preview</CardTitle>
                <CardDescription>
                  This is how your job posting will appear to candidates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <JobPreview job={formData} />
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveTab("edit")}
                >
                  Edit Job
                </Button>
                <Button
                  type="button"
                  className="btn-gradient"
                  disabled={isSubmitting}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Posting...
                    </>
                  ) : (
                    "Post Job"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PostJob;
