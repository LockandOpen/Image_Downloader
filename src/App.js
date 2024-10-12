import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Download from './Download';
import Footer from './Footer';
import './App.css';
import InstallationGuide from './InstallationGuide';
import './Learning.css';
import Learning from './Learning';
import AntivirusInstruction from './AntivirusInstruction';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
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
