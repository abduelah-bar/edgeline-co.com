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
    if (inView) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(from, to, {
          duration: 2,
          ease: 'easeOut',
          onUpdate(value) {
            node.textContent = format ? format(value) : value.toFixed(0);
          },
        });
        return () => controls.stop();
      }
    } else {
        const node = nodeRef.current;
        if(node) {
            node.textContent = format ? format(from) : from.toFixed(0);
        }
    }
  }, [inView, from, to, format]);
  
  const setRefs = (el: HTMLSpanElement | null) => {
    nodeRef.current = el;
    inViewRef(el);
  };

  return <span ref={setRefs} className={className} />;
}
