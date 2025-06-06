
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
    primary: 'bg-blue-cyan-gradient dark:bg-cyan-orange-gradient bg-clip-text text-transparent',
    secondary: 'bg-gradient-to-r from-brandOrange-500 to-brandBlue-500 dark:from-brandCyan-400 dark:to-brandOrange-400 bg-clip-text text-transparent',
    accent: 'bg-gradient-to-r from-brandCyan-500 to-brandOrange-500 dark:from-brandOrange-400 dark:to-brandCyan-400 bg-clip-text text-transparent',
    rainbow: 'bg-gradient-to-r from-brandBlue-600 via-brandCyan-500 to-brandOrange-500 dark:from-brandCyan-400 dark:via-brandOrange-400 dark:to-brandBlue-400 bg-clip-text text-transparent'
  };

  return (
    <span className={`${gradientClasses[gradient]} ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
