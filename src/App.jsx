import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Guarantee from './components/Guarantee/Guarantee';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Packages from './components/Packages/Packages';
import './App.css';
import WhatsappPopup from './components/WhatsappPopup/WhatsappPopup';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Guarantee />
        <Packages />
        <Contact />
      </main>
      <Footer />
      <WhatsappPopup />
    </div>
  );
}

export default App;
