import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollReveal() {
  const refs = useRef<Map<string, Element>>(new Map());
  const [visible, setVisible] = useState<Set<string>>(new Set());

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const key = (entry.target as HTMLElement).dataset.revealKey;
            if (key) setVisible(prev => new Set([...prev, key]));
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    refs.current.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const revealRef = useCallback((key: string) => (el: Element | null) => {
    if (el) {
      (el as HTMLElement).dataset.revealKey = key;
      refs.current.set(key, el);
    }
  }, []);

  const isVisible = useCallback((key: string) => visible.has(key), [visible]);

  return { revealRef, isVisible };
}

export function RevealDiv({
  id,
  children,
  className = '',
  delay = 0,
  direction = 'up',
  revealRef,
  isVisible,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
  revealRef: (key: string) => (el: Element | null) => void;
  isVisible: (key: string) => boolean;
}) {
  const vis = isVisible(id);

  const initial = {
    up: 'opacity-0 translate-y-8',
    left: 'opacity-0 -translate-x-8',
    right: 'opacity-0 translate-x-8',
    fade: 'opacity-0',
  }[direction];

  return (
    <div
      ref={revealRef(id) as React.RefCallback<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-x-0 translate-y-0' : initial} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
