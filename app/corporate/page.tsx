import React from 'react';
import Hero from '../components/sections/Hero';
import Programs from '../components/sections/Programs';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import HumanElement from '../components/sections/HumanElement';
import Footer from '../components/sections/Footer';

const corporateImages = [
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
];

const CorporatePage: React.FC = () => {
  return (
    <main style={{
      '--section-bg': '#c9a84c',
      '--foreground': '#0d0d0d',
    } as React.CSSProperties}>
      <Hero
        layout="center"
        title="Driving Business Forward"
        subtitle="We provide innovative solutions for the modern enterprise. Our goal is to boost your productivity and success."
        ctaText="Request a Demo"
        ctaLink="#"
        images={corporateImages}
      />
      <Programs
        inverted
        layout="grid"
        title="Our Core Services"
        description="From strategy to implementation, we offer a complete suite of services to help your business grow."
        programs={[
          { icon: 'Briefcase', name: 'Strategic Consulting', details: 'Expert advice to help you navigate the market.' },
          { icon: 'BarChart', name: 'Data Analytics', details: 'Turn data into actionable insights.' },
          { icon: 'Users', name: 'Workforce Solutions', details: 'Optimize your team for peak performance.' },
        ]}
      />
      <WhyChooseUs
        layout="bento"
        title="Why Partner With Us?"
        features={[
          { icon: 'Shield', name: 'Unmatched Reliability', description: 'Our platforms boast 99.9% uptime.' },
          { icon: 'Zap', name: 'Rapid Innovation', description: 'We are constantly pushing the boundaries of what is possible.' },
          { icon: 'CheckCircle', name: 'Proven Results', description: 'Our clients see an average of 40% ROI.' },
          { icon: 'Users', name: 'Dedicated Support', description: '24/7 access to our expert support team.' },
        ]}
      />
      <HumanElement
        inverted
        layout="team-formal"
        title="Our Leadership Team"
        items={[
          { type: 'team', name: 'Jane Doe', role: 'CEO & Founder', bio: 'Visionary leader with 20+ years of experience.', image: 'https://images.unsplash.com/photo-1580852300654-034f03567d23?w=100&h=100&fit=crop' },
          { type: 'team', name: 'John Smith', role: 'Chief Technology Officer', bio: 'Expert in scalable systems and AI.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
        ]}
      />
      <Footer />
    </main>
  );
};

export default CorporatePage;
