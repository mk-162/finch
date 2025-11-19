
import React, { useState } from 'react';
import { ArrowDown, MapPin } from 'lucide-react';
import { HERO_IMAGE_URL, LOCATION } from '../constants';

const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(HERO_IMAGE_URL);
  const fallbackImage = "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2000&auto=format&fit=crop"; // High quality lawn

  return (
    <section id="hero" className="relative pt-32 pb-16 lg:min-h-screen flex items-center bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 z-10">
            <div className="flex items-center space-x-2 mb-6">
              <div className="px-3 py-1 border border-zinc-200 rounded-full bg-white">
                <span className="flex items-center text-xs font-bold uppercase tracking-wider text-zinc-500">
                  <MapPin className="w-3 h-3 mr-1 text-lime-500" />
                  {LOCATION}
                </span>
              </div>
              <div className="px-3 py-1 border border-zinc-200 rounded-full bg-lime-400">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  Available for Summer '25
                </span>
              </div>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-900 leading-[0.9] mb-8">
              MODERN <br />
              GARDEN <br />
              <span className="text-zinc-400">CRAFT.</span>
            </h1>

            <p className="text-lg text-zinc-600 mb-10 max-w-md font-medium leading-relaxed">
              Reimagining outdoor spaces in Ashtead & Mole Valley. 
              Landscaping, maintenance, and design for the modern home.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-full hover:bg-lime-500 hover:text-zinc-900 transition-all duration-300 flex items-center"
              >
                Start Project
              </button>
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-zinc-900 font-bold rounded-full border border-zinc-200 hover:border-zinc-900 transition-all duration-300"
              >
                See Work
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative w-full">
             {/* Changed aspect ratio to 4/3 to fit the landscape photo provided */}
             <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl bg-zinc-200">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400 rounded-bl-full z-20 opacity-90 mix-blend-multiply pointer-events-none"></div>
                
                <img 
                  src={imgSrc} 
                  onError={() => setImgSrc(fallbackImage)}
                  alt="Finch Banham" 
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-zinc-900/80 to-transparent">
                  <p className="text-white font-display font-bold text-2xl">Finch Banham</p>
                  <p className="text-lime-400 font-mono text-sm uppercase tracking-widest mt-1">Founder • 22 Years Old</p>
                </div>
             </div>
             
             {/* Floating badge */}
             <div className="absolute -bottom-6 -left-6 lg:bottom-8 lg:-left-8 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 max-w-xs hidden sm:block">
                <p className="font-display font-bold text-xl mb-1">Local & Trusted</p>
                <div className="flex items-center text-zinc-500 text-sm">
                  <span>Ashtead born & raised.</span>
                </div>
             </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <ArrowDown className="w-6 h-6 text-zinc-400" />
      </div>
    </section>
  );
};

export default Hero;
