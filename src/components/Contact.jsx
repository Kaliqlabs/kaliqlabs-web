import React from 'react';
import Button from './Button';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          Ready?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-1 p-8 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-slate-400 mb-8">
              Whether you have a complex project or want to join our team, we'd love to hear from you.
            </p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-slate-300">
                <Mail size={20} className="text-cyan-400" />
                <a href="mailto:hello@kaliqlabs.com" className="hover:text-white transition-colors">hello@kaliqlabs.com</a>
              </li>
              <li className="flex items-center gap-4 text-slate-300">
                <Phone size={20} className="text-cyan-400" />
                <span>+i-will-call-you!</span>
              </li>
              <li className="flex items-center gap-4 text-slate-300">
                <MapPin size={20} className="text-cyan-400" />
                <span>Global, Remote-First Operations</span>
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-slate-800 flex gap-4">
                <a href="#" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-cyan-600 transition-colors">
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/company/kaliqlabs" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-cyan-600 transition-colors">
                    <Linkedin size={20} />
                </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2 p-8 md:p-12 rounded-2xl bg-slate-900 border border-slate-800/50">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;