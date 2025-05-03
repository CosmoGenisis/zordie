
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Video, FileText, Brain, MessageSquare, User, Star, Download } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';

interface AIInterviewAnalyzerProps {
  candidateName?: string;
  position?: string;
  interviewDate?: string;
  interviewDuration?: string;
  interviewId?: string;
}

const AIInterviewAnalyzer: React.FC<AIInterviewAnalyzerProps> = ({
  candidateName = 'Sarah Johnson',
  position = 'UX Designer',
  interviewDate = 'May 3, 2025',
  interviewDuration = '32 minutes',
  interviewId = 'INT-2345'
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('summary');
  
  const analyzeInterview = async () => {
    setIsAnalyzing(true);
    
    try {
      // Simulate API call to AI service
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Mock analysis data
      const analysisData = {
        summary: {
          overallScore: 87,
          technicalScore: 85,
          personalityScore: 89,
          culturalScore: 86,
          recommendation: "Strong Candidate",
          keyObservations: [
            "Demonstrated excellent understanding of UX principles",
            "Strong portfolio with relevant examples",
            "Highly articulate about design process and decisions",
            "Experience aligns well with our current needs"
          ]
        },
        technical: {
          skills: [
            { name: "UX Research", score: 90, notes: "Excellent understanding of user research methodologies" },
            { name: "UI Design", score: 88, notes: "Strong visual design skills with attention to detail" },
            { name: "Prototyping", score: 85, notes: "Proficient with industry-standard tools" },
            { name: "Information Architecture", score: 82, notes: "Good knowledge of organizing content effectively" },
            { name: "Accessibility", score: 79, notes: "Demonstrated awareness but could develop deeper expertise" }
          ],
          strengths: [
            "User-centered approach to design problems",
            "Strong portfolio with measurable results",
            "Excellent knowledge of design trends and best practices"
          ],
          weaknesses: [
            "Limited experience with enterprise-scale applications",
            "Could improve knowledge of front-end development concepts"
          ]
        },
        psychometric: {
          traits: [
            { trait: "Openness", score: 85, description: "Creative, curious and open to new experiences" },
            { trait: "Conscientiousness", score: 90, description: "Organized, responsible and detail-oriented" },
            { trait: "Extraversion", score: 75, description: "Balanced between social engagement and focused work" },
            { trait: "Agreeableness", score: 88, description: "Cooperative, empathetic and team-oriented" },
            { trait: "Emotional Stability", score: 82, description: "Generally calm under pressure with good stress management" }
          ],
          workStyle: "Collaborative problem-solver who values both independent thinking and team input. Shows high attention to detail and user empathy.",
          leadershipStyle: "Leads through vision-setting and enabling others rather than direct command. Likely to thrive in collaborative environments.",
        },
        cultural: {
          fit: "Strong",
          alignment: 85,
          values: [
            { value: "Innovation", score: 90, notes: "Highly aligned with our focus on creative solutions" },
            { value: "Collaboration", score: 88, notes: "Values team input and cross-functional work" },
            { value: "User-Focus", score: 92, notes: "Strongly aligned with our user-first philosophy" },
            { value: "Quality", score: 85, notes: "Demonstrates commitment to excellence in work" }
          ],
          notes: "Sarah demonstrates strong alignment with our company values, particularly in her focus on user-centered design and collaborative approach. Her passion for creating accessible, inclusive digital experiences resonates with our mission."
        },
        transcript: [
          { speaker: "Interviewer", text: "Can you walk me through your design process for the mobile app project in your portfolio?" },
          { speaker: "Sarah", text: "Absolutely. I start every project with a discovery phase focused on understanding the user needs and business requirements. For this particular app, I conducted user interviews with 8 potential users to understand their pain points and goals..." },
          { speaker: "Interviewer", text: "How do you handle feedback on your designs, especially when it contradicts your own vision?" },
          { speaker: "Sarah", text: "That's a great question. I believe feedback is essential to the design process, even when it challenges my initial ideas. I try to approach feedback with an open mind and focus on the problem we're trying to solve rather than becoming attached to my solution..." },
          // More transcript entries would be here
        ]
      };
      
      setAnalysis(analysisData);
      toast({
        title: "Analysis complete",
        description: "AI interview analysis has been generated"
      });
      
    } catch (error) {
      console.error("Error analyzing interview:", error);
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing the interview",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Brain className="h-5 w-5 mr-2 text-zordie-600" />
          AI Interview Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!analysis ? (
          <div className="space-y-4">
            <div className="p-4 rounded-md bg-gray-50 border border-gray-200">
              <h3 className="font-medium">Interview Information</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <p className="text-xs text-gray-500">Candidate</p>
                  <p className="text-sm">{candidateName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Position</p>
                  <p className="text-sm">{position}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Date</p>
                  <p className="text-sm">{interviewDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="text-sm">{interviewDuration}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-md bg-blue-50 border border-blue-100">
              <div className="flex items-start">
                <Video className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-800">Video Interview Ready for Analysis</p>
                  <p className="text-sm text-blue-600 mt-1">
                    This interview has been recorded and is ready for AI analysis. The analysis will include:
                  </p>
                  <ul className="text-sm text-blue-600 mt-2 space-y-1 list-disc pl-5">
                    <li>Technical skills assessment</li>
                    <li>Psychometric profile</li>
                    <li>Cultural fit evaluation</li>
                    <li>Complete transcript with insights</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={analyzeInterview} 
                disabled={isAnalyzing}
                className="btn-gradient w-full sm:w-auto"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing Interview...
                  </>
                ) : (
                  <>Generate AI Analysis</>
                )}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-medium">{candidateName}</h3>
                <p className="text-sm text-gray-600">{position} • Interview {interviewId}</p>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                  <Video className="h-4 w-4 mr-2" />
                  Watch
                </Button>
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                  <Download className="h-4 w-4 mr-2" />
                  Report
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <ScoreCard 
                title="Overall" 
                score={analysis.summary.overallScore} 
                color="text-zordie-600" 
                bgColor="bg-zordie-100"
              />
              <ScoreCard 
                title="Technical" 
                score={analysis.summary.technicalScore} 
                color="text-blue-600" 
                bgColor="bg-blue-100"
              />
              <ScoreCard 
                title="Personality" 
                score={analysis.summary.personalityScore} 
                color="text-purple-600" 
                bgColor="bg-purple-100"
              />
              <ScoreCard 
                title="Cultural" 
                score={analysis.summary.culturalScore} 
                color="text-green-600" 
                bgColor="bg-green-100"
              />
            </div>
            
            <div className="p-3 rounded-md bg-gray-50 border border-gray-100">
              <div className="flex">
                <p className="text-sm font-medium">Recommendation: </p>
                <p className="text-sm ml-1 font-bold text-green-600">{analysis.summary.recommendation}</p>
              </div>
              <div className="mt-2">
                <p className="text-xs font-medium text-gray-600 mb-1">Key Observations:</p>
                <ul className="text-xs space-y-1">
                  {analysis.summary.keyObservations.map((obs: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 bg-gray-400 rounded-full mt-1.5 mr-1.5"></span>
                      <span>{obs}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="psychometric">Psychometric</TabsTrigger>
                <TabsTrigger value="cultural">Culture Fit</TabsTrigger>
                <TabsTrigger value="transcript">Transcript</TabsTrigger>
              </TabsList>
              
              <TabsContent value="technical" className="space-y-4">
                <div className="space-y-4">
                  {analysis.technical.skills.map((skill: any, index: number) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">{skill.name}</p>
                        <p className="text-sm font-medium">{skill.score}%</p>
                      </div>
                      <Progress value={skill.score} className="h-2" />
                      <p className="text-xs text-gray-600">{skill.notes}</p>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Strengths</p>
                    <ul className="text-xs space-y-1">
                      {analysis.technical.strengths.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 bg-green-500 rounded-full mt-1.5 mr-1.5"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Areas for Growth</p>
                    <ul className="text-xs space-y-1">
                      {analysis.technical.weaknesses.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 bg-amber-500 rounded-full mt-1.5 mr-1.5"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="psychometric" className="space-y-4">
                <div className="space-y-4">
                  {analysis.psychometric.traits.map((trait: any, index: number) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">{trait.trait}</p>
                        <p className="text-sm font-medium">{trait.score}%</p>
                      </div>
                      <Progress value={trait.score} className="h-2" />
                      <p className="text-xs text-gray-600">{trait.description}</p>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Work Style</p>
                    <p className="text-sm mt-1">{analysis.psychometric.workStyle}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Leadership Approach</p>
                    <p className="text-sm mt-1">{analysis.psychometric.leadershipStyle}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="cultural" className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-medium">Cultural Alignment</h3>
                    <p className="text-sm text-gray-600">
                      Overall fit: <span className="font-medium text-green-600">{analysis.cultural.fit}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{analysis.cultural.alignment}%</p>
                    <p className="text-xs text-gray-500">Alignment Score</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {analysis.cultural.values.map((value: any, index: number) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">{value.value}</p>
                        <p className="text-sm font-medium">{value.score}%</p>
                      </div>
                      <Progress value={value.score} className="h-2" />
                      <p className="text-xs text-gray-600">{value.notes}</p>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm font-medium">Notes</p>
                  <p className="text-sm mt-1">{analysis.cultural.notes}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="transcript" className="space-y-4">
                <div className="max-h-96 overflow-y-auto space-y-4">
                  {analysis.transcript.map((entry: any, idx: number) => (
                    <div key={idx} className={`flex ${entry.speaker === "Interviewer" ? "" : "justify-end"}`}>
                      <div className={`max-w-[80%] rounded-lg p-3 ${
                        entry.speaker === "Interviewer" 
                          ? "bg-gray-100 text-gray-800" 
                          : "bg-zordie-100 text-zordie-800"
                      }`}>
                        <div className="flex items-center mb-1">
                          <User className="h-3.5 w-3.5 mr-1.5" />
                          <p className="text-xs font-medium">{entry.speaker}</p>
                        </div>
                        <p className="text-sm">{entry.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Full Transcript
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
      {analysis && (
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setAnalysis(null)}>
            Reset Analysis
          </Button>
          <Button>
            <MessageSquare className="h-4 w-4 mr-2" />
            Share with Team
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

// Helper component for score cards
const ScoreCard = ({ 
  title, 
  score, 
  color = "text-zordie-600", 
  bgColor = "bg-zordie-100" 
}: { 
  title: string;
  score: number;
  color?: string;
  bgColor?: string;
}) => {
  return (
    <div className={`${bgColor} rounded-md p-3 text-center`}>
      <p className="text-xs font-medium text-gray-600">{title}</p>
      <p className={`text-xl font-bold ${color}`}>{score}%</p>
    </div>
  );
};

export default AIInterviewAnalyzer;
