
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Video } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface InterviewActionsProps {
  interviewType: 'Live' | 'AI';
  interviewStatus: 'Scheduled' | 'Completed' | 'In Progress';
  interviewId: string;
}

const InterviewActions = ({ interviewType, interviewStatus, interviewId }: InterviewActionsProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleJoinInterview = () => {
    if (interviewType === 'Live') {
      // In a real app, this would connect to a video conferencing API
      toast({
        title: "Joining interview",
        description: "Connecting to video conference..."
      });
      
      // Simulate connection delay
      setTimeout(() => {
        window.open('https://example.com/video-conference/' + interviewId, '_blank');
      }, 1500);
    } else {
      // Navigate to AI video interview
      navigate('/ai-video-interview');
    }
  };
  
  const handleViewInterview = () => {
    if (interviewStatus === 'Completed') {
      navigate(`/interview-results/${interviewId}`);
    }
  };

  if (interviewStatus === 'Scheduled') {
    return (
      <Button size="sm" variant="outline" onClick={handleJoinInterview}>
        {interviewType === 'Live' ? "Join" : "Start"}
      </Button>
    );
  }
  
  if (interviewStatus === 'Completed') {
    return (
      <Button size="sm" variant="outline" onClick={handleViewInterview}>
        <FileText className="h-4 w-4 mr-2" />
        View
      </Button>
    );
  }
  
  if (interviewStatus === 'In Progress') {
    return (
      <Button size="sm" variant="outline" disabled>
        In Progress
      </Button>
    );
  }
  
  return null;
};

export default InterviewActions;
