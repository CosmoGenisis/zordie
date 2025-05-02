
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, AlertCircle, FileText } from 'lucide-react';

interface ResumeScreeningProps {
  jobTitle: string;
  skills: string[];
  score?: number;
}

const ResumeScreening: React.FC<ResumeScreeningProps> = ({ 
  jobTitle, 
  skills,
  score 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const isComplete = score !== undefined;
  
  // Generate random skill scores for demo purposes
  const skillScores = skills.map(skill => ({
    skill,
    score: Math.floor(Math.random() * 31) + 60, // Score between 60-90
    status: Math.random() > 0.3 ? 'match' : 'partial'
  }));
  
  // Calculate overall job fit rating
  const getJobFitRating = (score: number) => {
    if (score >= 85) return { text: "Excellent", color: "text-green-600" };
    if (score >= 70) return { text: "Good", color: "text-zordie-600" };
    return { text: "Fair", color: "text-amber-600" };
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <FileText className="h-5 w-5 mr-2 text-zordie-600" />
          Resume Screening Results
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <div className="text-center py-6">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zordie-600 mx-auto"></div>
            <p className="text-sm text-gray-600 mt-3">Analyzing resume...</p>
          </div>
        ) : !isComplete ? (
          <div className="text-center py-6">
            <FileText className="h-12 w-12 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-700">No resume analysis available</p>
            <p className="text-sm text-gray-500">Upload your resume to see your match score</p>
          </div>
        ) : (
          <>
            <div>
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium">Overall Match Score</p>
                <span className="text-sm font-bold">{score}%</span>
              </div>
              <Progress value={score} className="h-2" />
              
              <div className="mt-2 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Job Fit: <span className={getJobFitRating(score).color}>{getJobFitRating(score).text}</span>
                </p>
                {score >= 80 && (
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
                {skillScores.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        {item.status === 'match' ? (
                          <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-amber-600 mr-1" />
                        )}
                        <span className="text-sm">{item.skill}</span>
                      </div>
                      <span className="text-xs font-bold">{item.score}%</span>
                    </div>
                    <Progress value={item.score} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <p className="font-medium mb-2">Key Insights</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• {score >= 80 ? 'Strong' : 'Moderate'} match for {jobTitle} position</li>
                <li>• {skillScores.filter(s => s.status === 'match').length} out of {skillScores.length} required skills identified</li>
                <li>• Experience level appears to be {score >= 75 ? 'sufficient' : 'below preferred requirements'}</li>
                {score >= 80 && <li>• Resume demonstrates relevant project experience</li>}
                {score < 70 && <li>• Consider highlighting more relevant experience</li>}
              </ul>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ResumeScreening;
