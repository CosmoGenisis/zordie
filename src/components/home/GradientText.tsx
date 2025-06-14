
import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: 'primary' | 'secondary' | 'accent' | 'rainbow';
  className?: string;
  animate?: boolean;
  delay?: number;
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  gradient = 'primary',
  className = '',
  animate = false,
  delay = 0
}) => {
  const gradientClasses = {
    primary: 'bg-blue-purple-gradient dark:bg-red-gradient bg-clip-text text-transparent',
    secondary: 'bg-gradient-to-r from-green-500 to-blue-500 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent',
    accent: 'bg-gradient-to-r from-purple-500 to-pink-500 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent',
    rainbow: 'bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-red-400 dark:via-orange-400 dark:to-yellow-400 bg-clip-text text-transparent'
  };

  return (
    <span className={`${gradientClasses[gradient]} ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
