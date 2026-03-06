import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { clinicInfo } from '../data/mockData';
import { BookingCalendar } from './BookingCalendar';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="navigation-header">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src={clinicInfo.logo} 
              alt="Dr. J. Madrigal"
              className="h-12 w-auto"
              style={{ maxHeight: '48px' }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="navigation-menu">
              <li>
                <button onClick={() => scrollToSection('servicios')} className="navigation-link">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resultados')} className="navigation-link">
                  Resultados
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="navigation-link">
                  Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contacto')} className="navigation-link">
                  Contacto
                </button>
              </li>
            </ul>
          </nav>

          <div className="navigation-utilities hidden lg:flex">
            <a href={`tel:${clinicInfo.phone}`} className="btn-secondary flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {clinicInfo.phone}
            </a>
            <button onClick={() => setShowBooking(true)} className="btn-primary">
              <Calendar className="w-4 h-4 mr-2 inline-block" />
              Reservar Evaluación
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pt-6 pb-4">
            <ul className="flex flex-col gap-4">
              <li>
                <button onClick={() => scrollToSection('servicios')} className="navigation-link">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resultados')} className="navigation-link">
                  Resultados
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="navigation-link">
                  Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contacto')} className="navigation-link">
                  Contacto
                </button>
              </li>
              <li>
                <a href={`tel:${clinicInfo.phone}`} className="btn-secondary flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {clinicInfo.phone}
                </a>
              </li>
              <li>
                <button onClick={() => setShowBooking(true)} className="btn-primary w-full">
                  <Calendar className="w-4 h-4 mr-2 inline-block" />
                  Reservar Evaluación
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
      
      {showBooking && <BookingCalendar onClose={() => setShowBooking(false)} />}
    </header>
  );
};
