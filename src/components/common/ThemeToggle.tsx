
import React from 'react';
import { Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full hover:bg-background/10"
      aria-label="Light mode"
    >
      <Sun className="h-5 w-5 text-zordie-700" />
    </Button>
  );
};
