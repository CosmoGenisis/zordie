
import React from 'react';
import { Link } from 'react-router-dom';

interface ZordieLogoProps {
  variant?: 'default' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

const ZordieLogo: React.FC<ZordieLogoProps> = ({ 
  variant = 'default', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };
  
  const variantClasses = {
    default: 'text-zordie-700',
    light: 'text-white',
  };

  return (
    <Link to="/" className="flex-shrink-0 flex items-center">
      <span className={`font-bold ${sizeClasses[size]} ${variantClasses[variant]}`}>
        Zordie
        <span className="ml-1 text-accent1">AI</span>
      </span>
    </Link>
  );
};

export default ZordieLogo;
