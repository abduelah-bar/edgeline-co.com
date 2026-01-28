'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

const animationVariants: Variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hidden: { opacity: 0, y: 30 },
};

export function AnimatedWrapper({ children, className, delay = 0, threshold = 0.1 }: AnimatedWrapperProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants: Variants = {
    visible: { ...animationVariants.visible, transition: { ...animationVariants.visible.transition, delay } },
    hidden: animationVariants.hidden,
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
