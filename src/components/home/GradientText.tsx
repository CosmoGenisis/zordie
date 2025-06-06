
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
    primary: 'bg-gradient-to-r from-blue-custom to-orange-custom bg-clip-text text-transparent',
    secondary: 'bg-gradient-to-r from-orange-custom to-blue-dark bg-clip-text text-transparent',
    accent: 'bg-gradient-to-r from-blue-dark to-orange-custom bg-clip-text text-transparent',
    zordie: 'bg-gradient-to-r from-orange-custom via-blue-custom to-blue-dark bg-clip-text text-transparent',
    zordieCyan: 'bg-gradient-to-r from-blue-custom to-blue-dark bg-clip-text text-transparent',
    zordieReverse: 'bg-gradient-to-r from-blue-dark via-blue-custom to-orange-custom bg-clip-text text-transparent',
  };

  const animationClass = animate ? 'zordie-flow' : '';

  return (
    <span className={`${gradientClasses[gradient]} ${animationClass} ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
