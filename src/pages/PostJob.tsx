
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
import { Wand2, Info, AlertCircle, Loader2 } from "lucide-react";

const PostJob = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerateWithAI = () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setFormData({
        ...formData,
        description: "We are seeking a talented Frontend Developer to join our engineering team. You will be responsible for implementing visual elements that users see and interact with in our web applications. You'll work closely with our design and backend teams to create seamless, user-friendly interfaces.\n\nYour work will directly impact our product's user experience and satisfaction. The ideal candidate is passionate about responsive design, performance optimization, and creating engaging user experiences.",
        requirements: "• 3+ years of experience with modern JavaScript frameworks (React, Vue, Angular)\n• Strong proficiency in HTML5, CSS3, and responsive design\n• Experience with RESTful APIs and asynchronous request handling\n• Understanding of cross-browser compatibility issues and solutions\n• Familiarity with version control systems (Git)\n• Good understanding of SEO principles and best practices\n• Bachelor's degree in Computer Science or related field (or equivalent experience)",
        benefits: "• Competitive salary package\n• Flexible working hours and remote work options\n• Health insurance coverage\n• 401(k) matching\n• Professional development budget\n• Modern equipment and software\n• Casual work environment with team events\n• Paid time off and holidays",
        skills: "JavaScript, React, HTML5, CSS3, TypeScript, RESTful APIs, Responsive Design, Git, UI/UX, Performance Optimization"
      });
      
      setIsGenerating(false);
      
      toast({
        title: "AI Generation Complete",
        description: "Job description has been generated. Feel free to edit it further."
      });
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
                onClick={handleSubmit}
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
      </div>
    </Layout>
  );
};

export default PostJob;
