// src/components/ThanksPage.jsx
import React, { useEffect } from 'react';
import { CheckCircle, Home } from 'lucide-react';
import Button from './Button'; 

const ThanksPage = () => {
    // This effect runs once after the component mounts
    useEffect(() => {
        // Set a timeout to redirect back to the home page after 5 seconds
        const timer = setTimeout(() => {
            window.location.href = '/'; // Redirects to the root of the site
        }, 5000); 

        return () => clearTimeout(timer); // Clean up the timeout
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
            <div className="text-center p-10 md:p-16 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl max-w-lg">
                <CheckCircle size={64} className="text-cyan-400 mx-auto mb-6 animate-pulse" />
                <h1 className="text-4xl font-bold text-white mb-4">Message Sent!</h1>
                
                <p className="text-lg text-slate-300 mb-8">
                    Your message is successfully sent. Thanks for reaching out to the <span className='font-bold'> Kaliqlabs</span> team! We'll be in touch soon.
                </p>

                <a href="#">
                    <Button variant="outline" className="flex items-center gap-2 mx-auto">
                        <Home size={18} />
                        Return to Homepage
                    </Button>
                </a>
                
                <p className="text-sm text-slate-500 mt-4">
                    Redirecting you in 5 seconds...
                </p>
            </div>
        </div>
    );
};

export default ThanksPage;