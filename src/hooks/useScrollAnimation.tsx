import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
        } else if (hasAnimated && entry.boundingClientRect.bottom < 0) {
          // Only hide if section has animated and is completely above viewport
          setIsVisible(false);
        } else if (hasAnimated && entry.boundingClientRect.top > window.innerHeight) {
          // Only hide if section has animated and is completely below viewport
          setIsVisible(false);
        }
      },
      { threshold: [0, threshold, 1] }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
};