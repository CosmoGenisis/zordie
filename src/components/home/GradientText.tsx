
import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: 'primary' | 'secondary' | 'accent' | 'zordie' | 'zordieCyan' | 'zordieReverse';
  className?: string;
  animate?: boolean;
  delay?: number;
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  gradient = 'zordie',
  className = '',
  animate = false,
  delay = 0
}) => {
  const gradientClasses = {
    primary: 'bg-blue-cyan-gradient dark:bg-cyan-orange-gradient bg-clip-text text-transparent',
    secondary: 'bg-gradient-to-r from-brandOrange-500 to-brandBlue-500 dark:from-brandCyan-400 dark:to-brandOrange-400 bg-clip-text text-transparent',
    accent: 'bg-gradient-to-r from-brandCyan-500 to-brandOrange-500 dark:from-brandOrange-400 dark:to-brandCyan-400 bg-clip-text text-transparent',
    zordie: 'bg-zordie-main dark:bg-zordie-secondary bg-clip-text text-transparent', // Orange to Blue like reference image
    zordieCyan: 'bg-zordie-blue-cyan dark:bg-zordie-secondary bg-clip-text text-transparent', // Blue to Cyan
    zordieReverse: 'bg-zordie-secondary dark:bg-zordie-main bg-clip-text text-transparent', // Cyan to Orange
  };

  const animationClass = animate ? 'zordie-flow' : '';

  return (
    <span className={`${gradientClasses[gradient]} ${animationClass} ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
