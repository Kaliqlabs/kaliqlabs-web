import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions'; 
import Talent from './components/Talent';    
import Contact from './components/Contact';     
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />  
        <Talent />     
        <Contact />    
      </main>
      <Footer />
    </div>
  );
}

export default App;