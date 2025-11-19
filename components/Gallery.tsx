
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { 
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", 
    title: "Patios", 
    year: "2024" 
  },
  { 
    url: "https://images.unsplash.com/photo-1622383563227-044011358d42?q=80&w=800&auto=format&fit=crop", 
    title: "Maintenance", 
    year: "Ongoing" 
  },
  { 
    url: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=800&auto=format&fit=crop", 
    title: "Lawns", 
    year: "2023" 
  },
  { 
    url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop", 
    title: "Planting", 
    year: "2024" 
  },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            Selected Works
          </h2>
          <div className="hidden md:block text-right">
            <p className="text-zinc-400 text-sm">Ashtead • Box Hill • Leatherhead</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`group relative aspect-[4/3] overflow-hidden rounded-lg ${idx % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              <img 
                src={project.url} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                <div>
                  <p className="text-lime-400 text-xs font-mono mb-1">{project.year}</p>
                  <h3 className="font-display text-2xl font-bold uppercase">{project.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 border-t border-zinc-800 pt-8 flex justify-between items-center">
          <p className="text-zinc-500 text-sm">More on Facebook</p>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noreferrer"
            className="text-lime-400 font-bold uppercase tracking-wider text-sm hover:text-white transition-colors"
          >
            @FinchBanhamLandscapes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
