"use client";

import React, { useRef } from 'react';
import { CheckCircle, Zap, Shield, Users, LucideProps } from 'lucide-react';
import useIntersectionObserver from '@/app/lib/useIntersectionObserver';

const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  CheckCircle,
  Zap,
  Shield,
  Users,
};

interface Feature {
  icon: keyof typeof iconMap;
  name: string;
  description: string;
}

interface WhyChooseUsProps {
  title: string;
  features: Feature[];
  layout: 'bento' | 'simple';
  inverted?: boolean;
}

const FadeIn: React.FC<{ children: React.ReactNode; stagger: number }> = ({ children, stagger }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={isIntersecting ? 'fade-in-up' : 'opacity-0'}
      style={{ animationDelay: `${stagger * 100}ms` }}
    >
      {children}
    </div>
  );
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ title, features, layout, inverted = false }) => {
  return (
    <section 
      className="w-full py-12 md:py-24 lg:py-32"
      style={{
        backgroundColor: inverted ? 'var(--foreground)' : 'var(--section-bg)',
      }}
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>{title}</h2>
        </div>

        {layout === 'bento' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <FadeIn key={index} stagger={index}>
                  <div 
                    className={`rounded-xl border p-6 shadow-sm ${index === 0 || index === features.length -1 ? 'lg:col-span-2' : ''}`}
                    style={{
                      backgroundColor: inverted ? 'var(--section-bg)' : 'var(--foreground)',
                      borderColor: inverted ? 'var(--section-bg)' : 'transparent',
                    }}
                  >
                    <Icon className="h-10 w-10 mb-4" style={{ color: inverted ? 'var(--foreground)' : 'var(--section-bg)' }}/>
                    <h3 className="text-xl font-bold" style={{ color: inverted ? 'var(--foreground)' : 'var(--section-bg)' }}>{feature.name}</h3>
                    <p className="opacity-70 mt-2" style={{ color: inverted ? 'var(--foreground)' : 'var(--section-bg)' }}>{feature.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-10">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <FadeIn key={index} stagger={index}>
                  <div className="flex items-start gap-6">
                    <Icon className="h-12 w-12 flex-shrink-0 mt-1" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }} />
                    <div>
                      <h3 className="text-2xl font-bold" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>{feature.name}</h3>
                      <p className="opacity-70 mt-2 text-lg" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>{feature.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
