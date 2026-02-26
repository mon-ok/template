import React from 'react';
import Hero from '../components/sections/Hero';
import Programs from '../components/sections/Programs';
import HumanElement from '../components/sections/HumanElement';
import Footer from '../components/sections/Footer';

const modernImages = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop',
];

const ModernPage: React.FC = () => {
  return (
    <main style={{
      '--section-bg': '#c0432a',
      '--foreground': '#faf7f2',
    } as React.CSSProperties}>
      <Hero
        layout="split"
        title="Create, Collaborate, Innovate"
        subtitle="The platform for modern teams. Bring your ideas to life with our cutting-edge tools and services."
        ctaText="Get Started Free"
        ctaLink="#"
        images={modernImages}
      />
      <Programs
        inverted
        layout="scrollable"
        title="Explore Our Programs"
        description="A new way to learn and grow. Our programs are designed for the digital age."
        programs={[
          { icon: 'Briefcase', name: 'Digital Accelerator', details: 'Fast-track your digital transformation.' },
          { icon: 'BarChart', name: 'Growth Marketing', details: 'Data-driven strategies for user acquisition.' },
          { icon: 'Users', name: 'Community Building', details: 'Build and engage your audience.' },
          { icon: 'Briefcase', name: 'Product Design Sprint', details: 'From idea to prototype in 5 days.' },
        ]}
      />
      <HumanElement
        layout="testimonials"
        title="What Our Clients Say"
        items={[
            { type: 'testimonial', quote: 'This platform transformed our workflow.', author: 'Alex Johnson', authorRole: 'Product Manager, TechCorp', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop' },
            { type: 'testimonial', quote: 'A game-changer for remote collaboration.', author: 'Maria Garcia', authorRole: 'Lead Designer, Creative LLC', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
        ]}
      />
      <HumanElement
        inverted
        layout="team-grid"
        title="Meet the Innovators"
        items={[
          { type: 'team', name: 'Leo Chen', role: 'Lead Engineer', bio: '', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=128&h=128&fit=crop' },
          { type: 'team', name: 'Sara Khan', role: 'Head of Product', bio: '', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop' },
          { type: 'team', name: 'David Lee', role: 'UX Research Lead', bio: '', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop' },
          { type: 'team', name: 'Emily White', role: 'Marketing Director', bio: '', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&fit=crop' },
        ]}
      />
      <Footer />
    </main>
  );
};

export default ModernPage;
