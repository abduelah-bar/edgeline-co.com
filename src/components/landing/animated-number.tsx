'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { animate } from 'framer-motion';

type Props = {
  to: number;
  from?: number;
  className?: string;
  format?: (value: number) => string;
};

export default function AnimatedNumber({ to, from = 0, className, format }: Props) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const node = nodeRef.current;
    // Only run the animation when the component is in view and the node is available.
    if (inView && node) {
      const controls = animate(from, to, {
        duration: 2,
        ease: 'easeOut',
        onUpdate(value) {
          node.textContent = format ? format(value) : value.toFixed(0);
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, format]);
  
  const setRefs = (el: HTMLSpanElement | null) => {
    nodeRef.current = el;
    inViewRef(el);
  };

  // Render the initial 'from' value directly to prevent hydration mismatch.
  return <span ref={setRefs} className={className}>{format ? format(from) : from.toFixed(0)}</span>;
}
