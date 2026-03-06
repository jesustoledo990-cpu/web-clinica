import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { clinicInfo } from '../data/mockData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="heading-3 mb-4">Dr. {clinicInfo.doctorName.split(' ')[1]}</h3>
            <p className="body-regular mb-4" style={{ color: 'var(--text-secondary)' }}>
              Medicina Estética Facial de Élite con formación internacional.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-smooth hover-lift"
                style={{ border: '1px solid var(--border-medium)' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-smooth hover-lift"
                style={{ border: '1px solid var(--border-medium)' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3 mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('servicios')} className="body-regular hover:underline" style={{ color: 'var(--text-secondary)' }}>
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resultados')} className="body-regular hover:underline" style={{ color: 'var(--text-secondary)' }}>
                  Resultados
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('especialista')} className="body-regular hover:underline" style={{ color: 'var(--text-secondary)' }}>
                  El Especialista
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="body-regular hover:underline" style={{ color: 'var(--text-secondary)' }}>
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-3 mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Perfilado de Labios
              </li>
              <li className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Rinomodelación
              </li>
              <li className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Definición de Mentón
              </li>
              <li className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Armonización Facial
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-3 mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
                <a href={`tel:${clinicInfo.phone}`} className="body-regular hover:underline" style={{ color: 'var(--text-secondary)' }}>
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
                <a href={`mailto:${clinicInfo.email}`} className="body-regular hover:underline" style={{ color: 'var(--text-secondary)' }}>
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  Santiago, Chile
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid var(--border-light)' }}>
          <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
            © {currentYear} Dr. {clinicInfo.doctorName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="body-small hover:underline" style={{ color: 'var(--text-secondary)' }}>
              Política de Privacidad
            </a>
            <a href="#" className="body-small hover:underline" style={{ color: 'var(--text-secondary)' }}>
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
