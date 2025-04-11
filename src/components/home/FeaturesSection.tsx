
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, Shield, BarChart, Clock, Bot, 
  FileCheck, Video, MessageSquare, Github
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="AI-Powered Platform for Trustworthy Hiring"
          subtitle="Discover how Zordie transforms the hiring process with verification and intelligence"
          align="center"
        />
        
        <Tabs defaultValue="companies" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="companies">For Companies</TabsTrigger>
              <TabsTrigger value="candidates">For Job Seekers</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="companies">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Shield className="h-7 w-7 text-zordie-600" />}
                title="Verified Candidates" 
                description="Only interact with candidates who have verified skills, projects and credentials. No more fake resumes."
              />
              <FeatureCard 
                icon={<Bot className="h-7 w-7 text-zordie-600" />}
                title="AI Resume Screening" 
                description="Prime AI automatically ranks and scores resumes based on job requirements, saving hours of manual review."
              />
              <FeatureCard 
                icon={<Video className="h-7 w-7 text-zordie-600" />}
                title="AI Video Interviews" 
                description="Automated video interviews with real-time AI scoring and feedback to efficiently shortlist candidates."
              />
              <FeatureCard 
                icon={<MessageSquare className="h-7 w-7 text-zordie-600" />}
                title="Automated Communication" 
                description="Prime handles scheduling, reminders, and follow-up messages, keeping candidates informed every step of the way."
              />
              <FeatureCard 
                icon={<BarChart className="h-7 w-7 text-zordie-600" />}
                title="Candidate Leaderboard" 
                description="Real-time ranking of candidates with transparency into verification scores and skill assessments."
              />
              <FeatureCard 
                icon={<Clock className="h-7 w-7 text-zordie-600" />}
                title="Time & Cost Savings" 
                description="Reduce hiring time by up to 73% and cut costs by eliminating manual screening and verification."
              />
            </div>
          </TabsContent>
          
          <TabsContent value="candidates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<FileCheck className="h-7 w-7 text-zordie-600" />}
                title="Smart Resume Upload" 
                description="Upload once and let AI optimize your resume for each job application to maximize your chances."
              />
              <FeatureCard 
                icon={<Github className="h-7 w-7 text-zordie-600" />}
                title="Project Verification" 
                description="Link GitHub, LinkedIn and projects to verify your skills and stand out with a verification badge."
              />
              <FeatureCard 
                icon={<Users className="h-7 w-7 text-zordie-600" />}
                title="AI Job Matching" 
                description="Get matched with jobs that fit your verified skills and experience, not just keyword matches."
              />
              <FeatureCard 
                icon={<Video className="h-7 w-7 text-zordie-600" />}
                title="Practice Interviews" 
                description="Prepare with AI-powered practice interviews tailored to your target roles and get instant feedback."
              />
              <FeatureCard 
                icon={<BarChart className="h-7 w-7 text-zordie-600" />}
                title="Verified Profile Badge" 
                description="Earn a verification badge to stand out and get noticed by top companies looking for authentic talent."
              />
              <FeatureCard 
                icon={<BarChart className="h-7 w-7 text-zordie-600" />}
                title="Application Analytics" 
                description="Track your application status, leaderboard position, and get insights on improving your chances."
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="feature-card">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesSection;
