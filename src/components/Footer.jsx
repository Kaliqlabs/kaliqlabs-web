import React from 'react';
import { Code2, Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950/90 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid: Logo/Contact + Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Column 1: Logo and Contact Info */}
          <div className="col-span-2 md:col-span-2 space-y-4 pr-10">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
              <div className="bg-linear-to-tr from-cyan-400 to-violet-500 p-2 rounded-lg">
                <Code2 size={24} className="text-white" />
              </div>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
                Kaliqlabs
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Where elite talent converges to build digital reality. Architecting success through innovation and technical mastery.
            </p>
            
            <div className="pt-4 space-y-2">
              <div className="flex items-center text-sm text-slate-400">
                <Mail size={16} className="text-cyan-400 mr-3 shrink-0" />
                <a href="mailto:hello@kaliqlabs.com" className="hover:text-white transition-colors">hello@kaliqlabs.com</a>
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <MapPin size={16} className="text-cyan-400 mr-3  hrink-0" />
                <span>Global, Remote-First</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-slate-400 hover:text-cyan-400 transition-colors">Careers (Talent)</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Offerings */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#solutions" className="text-slate-400 hover:text-cyan-400 transition-colors">Solutions</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Web Platforms</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Cloud Strategy</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
            
            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com/company/kaliqlabs" aria-label="LinkedIn" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-cyan-600 hover:text-white transition-colors">
                  <Linkedin size={20} />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-cyan-600 hover:text-white transition-colors">
                  <Github size={20} />
              </a>
            </div>
          </div>

        </div>
        
        {/* Copyright and Bottom Line */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Kaliqlabs. All rights reserved. 
            <span className="hidden sm:inline"> | Designed and Built with Modern Technologies by Kaliqlabs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;