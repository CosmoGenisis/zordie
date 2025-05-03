
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, AlertCircle, Upload, Brain } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import ResumeUploader from './ResumeUploader';

interface ResumeScoreProps {
  jobTitle?: string;
  jobDescription?: string;
}

const ResumeScorer: React.FC<ResumeScoreProps> = ({ jobTitle = '', jobDescription = '' }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzeComplete, setAnalyzeComplete] = useState(false);
  const [resumeData, setResumeData] = useState<any>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [scoreData, setScoreData] = useState<any>({
    overallScore: 0,
    skills: [],
    insights: [],
    recommendations: []
  });

  const handleFileUpload = (file: File) => {
    setResumeFile(file);
    setAnalyzeComplete(false);
  };

  const analyzeResume = async () => {
    if (!resumeFile) {
      toast({
        title: "No resume selected",
        description: "Please upload a resume first",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);

    try {
      // In a real implementation, we would send the resume to an API for analysis
      // For demo purposes, we'll simulate the API response with mock data
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call

      // Simulate response data from AI analysis
      const score = Math.floor(Math.random() * 31) + 60; // Score between 60-90
      
      const skills = [
        { name: "React", score: Math.floor(Math.random() * 31) + 60, matched: Math.random() > 0.3 },
        { name: "TypeScript", score: Math.floor(Math.random() * 31) + 60, matched: Math.random() > 0.3 },
        { name: "UI/UX Design", score: Math.floor(Math.random() * 31) + 60, matched: Math.random() > 0.3 },
        { name: "Project Management", score: Math.floor(Math.random() * 31) + 60, matched: Math.random() > 0.3 },
        { name: "Communication", score: Math.floor(Math.random() * 31) + 60, matched: Math.random() > 0.3 },
      ];

      const insights = [
        `${score >= 80 ? 'Strong' : 'Moderate'} match for ${jobTitle || 'this position'}`,
        `${skills.filter(s => s.matched).length} out of ${skills.length} required skills identified`,
        `Experience level appears to be ${score >= 75 ? 'sufficient' : 'below preferred requirements'}`,
      ];

      if (score >= 80) insights.push("Resume demonstrates relevant project experience");
      if (score < 70) insights.push("Consider highlighting more relevant experience");

      const recommendations = [
        "Schedule technical interview to validate skills",
        "Ask for portfolio examples during interview",
        "Verify proficiency in technical skills through coding assessment",
      ];

      setScoreData({
        overallScore: score,
        skills,
        insights,
        recommendations
      });

      setAnalyzeComplete(true);
      
      toast({
        title: "Resume analysis complete",
        description: "Resume has been analyzed against the job requirements"
      });
    } catch (error) {
      console.error("Error analyzing resume:", error);
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing the resume",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getJobFitRating = (score: number) => {
    if (score >= 85) return { text: "Excellent", color: "text-green-600" };
    if (score >= 70) return { text: "Good", color: "text-zordie-600" };
    return { text: "Fair", color: "text-amber-600" };
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Brain className="h-5 w-5 mr-2 text-zordie-600" />
          AI Resume Scorer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!analyzeComplete ? (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Upload a resume to analyze and score against job requirements
            </p>
            <ResumeUploader onFileSelected={handleFileUpload} />
            
            {resumeFile && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-gray-600" />
                  <span className="text-sm truncate max-w-[200px]">
                    {resumeFile.name}
                  </span>
                </div>
                <Button 
                  onClick={analyzeResume}
                  disabled={isAnalyzing}
                  className="btn-gradient"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>Score Resume</>
                  )}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium">Overall Match Score</p>
                <span className="text-sm font-bold">{scoreData.overallScore}%</span>
              </div>
              <Progress value={scoreData.overallScore} className="h-2" />
              
              <div className="mt-2 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Job Fit: <span className={getJobFitRating(scoreData.overallScore).color}>
                    {getJobFitRating(scoreData.overallScore).text}
                  </span>
                </p>
                {scoreData.overallScore >= 80 && (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                    Recommended
                  </Badge>
                )}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <p className="font-medium mb-3">Skills Assessment</p>
              <div className="space-y-3">
                {scoreData.skills.map((skill: any, index: number) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        {skill.matched ? (
                          <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-amber-600 mr-1" />
                        )}
                        <span className="text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold">{skill.score}%</span>
                    </div>
                    <Progress value={skill.score} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <p className="font-medium mb-2">Key Insights</p>
              <ul className="text-sm space-y-2 text-gray-700">
                {scoreData.insights.map((insight: string, idx: number) => (
                  <li key={idx}>• {insight}</li>
                ))}
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <p className="font-medium mb-2">Recommendations</p>
              <ul className="text-sm space-y-2 text-gray-700">
                {scoreData.recommendations.map((rec: string, idx: number) => (
                  <li key={idx}>• {rec}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button variant="outline" onClick={() => setAnalyzeComplete(false)}>
                Upload New Resume
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResumeScorer;
