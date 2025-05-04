
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CandidateActionsProps {
  candidateId: number;
}

const CandidateActions = ({ candidateId }: CandidateActionsProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleViewCandidate = () => {
    navigate(`/candidate/${candidateId}`);
  };
  
  const handleToggleFavorite = () => {
    // In a real app, this would call an API to toggle favorite status
    toast({
      title: "Candidate starred",
      description: "Candidate has been added to your favorites"
    });
  };

  return (
    <div className="space-x-2">
      <Button size="sm" variant="outline" onClick={handleViewCandidate}>
        View
      </Button>
      <Button size="sm" variant="outline" onClick={handleToggleFavorite}>
        <Star className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CandidateActions;
