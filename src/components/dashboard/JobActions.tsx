
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface JobActionsProps {
  jobId: number;
}

const JobActions = ({ jobId }: JobActionsProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEditJob = () => {
    navigate(`/edit-job/${jobId}`);
  };
  
  const handleJobAnalytics = () => {
    navigate(`/job-analytics/${jobId}`);
  };

  return (
    <div className="space-x-2">
      <Button size="sm" variant="outline" onClick={handleEditJob}>
        Edit
      </Button>
      <Button size="sm" variant="outline" onClick={handleJobAnalytics}>
        Analytics
      </Button>
    </div>
  );
};

export default JobActions;
