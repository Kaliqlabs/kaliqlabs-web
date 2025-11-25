import React from 'react';
import { Box, Code, GitFork, TrendingUp } from 'lucide-react';

const SolutionItem = ({ icon: Icon, title, description, colorClass }) => (
  <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-2xl hover:shadow-cyan-500/10">
    <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${colorClass}`}>
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const Solutions = () => {
  const solutions = [
    {
      icon: Box,
      title: "Custom Product Development",
      description: "Building proprietary software products from ideation to launch, serving unique market demands.",
      colorClass: "bg-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Modernizing legacy systems, migrating data, and integrating AI to streamline existing business processes.",
      colorClass: "bg-violet-600"
    },
    {
      icon: GitFork,
      title: "API & Microservices Architecture",
      description: "Designing decoupled, resilient backend systems that enable rapid scaling and easy third-party integration.",
      colorClass: "bg-green-600"
    },
    {
      icon: Code,
      title: "Managed Code Services",
      description: "Providing ongoing development, maintenance, and expert support for your existing applications and teams.",
      colorClass: "bg-pink-600"
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Solution Pillars
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We deliver outcomes through focused engagement models, blending product creation with high-value services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((s, index) => (
            <SolutionItem key={index} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;