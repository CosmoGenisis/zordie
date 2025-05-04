
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface CalendarScheduleButtonProps {
  type: 'schedule' | 'view';
}

const CalendarScheduleButton = ({ type }: CalendarScheduleButtonProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleClick = () => {
    if (type === 'schedule') {
      navigate('/schedule-interview');
    } else {
      navigate('/interview-calendar');
    }
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      <Calendar className="h-4 w-4 mr-2" />
      {type === 'schedule' ? 'Schedule Interview' : 'View Calendar'}
    </Button>
  );
};

export default CalendarScheduleButton;
