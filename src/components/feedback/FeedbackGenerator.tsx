
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileEdit, CheckCircle, User, Briefcase, Star, AlertCircle, Brain } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';

interface FeedbackGeneratorProps {
  candidateName?: string;
  position?: string;
  interviewDate?: string;
}

const FeedbackGenerator: React.FC<FeedbackGeneratorProps> = ({
  candidateName = 'John Smith',
  position = 'Frontend Developer',
  interviewDate = 'May 2, 2025'
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [feedback, setFeedback] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const generateFeedback = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate API call to AI service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock feedback data
      const feedbackData = {
        overview: {
          rating: 4,
          summary: "John demonstrates strong technical skills and problem-solving abilities. His experience with React and TypeScript align well with our requirements. He showed good communication skills and answered most technical questions correctly, though there were some gaps in system design knowledge.",
          recommendation: "Recommended for next round"
        },
        technical: {
          overall: 85,
          skills: [
            { name: "React", score: 90, notes: "Demonstrated deep knowledge of React hooks and performance optimization" },
            { name: "TypeScript", score: 88, notes: "Comfortable with TypeScript, explained generics and utility types well" },
            { name: "CSS/SCSS", score: 75, notes: "Adequate styling knowledge but could improve on responsive design patterns" },
            { name: "System Design", score: 65, notes: "Basic understanding but struggled with scalability questions" }
          ]
        },
        soft: {
          overall: 82,
          skills: [
            { name: "Communication", score: 88, notes: "Articulate and clear in explaining complex concepts" },
            { name: "Problem Solving", score: 85, notes: "Methodical approach to breaking down problems" },
            { name: "Teamwork", score: 80, notes: "Shared good examples of past collaboration" },
            { name: "Adaptability", score: 75, notes: "Some hesitation when discussing rapid changes in requirements" }
          ]
        },
        cultural: {
          overall: 80,
          alignment: "Good",
          notes: "John's values of continuous learning and collaboration align well with our company culture. He demonstrated genuine interest in our mission and showed enthusiasm about making an impact in our industry.",
          strengths: [
            "Values align with company mission",
            "Shows curiosity and willingness to learn",
            "Collaborative mindset"
          ],
          concerns: [
            "May need support adjusting to fast-paced environment"
          ]
        }
      };
      
      setFeedback(feedbackData);
      toast({
        title: "Feedback generated",
        description: "AI feedback has been generated based on interview data"
      });
      
    } catch (error) {
      console.error("Error generating feedback:", error);
      toast({
        title: "Generation failed",
        description: "There was an error generating the feedback",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  // Helper to render star rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i}
        className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Brain className="h-5 w-5 mr-2 text-zordie-600" />
          AI Feedback Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!feedback ? (
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              <p>Generate comprehensive feedback for this candidate based on:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Resume and application data</li>
                <li>Interview performance</li>
                <li>Technical assessment results</li>
                <li>Cultural fit evaluation</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-md bg-gray-50 border border-gray-200">
              <h3 className="font-medium">Candidate Information</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <p className="text-xs text-gray-500">Name</p>
                  <p className="text-sm">{candidateName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Position</p>
                  <p className="text-sm">{position}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Interview Date</p>
                  <p className="text-sm">{interviewDate}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={generateFeedback} 
                disabled={isGenerating}
                className="btn-gradient w-full sm:w-auto"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>Generate Comprehensive Feedback</>
                )}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">{candidateName}</h3>
                  <p className="text-sm text-gray-600">{position} • {interviewDate}</p>
                </div>
                <div className="flex items-center">
                  {renderStars(feedback.overview.rating)}
                </div>
              </div>
              
              <div className="mt-4 p-3 rounded-md bg-gray-50 border border-gray-100">
                <p className="text-sm italic">"{feedback.overview.summary}"</p>
                <div className="mt-2 flex items-center">
                  <Badge color={feedback.overview.recommendation.includes("Recommended") ? "green" : "yellow"}>
                    {feedback.overview.recommendation}
                  </Badge>
                </div>
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                <TabsTrigger value="cultural">Cultural Fit</TabsTrigger>
              </TabsList>
              
              <TabsContent value="technical" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Technical Assessment</h3>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{feedback.technical.overall}%</p>
                    <p className="text-xs text-gray-500">Overall Score</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  {feedback.technical.skills.map((skill: any, index: number) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">{skill.name}</p>
                        <p className="text-sm font-medium">{skill.score}%</p>
                      </div>
                      <Progress value={skill.score} className="h-2" />
                      <p className="text-xs text-gray-600">{skill.notes}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="soft" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Soft Skills Assessment</h3>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{feedback.soft.overall}%</p>
                    <p className="text-xs text-gray-500">Overall Score</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  {feedback.soft.skills.map((skill: any, index: number) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">{skill.name}</p>
                        <p className="text-sm font-medium">{skill.score}%</p>
                      </div>
                      <Progress value={skill.score} className="h-2" />
                      <p className="text-xs text-gray-600">{skill.notes}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cultural" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Cultural Fit Assessment</h3>
                  <div className="flex items-center">
                    <Badge color={
                      feedback.cultural.alignment === "Excellent" ? "green" :
                      feedback.cultural.alignment === "Good" ? "blue" : 
                      "yellow"
                    }>
                      {feedback.cultural.alignment} Fit
                    </Badge>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <p className="text-sm">{feedback.cultural.notes}</p>
                  
                  <div>
                    <p className="text-sm font-medium mb-1">Strengths</p>
                    <ul className="text-sm space-y-1">
                      {feedback.cultural.strengths.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {feedback.cultural.concerns.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-1">Areas for Consideration</p>
                      <ul className="text-sm space-y-1">
                        {feedback.cultural.concerns.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-amber-600 mr-1 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
      {feedback && (
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setFeedback(null)}>
            Generate New
          </Button>
          <Button>
            <FileEdit className="h-4 w-4 mr-2" />
            Save & Send
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

// Helper component for badges
const Badge = ({ children, color }: { children: React.ReactNode; color: string }) => {
  const colorClasses = {
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    yellow: "bg-amber-100 text-amber-800",
    red: "bg-red-100 text-red-800",
    gray: "bg-gray-100 text-gray-800",
  }[color] || "bg-gray-100 text-gray-800";
  
  return (
    <span className={`text-xs font-medium px-2 py-1 rounded-full ${colorClasses}`}>
      {children}
    </span>
  );
};

export default FeedbackGenerator;
