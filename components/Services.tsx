import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-zinc-900 uppercase">
            What We<br/>Do Best
          </h2>
          <p className="text-zinc-500 max-w-md text-right mt-4 md:mt-0">
            Comprehensive garden services tailored for the Surrey aesthetic. From rough landscaping to fine detail work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-10 hover:bg-lime-50 transition-colors duration-300 group"
            >
              <div className="mb-6 text-zinc-400 group-hover:text-lime-600 transition-colors">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8 stroke-[1.5]" })}
              </div>
              <h3 className="font-display text-2xl font-bold text-zinc-900 mb-3 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;