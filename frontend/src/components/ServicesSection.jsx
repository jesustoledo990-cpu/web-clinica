import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { services } from '../data/mockData';

export const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="servicios" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="hero-medium mb-4">
            Servicios de Armonización Facial
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Técnicas avanzadas con productos premium para resultados naturales y duraderos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="product-card hover-lift"
            >
              <img
                src={service.image}
                alt={service.title}
                className="product-card-image"
              />
              <div className="p-6">
                <h3 className="product-card-title mb-3">{service.title}</h3>
                <p className="product-card-description mb-6">{service.description}</p>
                
                <div className="flex items-center justify-between pt-4" style={{ 
                  borderTop: '1px solid var(--border-light)' 
                }}>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      {service.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      {service.recovery}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="btn-primary"
          >
            Consultar Pack Completo - $520.000
          </button>
        </div>
      </div>
    </section>
  );
};
