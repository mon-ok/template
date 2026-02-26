import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[var(--section-bg)] text-[var(--foreground)] py-12">
      <div className="mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold">Landing Page Template</h3>
          <p className="text-sm opacity-70">Our templates carefully created for you.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Site Map</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/corporate" className="hover:underline opacity-80">Corporate</Link></li>
            <li><Link href="/modern" className="hover:underline opacity-80">Modern</Link></li>
            <li><Link href="/minimalist" className="hover:underline opacity-80">Minimalist</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Stay Connected</h3>
          <p className="text-sm opacity-70 mt-2">Subscribe to our newsletter.</p>
          <form className="mt-4 flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-[var(--foreground)] text-[var(--section-bg)] px-4 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
            />
            <button 
              type="submit"
              className="px-4 py-2 rounded-r-md font-semibold transition-colors"
              style={{
                backgroundColor: 'var(--foreground)',
                color: 'var(--section-bg)',
              }}
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="opacity-70 hover:opacity-100"><Twitter size={20} /></a>
            <a href="#" className="opacity-70 hover:opacity-100"><Linkedin size={20} /></a>
            <a href="#" className="opacity-70 hover:opacity-100"><Github size={20} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 text-center text-sm opacity-70">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
