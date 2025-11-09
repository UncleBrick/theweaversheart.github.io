import { ReactNode, useEffect, useState, useRef } from 'react';

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  delay?: number;
}

export default function Section({ title, icon, children, delay = 0 }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex flex-col justify-center py-20 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
        {icon}
        <h2 className="text-4xl md:text-5xl font-serif text-amber-300">{title}</h2>
        {icon}
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
      </div>

      {children}
    </section>
  );
}
