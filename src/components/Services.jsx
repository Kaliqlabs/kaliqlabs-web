import React from 'react';
import { Smartphone, Globe, Cloud, Cpu, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/50">
    <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-500/20">
      <Icon size={32} className="text-cyan-400" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  const services = [
        {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Designing, deploying, and managing scalable, secure cloud infrastructure and services (IaaS, PaaS, SaaS) across leading platforms to maximize agility and operational efficiency."
    },
    {
      icon: Globe,
      title: "Web Platforms",
      description: "Scalable, high-performance web applications built on modern frameworks like React and Next.js."
    },

    {
      icon: Cpu,
      title: "AI Integrations",
      description: "Smart algorithms and machine learning models integrated directly into your business logic."
    },
    {
      icon: ShieldCheck,
      title: "Cyber Security",
      description: "Enterprise-grade security audits and infrastructure protection for peace of mind."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Engineered for Excellence</h2>
          <p className="text-slate-400 max-w-xl mx-auto">We don't just write code; we build digital ecosystems tailored to your growth.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, index) => (
            <ServiceCard key={index} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;