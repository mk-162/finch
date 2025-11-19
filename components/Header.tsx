import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white/90 backdrop-blur-lg border-b border-zinc-200 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer group" 
            onClick={() => scrollTo('hero')}
          >
            <h1 className="font-display text-2xl font-bold tracking-tighter text-zinc-900 group-hover:text-lime-600 transition-colors uppercase">
              Finch<span className="text-lime-600">.</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Services', 'About', 'Gallery', 'Reviews'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 uppercase tracking-wide transition-colors"
              >
                {item}
              </button>
            ))}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="inline-flex items-center px-5 py-2 bg-zinc-900 text-white text-sm font-bold rounded-full hover:bg-lime-500 hover:text-zinc-900 transition-all duration-300"
            >
              Book Now
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-900 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full border-b border-zinc-100 h-screen">
          <div className="px-4 pt-8 pb-3 space-y-4 flex flex-col items-center">
            {['Services', 'About', 'Gallery', 'Reviews'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block text-3xl font-display font-bold text-zinc-900 hover:text-lime-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <a
               href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
               className="mt-8 inline-block px-8 py-4 bg-zinc-900 text-white font-bold rounded-full w-full text-center"
            >
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;