
import React from 'react';

interface WavyDividerProps {
  position?: 'top' | 'bottom';
  color?: string;
  className?: string;
  height?: string;
}

const WavyDivider: React.FC<WavyDividerProps> = ({
  position = 'bottom',
  color = 'white',
  className = '',
  height = '70px',
}) => {
  const isTop = position === 'top';
  
  return (
    <div
      className={`absolute left-0 w-full overflow-hidden ${isTop ? 'top-0' : 'bottom-0'} ${className}`}
      style={{ height }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`absolute ${isTop ? 'bottom-0' : 'top-0'} w-full h-full`}
        style={{ 
          transform: isTop ? 'rotate(180deg)' : 'rotate(0)', 
          fill: color 
        }}
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
      </svg>
    </div>
  );
};

export default WavyDivider;
