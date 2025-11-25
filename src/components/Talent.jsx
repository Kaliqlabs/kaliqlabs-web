import React from 'react';
import Button from './Button';
import { Briefcase, Zap, UserPlus } from 'lucide-react';
import AbstractNetworkImage from '../assets/abstract-network.jpg';

const Talent = () => {
  return (
    <section id="careers" className="py-24 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-16 rounded-3xl shadow-2xl shadow-violet-500/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
              <div className="flex items-center gap-3 text-cyan-400 mb-4">
                <Briefcase size={24} />
                <span className="uppercase tracking-widest font-semibold text-sm">Join the Elite</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Where Elite Talent <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400">Converges</span>
              </h2>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                Kaliqlabs is not just a company; it's a global collective of senior developers, architects, and product managers united by a passion for technical excellence and impact. We offer challenging projects, true ownership, and a remote-first culture built on trust.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <Zap size={20} className="text-violet-400 mt-1 shrink-0" />
                  <p className="text-slate-300"> Project Ownership</p>
                </div>
                <div className="flex items-start gap-3">
                  <UserPlus size={20} className="text-violet-400 mt-1 shrink-0" />
                  <p className="text-slate-300"> Flexible & Remote</p>
                </div>
              </div>
              
              <Button className="group flex items-center gap-2">
                View Open Positions 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
              </Button>
            </div>

            {/* Image Placeholder */}
            <div className="hidden lg:block relative aspect-video rounded-xl overflow-hidden bg-slate-800">
                {/* Image Block: Talent Network Visualization */}
            <div className="hidden lg:block relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/10">
                <img 
                    src={AbstractNetworkImage} 
                    alt="Abstract network of interconnected talent" 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-[1.02]"
                />
            </div>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talent;