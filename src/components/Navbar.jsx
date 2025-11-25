import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-lg border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-2xl tracking-tighter group hover:opacity-80 transition-opacity">
          <div className="bg-linear-to-tr from-cyan-400 to-violet-500 p-2 rounded-lg">
            <Code2 size={24} className="text-white" />
          </div>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
            Kaliqlabs
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#solutions" className="hover:text-cyan-400 transition-colors">Solutions</a>
          <a href="#careers" className="hover:text-cyan-400 transition-colors">Talent</a>
          <a href="#contact" className="px-5 py-2 rounded-full border border-slate-700 hover:border-cyan-500 hover:text-white transition-all">
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-6 flex flex-col gap-4">
          <a href="#services" className="text-slate-300 hover:text-cyan-400">Services</a>
          <a href="#solutions" className="text-slate-300 hover:text-cyan-400">Solutions</a>
          <a href="#careers" className="text-slate-300 hover:text-cyan-400">Talent</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;