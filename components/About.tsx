
import React, { useState } from 'react';
import { PORTRAIT_PLACEHOLDER } from '../constants';

const About: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(PORTRAIT_PLACEHOLDER);
  const fallbackImage = "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=1000&auto=format&fit=crop";

  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 mb-12 lg:mb-0">
             <div className="relative">
               <div className="absolute inset-0 border-2 border-zinc-900 translate-x-4 translate-y-4 rounded-2xl"></div>
               <img 
                  src={imgSrc} 
                  onError={() => setImgSrc(fallbackImage)}
                  alt="Finch Working" 
                  className="relative w-full rounded-2xl grayscale shadow-xl bg-zinc-200"
               />
             </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-zinc-900 mb-8">
              Local Lad. <br/>
              <span className="text-zinc-400">Professional Standards.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-zinc-600 font-medium leading-relaxed">
              <p>
                I'm Finch. I'm 22, born and bred in Box Hill, currently living in Ashtead.
              </p>
              <p>
                After Ewell Castle School, I didn't want a desk job. I wanted to be outside, building things and fixing spaces. I started this company to bring a bit more energy and reliability to the local trade.
              </p>
              <p>
                I'm not a big faceless agency. When you call, you get me. I work hard, I turn up on time, and I don't leave until the job is mint.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
               <div className="border-l-2 border-lime-500 pl-6">
                  <h4 className="font-display font-bold text-xl text-zinc-900">Ewell Castle</h4>
                  <p className="text-sm text-zinc-500 uppercase tracking-wide">Alumni</p>
               </div>
               <div className="border-l-2 border-lime-500 pl-6">
                  <h4 className="font-display font-bold text-xl text-zinc-900">Ashtead</h4>
                  <p className="text-sm text-zinc-500 uppercase tracking-wide">Based</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
