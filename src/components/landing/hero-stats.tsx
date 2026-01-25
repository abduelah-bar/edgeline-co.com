'use client';
import { useState, useEffect } from 'react';

const useAnimatedCounter = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return count;
};

interface StatCardProps {
  value: number;
  label: string;
}

function StatCard({ value, label }: StatCardProps) {
  const animatedValue = useAnimatedCounter(value);

  return (
    <div className="rounded-lg bg-card/50 backdrop-blur-sm p-6 text-center shadow-lg border border-border/20">
      <p className="text-4xl md:text-5xl font-bold text-primary">
        {animatedValue.toLocaleString()}+
      </p>
      <p className="mt-2 text-sm md:text-base text-muted-foreground">{label}</p>
    </div>
  );
}

export default function HeroStats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            <StatCard value={138} label="Projects Completed" />
            <StatCard value={4283} label="Happy Clients" />
        </div>
    );
}
