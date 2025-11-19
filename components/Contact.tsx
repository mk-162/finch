import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';
import { analyzeInquiry } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const analysis = await analyzeInquiry(formState.message, formState.name);
    setResponseMessage(analysis.reply);
    setTags(analysis.suggestedServices);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-800/20 skew-x-12 transform translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
              Let's get <br/>
              <span className="text-lime-400">To Work.</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12 font-light">
              Got a jungle that needs taming? Or just want the lawn to look crisp? Drop me a line.
            </p>
            
            <div className="space-y-8">
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center group">
                <div className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-lime-400 group-hover:border-lime-400 group-hover:text-zinc-900 transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Call Me</p>
                  <p className="text-2xl font-display font-bold">{PHONE_NUMBER}</p>
                </div>
              </a>
              
              <div className="flex items-center group">
                <div className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-6">
                   <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Email</p>
                   <p className="text-xl text-zinc-300">{EMAIL_ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Form */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 p-8 md:p-10 rounded-3xl">
              {!responseMessage ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-zinc-900/50 border-b-2 border-zinc-700 focus:border-lime-400 px-0 py-3 outline-none transition-colors text-lg placeholder-zinc-600"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Phone</label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-zinc-900/50 border-b-2 border-zinc-700 focus:border-lime-400 px-0 py-3 outline-none transition-colors text-lg placeholder-zinc-600"
                        placeholder="07..."
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Project Details</label>
                    <textarea
                      rows={3}
                      required
                      className="w-full bg-zinc-900/50 border-b-2 border-zinc-700 focus:border-lime-400 px-0 py-3 outline-none transition-colors text-lg placeholder-zinc-600 resize-none"
                      placeholder="What are we doing?"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                    <div className="flex items-center text-xs text-lime-400/80 pt-2">
                        <Sparkles className="w-3 h-3 mr-2" />
                        <span>AI Auto-Reply Enabled</span>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-lime-400 hover:bg-lime-500 text-zinc-900 font-bold rounded-xl transition-all flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Thinking...' : 'Send Enquiry'}
                    {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              ) : (
                <div className="h-full flex flex-col justify-center items-center text-center animate-fade-in">
                  <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                    <Sparkles className="w-10 h-10 text-zinc-900" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">Received.</h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed">{responseMessage}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-8">
                      {tags.map(tag => (
                          <span key={tag} className="px-3 py-1 border border-lime-400/30 text-lime-400 rounded-full text-xs uppercase tracking-widest">
                              {tag}
                          </span>
                      ))}
                  </div>
                  <button 
                    onClick={() => { setResponseMessage(null); setFormState({name:'', phone:'', message:''}); }}
                    className="text-sm font-bold text-white border-b border-white hover:text-lime-400 hover:border-lime-400 transition-colors"
                  >
                    Send New Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;