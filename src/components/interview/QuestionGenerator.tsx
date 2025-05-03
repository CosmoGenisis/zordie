
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, MessageSquare, Brain, CheckCircle, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';

interface QuestionGeneratorProps {
  jobTitle?: string;
  jobDescription?: string;
  candidateName?: string;
  candidateResume?: string;
}

const QuestionGenerator: React.FC<QuestionGeneratorProps> = ({
  jobTitle = 'Frontend Developer',
  jobDescription = '',
  candidateName = 'Candidate',
  candidateResume = ''
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [questions, setQuestions] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('technical');
  
  const generateQuestions = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate API call to AI service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock questions data
      const questionsData = {
        technical: [
          {
            question: "Can you explain the difference between useMemo and useCallback hooks in React?",
            context: "Evaluates understanding of React performance optimization",
            followUps: [
              "In what scenarios would you choose one over the other?",
              "Can you explain dependency arrays in these hooks?"
            ]
          },
          {
            question: "Describe your experience with TypeScript and how you've used it to improve code quality.",
            context: "Assesses TypeScript knowledge and practical application",
            followUps: [
              "What TypeScript features do you find most valuable?",
              "How do you handle typing for complex state management?"
            ]
          },
          {
            question: "How would you optimize the performance of a React application that has become slow?",
            context: "Tests knowledge of React performance optimization techniques",
            followUps: [
              "What tools would you use to identify performance issues?",
              "How would you implement code splitting in a React application?"
            ]
          },
          {
            question: "Explain your approach to writing maintainable CSS for large applications.",
            context: "Evaluates CSS organization and methodologies",
            followUps: [
              "What CSS-in-JS solutions have you worked with?",
              "How do you handle theme customization?"
            ]
          },
          {
            question: "Describe how you would implement a responsive design that works across multiple device sizes.",
            context: "Tests practical responsive design knowledge",
            followUps: [
              "What breakpoints do you typically use and why?",
              "How do you test your responsive implementations?"
            ]
          }
        ],
        behavioral: [
          {
            question: "Tell me about a challenging project you worked on and how you overcame obstacles.",
            context: "Assesses problem-solving abilities and perseverance",
            followUps: [
              "What specific technical challenges did you face?",
              "How did you prioritize tasks under pressure?"
            ]
          },
          {
            question: "Describe a situation where you had to give constructive feedback to a colleague.",
            context: "Evaluates communication and interpersonal skills",
            followUps: [
              "How did they receive the feedback?",
              "Would you approach it differently next time?"
            ]
          },
          {
            question: "How do you stay updated with the latest frontend development trends?",
            context: "Assesses commitment to ongoing learning",
            followUps: [
              "What recent technology or technique have you adopted?",
              "How do you evaluate whether a new technology is worth adopting?"
            ]
          },
          {
            question: "Tell me about a time when you had to work with incomplete requirements. How did you handle it?",
            context: "Tests adaptability and communication",
            followUps: [
              "What clarifying questions did you ask?",
              "What assumptions did you make and how did you validate them?"
            ]
          }
        ],
        roleSpecific: [
          {
            question: "How would you approach building a component library that needs to be used across multiple teams?",
            context: "Tests architectural thinking for frontend systems",
            followUps: [
              "How would you document the components?",
              "How would you handle versioning and breaking changes?"
            ]
          },
          {
            question: "Describe your experience with state management solutions. Which do you prefer and why?",
            context: "Evaluates understanding of frontend architecture",
            followUps: [
              "How do you decide when to use global state vs. local state?",
              "How do you handle side effects in your state management approach?"
            ]
          },
          {
            question: "What's your approach to writing unit tests for React components?",
            context: "Assesses testing knowledge and quality assurance approach",
            followUps: [
              "What testing libraries do you prefer?",
              "How do you test components with complex state or API interactions?"
            ]
          }
        ],
        cultural: [
          {
            question: "Our team values continuous learning. How do you ensure you're constantly growing your skills?",
            context: "Assesses alignment with learning culture",
            followUps: [
              "How do you balance learning new skills with delivering on current projects?",
              "How do you share knowledge with your team?"
            ]
          },
          {
            question: "We have a collaborative environment. How do you prefer to work with designers and product managers?",
            context: "Evaluates cross-functional collaboration approach",
            followUps: [
              "How do you handle disagreements with team members?",
              "How do you provide feedback on design or product decisions?"
            ]
          },
          {
            question: "How do you prioritize tasks when working on multiple projects with competing deadlines?",
            context: "Tests time management and prioritization skills",
            followUps: [
              "How do you communicate timeline constraints to stakeholders?",
              "What tools or methods do you use to stay organized?"
            ]
          }
        ]
      };
      
      setQuestions(questionsData);
      toast({
        title: "Questions generated",
        description: "AI interview questions have been generated for this position"
      });
      
    } catch (error) {
      console.error("Error generating questions:", error);
      toast({
        title: "Generation failed",
        description: "There was an error generating the questions",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Brain className="h-5 w-5 mr-2 text-zordie-600" />
          AI Interview Question Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!questions ? (
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              <p>Generate tailored interview questions based on:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Job description requirements</li>
                <li>Candidate's resume experience</li>
                <li>Role-specific competencies</li>
                <li>Company culture alignment</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-md bg-gray-50 border border-gray-200">
              <h3 className="font-medium">Position Information</h3>
              <div className="grid grid-cols-1 gap-2 mt-2">
                <div>
                  <p className="text-xs text-gray-500">Job Title</p>
                  <p className="text-sm">{jobTitle}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Candidate</p>
                  <p className="text-sm">{candidateName}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={generateQuestions} 
                disabled={isGenerating}
                className="btn-gradient w-full sm:w-auto"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>Generate Interview Questions</>
                )}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mb-2">
              <h3 className="text-lg font-medium">Questions for {jobTitle} Interview</h3>
              <p className="text-sm text-gray-600">Candidate: {candidateName}</p>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
                <TabsTrigger value="roleSpecific">Role-specific</TabsTrigger>
                <TabsTrigger value="cultural">Cultural</TabsTrigger>
              </TabsList>
              
              <TabsContent value="technical" className="space-y-4">
                {questions.technical.map((item: any, idx: number) => (
                  <QuestionCard key={idx} question={item} index={idx + 1} />
                ))}
              </TabsContent>
              
              <TabsContent value="behavioral" className="space-y-4">
                {questions.behavioral.map((item: any, idx: number) => (
                  <QuestionCard key={idx} question={item} index={idx + 1} />
                ))}
              </TabsContent>
              
              <TabsContent value="roleSpecific" className="space-y-4">
                {questions.roleSpecific.map((item: any, idx: number) => (
                  <QuestionCard key={idx} question={item} index={idx + 1} />
                ))}
              </TabsContent>
              
              <TabsContent value="cultural" className="space-y-4">
                {questions.cultural.map((item: any, idx: number) => (
                  <QuestionCard key={idx} question={item} index={idx + 1} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
      {questions && (
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setQuestions(null)}>
            Generate New
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Save Question Set
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

// Helper component for displaying questions
const QuestionCard = ({ 
  question, 
  index 
}: { 
  question: any;
  index: number;
}) => {
  return (
    <div className="border rounded-md p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start">
        <div className="h-6 w-6 rounded-full bg-zordie-100 text-zordie-600 flex items-center justify-center text-sm font-medium flex-shrink-0">
          {index}
        </div>
        <div className="ml-3 space-y-2">
          <p className="font-medium">{question.question}</p>
          <p className="text-xs text-gray-500 italic">{question.context}</p>
          
          {question.followUps && question.followUps.length > 0 && (
            <div className="mt-2">
              <p className="text-xs font-medium text-gray-600">Follow-up questions:</p>
              <ul className="mt-1 space-y-1">
                {question.followUps.map((followUp: string, idx: number) => (
                  <li key={idx} className="text-sm flex items-start">
                    <span className="inline-block h-1.5 w-1.5 bg-gray-400 rounded-full mt-1.5 mr-1.5"></span>
                    <span>{followUp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionGenerator;
