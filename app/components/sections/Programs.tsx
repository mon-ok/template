import React from 'react';
import { Briefcase, BarChart, Users, LucideProps } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  Briefcase,
  BarChart,
  Users,
};

interface Program {
  icon: keyof typeof iconMap;
  name: string;
  details: string;
}

interface ProgramsProps {
  title: string;
  description: string;
  programs: Program[];
  layout: 'grid' | 'scrollable';
  inverted?: boolean;
}

const Programs: React.FC<ProgramsProps> = ({ title, description, programs, layout, inverted = false }) => {
  const ProgramCard = ({ program }: { program: Program }) => {
    const Icon = iconMap[program.icon];
    return (
      <div 
        className="group rounded-lg border p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-2"
        style={{
          backgroundColor: inverted ? 'var(--section-bg)' : 'var(--foreground)',
          borderColor: inverted ? 'var(--section-bg)' : 'transparent',
        }}
      >
        <Icon className="h-10 w-10" style={{ color: inverted ? 'var(--foreground)' : 'var(--section-bg)' }} />
        <h3 className="mt-4 text-xl font-bold" style={{ color: inverted ? 'var(--foreground)' : 'var(--section-bg)' }}>{program.name}</h3>
        <p className="mt-2 opacity-70" style={{ color: inverted ? 'var(--foreground)' : 'var(--section-bg)' }}>{program.details}</p>
      </div>
    );
  };

  return (
    <section 
      className="w-full py-12 md:py-24 lg:py-32"
      style={{
        backgroundColor: inverted ? 'var(--foreground)' : 'var(--section-bg)',
      }}
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>{title}</h2>
            <p className="max-w-[900px] opacity-80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>
              {description}
            </p>
          </div>
        </div>
        {layout === 'grid' ? (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center space-x-6 overflow-x-auto py-12 snap-x snap-mandatory">
            {programs.map((program, index) => (
               <div key={index} className="w-80 flex-shrink-0 snap-center">
                 <ProgramCard program={program} />
               </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Programs;
