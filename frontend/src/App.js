import React from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { QualitySection } from './components/QualitySection';
import { FAQSection } from './components/FAQSection';
import { AuthoritySection } from './components/AuthoritySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import './App.css';

function App() {
  return (
    <div className="App" style={{ background: 'var(--bg-primary)' }}>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <QualitySection />
        <FAQSection />
        <AuthoritySection />
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-light)',
          },
        }}
      />
    </div>
  );
}

export default App;
