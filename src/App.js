import React from 'react';
import Header from './container/Header';
import Hero from './container/Hero';
import Features from './container/Features';
import Download from './container/Download';
import Footer from './container/Footer';
import './App.css';
import InstallationGuide from './container/InstallationGuide'; 
import Learning from './container/Learning';
import AntivirusInstruction from './container/AntivirusInstruction';
import Intro from './container/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro/>
      <Features />
      <Download />
      <InstallationGuide/>
      <AntivirusInstruction/>
      <Learning />
      <Footer />
    </div>
  );
}

export default App;
