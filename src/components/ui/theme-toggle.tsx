
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`rounded-full hover:bg-background/10 ${className || ''}`}
      aria-label={theme === 'dark' ? "Dark mode" : "Light mode"}
    >
      {theme === 'dark' ? (
        <Moon className="h-5 w-5 text-zordie-700" />
      ) : (
        <Sun className="h-5 w-5 text-zordie-700" />
      )}
    </Button>
  );
};

export default ThemeToggle;
