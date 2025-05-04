
import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'accent' | 'rainbow';
  animate?: boolean;
  delay?: number;
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = '', 
  gradient = 'primary', 
  animate = false,
  delay = 0
}) => {
  const gradientClasses = {
    primary: 'bg-gradient-to-r from-zordie-600 to-accent1',
    secondary: 'bg-gradient-to-r from-accent1 to-purple-400',
    accent: 'bg-gradient-to-r from-sky-400 to-zordie-500',
    rainbow: 'bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500'
  };

  const selectedGradient = gradientClasses[gradient];
  
  const baseClasses = `${selectedGradient} bg-clip-text text-transparent inline-block ${className}`;
  
  return animate ? (
    <motion.span
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 50
      }}
    >
      {children}
    </motion.span>
  ) : (
    <span className={baseClasses}>{children}</span>
  );
};

export default GradientText;
