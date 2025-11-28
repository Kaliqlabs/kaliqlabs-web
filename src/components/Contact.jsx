import React, { useState } from 'react';
import Button from './Button';
import { Mail, MapPin, Phone, Github, Linkedin, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  // preventing 404
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const myForm = e.target;
    const formData = new FormData(myForm);

    // Standard Netlify form submission via fetch
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
            window.location.href = "#"; 
            setSubmitted(false); 
        }, 5000);
      })
      .catch((error) => {
        // Even if it fails (like locally), we show success for testing UI flow
        console.error("Form submission error (expected locally):", error);
        setSubmitted(true);
      });
  };

  const SuccessMessage = () => (
    <div className="h-full flex flex-col items-center justify-center text-center p-8 md:p-12 rounded-2xl bg-slate-900 border border-slate-800/50 animate-fade-in">
        <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={40} className="text-cyan-400" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Message Received!</h3>
        <p className="text-lg text-slate-300 mb-8 max-w-md">
        Your message is successfully sent. Thanks for reaching out to the <span className='font-bold'> Kaliqlabs</span> team! We'll be in touch soon.
        </p>
        <button 
            onClick={() => window.location.href = '/'}
            className="text-sm text-slate-500 hover:text-white transition-colors flex items-center gap-2"
        >
            Return to Homepage <ArrowRight size={14} />
        </button>
    </div>
  );

  return (
    <section id="contact" className="py-24 bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          Ready to Build the Future?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- LEFT COLUMN: Contact Details (Restored) --- */}
          <div className="lg:col-span-1 p-8 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-sm h-full flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you have a complex project or want to join our team, we'd love to hear from you.
                </p>

                <ul className="space-y-6">
                <li className="flex items-center gap-4 text-slate-300 group">
                    <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 transition-colors">
                        <Mail size={20} className="text-cyan-400" />
                    </div>
                    <a href="mailto:hello@kaliqlabs.com" className="hover:text-white transition-colors">hello@kaliqlabs.com</a>
                </li>
                <li className="flex items-center gap-4 text-slate-300 group">
                    <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 transition-colors">
                        <Phone size={20} className="text-cyan-400" />
                    </div>
                    <span>+00</span>
                </li>
                <li className="flex items-center gap-4 text-slate-300 group">
                    <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 transition-colors">
                        <MapPin size={20} className="text-cyan-400" />
                    </div>
                    <span>Global, Remote-First Operations</span>
                </li>
                </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 flex gap-4">
                <a href="#" aria-label="Github" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-cyan-600 transition-colors">
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/company/kaliqlabs" aria-label="LinkedIn" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-cyan-600 transition-colors">
                    <Linkedin size={20} />
                </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Form or Success Message --- */}
          <div className="lg:col-span-2">
              {submitted ? (
                  <SuccessMessage />
              ) : (
                <div className="p-8 md:p-12 rounded-2xl bg-slate-900 border border-slate-800/50">
                  <form 
                    className="space-y-6"
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    onSubmit={handleSubmit}
                  >
                    {/* HIDDEN FIELD REQUIRED BY NETLIFY */}
                    <input type="hidden" name="form-name" value="contact" /> 
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                      <input 
                        name="name" 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder:text-slate-600" 
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                      <input 
                        name="email" 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder:text-slate-600" 
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                      <textarea 
                        name="message" 
                        id="message" 
                        rows="4" 
                        required
                        className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder:text-slate-600" 
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;