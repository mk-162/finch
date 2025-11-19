import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-600 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="font-display font-bold text-zinc-100 uppercase tracking-wider">Finch Banham.</h4>
          <p className="text-xs mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
            <Facebook className="w-5 h-5" />
            <span className="text-xs font-bold">FB</span>
          </a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
            <Instagram className="w-5 h-5" />
            <span className="text-xs font-bold">IG</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;