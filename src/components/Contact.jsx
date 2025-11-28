// src/components/Contact.jsx
import React, { useState } from 'react'; // <-- ADDED useState
import Button from './Button';
import { Mail, MapPin, Phone, Github, Linkedin, CheckCircle } from 'lucide-react'; // <-- ADDED CheckCircle

// Note: Using a state variable to show the success message within the SPA 
// is usually better, but for Netlify Forms integration, the `action` redirect 
// is the simplest way to confirm the submission.

const Contact = () => {
  // Use a simple success page path for Netlify's built-in redirect
  const NETLIFY_SUCCESS_ACTION = "/thanks"; 
  
  return (
    <section id="contact" className="py-24 bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          Ready?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Details Column (No Change Needed Here) */}
          <div className="lg:col-span-1 p-8 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-sm">
            {/* ... (Existing Contact Details Content) ... */}
          </div>

          {/* Contact Form Column - UPDATED FOR NETLIFY REDIRECT */}
          <div className="lg:col-span-2 p-8 md:p-12 rounded-2xl bg-slate-900 border border-slate-800/50">
            <form 
              className="space-y-6"
              data-netlify="true" // REQUIRED for Netlify Forms
              name="contact" 
              method="POST"
              action={NETLIFY_SUCCESS_ACTION} // <-- REDIRECTS USER TO /thanks UPON SUCCESS
            >
              {/* HIDDEN FIELD REQUIRED BY NETLIFY */}
              <input type="hidden" name="form-name" value="contact" /> 
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input name="name" // <-- ADDED name ATTRIBUTE
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input name="email" // <-- ADDED name ATTRIBUTE
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:ring-cyan-500 focus:border-cyan-500" 
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                <textarea name="message" // <-- ADDED name ATTRIBUTE
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