import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-center mb-16">
          Client Love
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-colors">
              <div className="flex text-lime-500 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-zinc-800 font-medium mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between border-t border-zinc-200 pt-4">
                 <p className="text-sm font-bold text-zinc-900">{review.name}</p>
                 <p className="text-xs text-zinc-400 uppercase tracking-wider">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;