
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DocumentButtonProps {
  type: 'create' | 'edit' | 'export';
  title: string;
}

const DocumentButton = ({ type, title }: DocumentButtonProps) => {
  const { toast } = useToast();

  const handleClick = () => {
    if (type === 'create') {
      toast({
        title: "Creating new document",
        description: `Starting ${title.toLowerCase()} creation process`
      });
      // In a real app, this would open a form or modal
    } else if (type === 'edit') {
      toast({
        title: "Edit document",
        description: `Opening ${title.toLowerCase()} editor`
      });
      // In a real app, this would open an editor
    } else {
      toast({
        title: "Exporting document",
        description: "Preparing download..."
      });
      
      // Simulate download delay
      setTimeout(() => {
        toast({
          title: "Export complete",
          description: "Your document has been exported"
        });
      }, 1500);
    }
  };

  return (
    <Button 
      variant={type === 'create' ? 'default' : 'outline'} 
      className={type === 'create' ? 'w-full' : ''}
      onClick={handleClick}
    >
      <FileText className="mr-2 h-4 w-4" />
      {title}
    </Button>
  );
};

export default DocumentButton;
