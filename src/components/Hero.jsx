import React from 'react';
import Button from './Button';
import { ArrowRight, Sparkles, Cloud, ShieldCheck, Zap, Layers } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full bg-slate-950">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        
        {/* Animated Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse-slow delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8 animate-float">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-medium text-cyan-300 uppercase tracking-wider">Innovating the Future</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="block text-slate-100">Where Talent Builds</span>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
             Digital Reality
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Kaliqlabs connects elite tech talent with ambitious enterprises. We architect scalable services and next-gen products.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact"
          className="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 bg-linear-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 group flex items-center gap-2"
          >
            Start a Project 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#careers" 
            className="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white bg-transparent backdrop-blur-sm flex items-center gap-2"
          >
            Join the Team
            <Sparkles size={18} />
          </a>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-800/50">
          <p className="text-sm text-slate-500 mb-8 uppercase tracking-widest font-semibold">
            Our Technical DNA
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            {/* Pillar 1 */}
            <div className="group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                <Cloud size={24} className="text-slate-400 group-hover:text-cyan-400" />
              </div>
              <span className="text-slate-300 font-medium text-sm group-hover:text-white">Cloud Native</span>
            </div>

            {/* Pillar 2 */}
            <div className="group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-colors">
                <Zap size={24} className="text-slate-400 group-hover:text-violet-400" />
              </div>
              <span className="text-slate-300 font-medium text-sm group-hover:text-white">High Performance</span>
            </div>

            {/* Pillar 3 */}
            <div className="group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 group-hover:border-fuchsia-500/50 group-hover:bg-fuchsia-500/10 transition-colors">
                <Layers size={24} className="text-slate-400 group-hover:text-fuchsia-400" />
              </div>
              <span className="text-slate-300 font-medium text-sm group-hover:text-white">Scalable Architecture</span>
            </div>

            {/* Pillar 4 */}
            <div className="group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                <ShieldCheck size={24} className="text-slate-400 group-hover:text-emerald-400" />
              </div>
              <span className="text-slate-300 font-medium text-sm group-hover:text-white">Secure by Design</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;