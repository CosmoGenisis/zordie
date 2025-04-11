
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How Zordie Works"
          subtitle="A simple yet powerful process for both companies and job seekers"
          align="center"
        />
        
        <Tabs defaultValue="companies" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="companies">For Companies</TabsTrigger>
              <TabsTrigger value="candidates">For Job Seekers</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="companies">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <WorkflowStep
                number={1}
                title="Create Job Post"
                description="Create your job post or let Prime AI generate it for you based on your requirements."
              />
              <WorkflowArrow />
              <WorkflowStep
                number={2}
                title="Receive Verified Applications"
                description="Get applications from candidates with verified skills, projects, and credentials."
              />
              <WorkflowArrow />
              <WorkflowStep
                number={3}
                title="AI Screening & Ranking"
                description="Prime screens and ranks candidates, schedules interviews, and communicates with candidates."
              />
              <WorkflowArrow />
              <WorkflowStep
                number={4}
                title="Review & Interview"
                description="Review AI results, conduct interviews (AI or human), and make informed decisions."
              />
              <WorkflowArrow />
              <WorkflowStep
                number={5}
                title="Hire the Best"
                description="Select and hire the most qualified and authentic candidates with confidence."
              />
            </div>
          </TabsContent>
          
          <TabsContent value="candidates">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <WorkflowStep
                number={1}
                title="Create Verified Profile"
                description="Upload your resume once and connect GitHub, LinkedIn, and projects for verification."
              />
              <WorkflowArrow />
              <WorkflowStep
                number={2}
                title="Get Verified Badge"
                description="Receive a verification badge after Zordie confirms your skills and project authenticity."
              />
              <WorkflowArrow />
              <WorkflowStep
                number={3}
                title="Apply to Matched Jobs"
                description="Apply to jobs with Prime's AI-optimized resume tailored to each position."
              />
              <WorkflowArrow />
              <WorkflowStep
                number={4}
                title="Prepare & Interview"
                description="Practice with AI interviews and prepare for company interviews with personalized insights."
              />
              <WorkflowArrow />
              <WorkflowStep
                number={5}
                title="Get Hired Faster"
                description="Stand out with verified skills and be hired based on your authentic abilities."
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface WorkflowStepProps {
  number: number;
  title: string;
  description: string;
}

const WorkflowStep = ({ number, title, description }: WorkflowStepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zordie-600 to-accent1 flex items-center justify-center text-white text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WorkflowArrow = () => {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <svg
        className="w-12 h-12 text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );
};

export default HowItWorksSection;
