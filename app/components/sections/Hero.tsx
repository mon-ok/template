import React from 'react';
import ImageCarousel from '../ui/ImageCarousel';

interface HeroProps {
  layout: 'split' | 'center' | 'stack';
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  images: string[];
}

const Hero: React.FC<HeroProps> = ({ layout, title, subtitle, ctaText, ctaLink, images }) => {
  
  const renderTextContent = (alignment: 'center' | 'left' = 'center', inverted = false) => (
    <div className={`flex flex-col space-y-6 ${alignment === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'}`}>
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:leading-[1.1] text-[var(--foreground)]">
        {title}
      </h1>
      <p className={`max-w-[700px] text-lg md:text-xl text-[var(--foreground)] opacity-80`}>
        {subtitle}
      </p>
      <a
        href={ctaLink}
        className={`inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium shadow-lg transition-all hover:scale-105 active:scale-95`}
        style={{
          backgroundColor: 'var(--foreground)',
          color: 'var(--section-bg)',
        }}
      >
        {ctaText}
      </a>
    </div>
  );

  switch (layout) {
    case 'center':
      return (
        <section className="w-full py-20 lg:py-32 bg-[var(--section-bg)]">
          <div className="container px-4 mx-auto">
            <div className="mb-16">
              {renderTextContent('center')}
            </div>

            <div className="relative max-w-5xl mx-auto h-[300px] md:h-[500px]">
              
              <div className="hidden lg:block absolute left-[-10%] top-1/2 -translate-y-1/2 w-1/3 h-[70%] z-0 transform -rotate-12 opacity-40 blur-[1px]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-[var(--foreground)]/20">
                   <img src={images[1] || images[0]} className="object-cover w-full h-full" alt="side decorative" />
                </div>
              </div>

              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] md:border-[16px] border-[var(--foreground)]/10">
                <ImageCarousel images={images} />
              </div>

              <div className="hidden lg:block absolute right-[-10%] top-1/2 -translate-y-1/2 w-1/3 h-[70%] z-0 transform rotate-12 opacity-40 blur-[1px]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-[var(--foreground)]/20">
                   <img src={images[2] || images[0]} className="object-cover w-full h-full" alt="side decorative" />
                </div>
              </div>

            </div>
          </div>
        </section>
      );

    case 'stack':
      return (
        <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="w-full h-full">
                <ImageCarousel images={images} />
             </div>
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 px-4">
            {renderTextContent('center', true)}
          </div>
        </section>
      );

    case 'split':
    default:
      return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[var(--section-bg)]">
          <div className="container mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-2 items-center">
            {renderTextContent('left')}
            <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-xl border-4 border-[var(--foreground)]/10">
              <ImageCarousel images={images} />
            </div>
          </div>
        </section>
      );
  }
};

export default Hero;