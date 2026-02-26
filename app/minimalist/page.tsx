import React from 'react';
import Hero from '../components/sections/Hero';
import Programs from '../components/sections/Programs';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import HumanElement from '../components/sections/HumanElement';
import Footer from '../components/sections/Footer';

const minimalistImages = [
  'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&h=600&fit=crop',
];

const MinimalistPage: React.FC = () => {
  return (
    <main style={{
      '--section-bg': '#2e3d4f',
      '--foreground': '#faf7f2',
    } as React.CSSProperties}>
      <Hero
        layout="stack"
        title="Simplicity is the Ultimate Sophistication"
        subtitle="We design elegant solutions for complex problems. Clean, intuitive, and powerful."
        ctaText="Explore Our Work"
        ctaLink="#"
        images={minimalistImages}
      />
      <WhyChooseUs
        inverted
        layout="simple"
        title="Less, but Better"
        features={[
            { icon: 'Shield', name: 'Secure by Design', description: 'Robust security is built into the core of our products.' },
            { icon: 'Zap', name: 'Blazing Fast', description: 'Optimized for performance and a seamless user experience.' },
            { icon: 'CheckCircle', name: 'Focus on Quality', description: 'We believe in quality over quantity, in everything we do.' },
        ]}
      />
       <Programs
        layout="grid"
        title="Our Capabilities"
        description="We offer a focused set of services to deliver maximum impact with precision."
        programs={[
          { icon: 'Briefcase', name: 'UX/UI Design', details: 'Creating beautiful and intuitive user interfaces.' },
          { icon: 'BarChart', name: 'Performance Marketing', details: 'Targeted campaigns that deliver measurable results.' },
          { icon: 'Users', name: 'Brand Identity', details: 'Crafting a unique and memorable brand story.' },
        ]}
      />
      <HumanElement
        inverted
        layout="testimonials"
        title="Trusted by Visionaries"
        items={[
            { type: 'testimonial', quote: 'The most elegant and effective solution we have ever used.', author: 'Sophie Dubois', authorRole: 'Founder, Artisan Co.', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop' },
            { type: 'testimonial', quote: 'Their minimalist approach to a complex problem was refreshing.', author: 'Kenji Tanaka', authorRole: 'CEO, Future Systems', avatar: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop' },
        ]}
      />
      <Footer />
    </main>
  );
};

export default MinimalistPage;
