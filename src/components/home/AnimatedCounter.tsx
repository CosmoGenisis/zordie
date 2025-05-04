
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });
  const countingStartedRef = useRef(false);

  useEffect(() => {
    if (isInView && !countingStartedRef.current) {
      countingStartedRef.current = true;
      let startTime: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={countRef} className={className}>
      {prefix}
      {count.toLocaleString(undefined, { maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
