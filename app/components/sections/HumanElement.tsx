import React from 'react';
import Image from 'next/image';

interface TeamMember {
  type: 'team';
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Testimonial {
  type: 'testimonial';
  quote: string;
  author: string;
  authorRole: string;
  avatar: string;
}

type HumanElementItem = TeamMember | Testimonial;

interface HumanElementProps {
  title: string;
  items: HumanElementItem[];
  layout: 'team-formal' | 'team-grid' | 'testimonials';
  inverted?: boolean;
}

const HumanElement: React.FC<HumanElementProps> = ({ title, items, layout, inverted = false }) => {
  const renderItem = (item: HumanElementItem) => {
    if (layout === 'team-formal' && item.type === 'team') {
      return (
        <div className="flex items-center gap-6">
          <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg object-cover" />
          <div>
            <h3 className="text-xl font-bold" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>{item.name}</h3>
            <p className="text-md opacity-70" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>{item.role}</p>
            <p className="text-sm mt-1 opacity-80" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>{item.bio}</p>
          </div>
        </div>
      );
    }
    if (layout === 'team-grid' && item.type === 'team') {
        return (
            <div className="text-center">
                <Image src={item.image} alt={item.name} width={128} height={128} className="rounded-full object-cover mx-auto mb-4 border-4" style={{ borderColor: inverted ? 'var(--section-bg)' : 'var(--foreground)' }} />
                <h3 className="text-xl font-bold" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>{item.name}</h3>
                <p className="text-md opacity-70" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>{item.role}</p>
            </div>
        );
    }
    if (layout === 'testimonials' && item.type === 'testimonial') {
      return (
        <blockquote className="p-6 rounded-lg" style={{ backgroundColor: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>
            <p className="text-lg italic" style={{ color: inverted ? 'var(--foreground)' : 'var(--section-bg)' }}>"{item.quote}"</p>
            <footer className="mt-4 flex items-center gap-4">
                <Image src={item.avatar} alt={item.author} width={48} height={48} className="rounded-full object-cover" />
                <div>
                    <p className="font-bold" style={{ color: inverted ? 'var(--foreground)' : 'var(--section-bg)' }}>{item.author}</p>
                    <p className="text-sm opacity-70" style={{ color: inverted ? 'var(--foreground)' : 'var(--section-bg)' }}>{item.authorRole}</p>
                </div>
            </footer>
        </blockquote>
      );
    }
    return null;
  };

  const getGridCols = () => {
      switch (layout) {
          case 'team-grid':
              return 'grid-cols-2 md:grid-cols-4';
          case 'testimonials':
              return 'grid-cols-1 md:grid-cols-2';
          default:
              return '';
      }
  }

  return (
    <section 
      className="w-full py-12 md:py-24 lg:py-32"
      style={{
        backgroundColor: inverted ? 'var(--foreground)' : 'var(--section-bg)',
      }}
    >
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-5xl" style={{ color: inverted ? 'var(--section-bg)' : 'var(--foreground)' }}>{title}</h2>
        <div className={`grid ${getGridCols()} gap-8 max-w-5xl mx-auto`}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {renderItem(item)}
                </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HumanElement;
