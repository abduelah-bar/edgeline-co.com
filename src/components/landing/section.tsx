import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  // any other props you want to add
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn('py-16 sm:py-20 md:py-24', className)}
      {...props}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}
