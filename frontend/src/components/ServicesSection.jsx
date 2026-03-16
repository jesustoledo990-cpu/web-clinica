import React, { useState } from 'react';
import { Clock, TrendingUp, RefreshCw } from 'lucide-react';
import { services } from '../data/mockData';

// 1. Creamos la tarjeta giratoria específica para los servicios
const ServiceFlipCard = ({ service }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <article 
      // Añadimos h-[450px] para asegurar que todas las tarjetas midan lo mismo
      className={`card ${flipped ? 'flipped' : ''} relative w-full h-[450px] cursor-pointer perspective-1000`}
      role="button"
      tabIndex={0}
      onClick={toggleFlip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFlip();
        }
      }}
    >
      <div className="card-inner w-full h-full transition-transform duration-700 preserve-3d relative">
        
        {/* --- FRENTE DE LA TARJETA (Foto y Título) --- */}
        <div className="card-front absolute w-full h-full backface-hidden bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-2xl overflow-hidden shadow-md flex flex-col">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-64 object-cover"
          />
          <div className="p-6 flex flex-col items-center justify-center flex-grow text-center">
            <h3 className="heading-3 mb-2">{service.title}</h3>
            {/* Indicador visual para que el usuario sepa que puede hacer clic */}
            <div className="flex items-center gap-2 text-[var(--interactive-base)] text-sm font-medium mt-auto">
              <span>Ver detalles</span>
              <RefreshCw className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* --- REVERSO DE LA TARJETA (Detalles técnicos) --- */}
        <div className="card-back absolute w-full h-full backface-hidden rotate-y-180 bg-[var(--bg-primary)] border border-[var(--interactive-base)] rounded-2xl p-8 flex flex-col shadow-xl">
          <h3 className="heading-3 mb-4 text-center text-[var(--interactive-base)] border-b border-[var(--border-light)] pb-4">
            {service.title}
          </h3>
          
          <p className="body-regular text-[var(--text-secondary)] flex-grow text-center overflow-y-auto">
            {service.description}
          </p>
          
          <div className="flex flex-col gap-4 mt-6 pt-4 border-t border-[var(--border-light)]">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--interactive-base)' }} />
              <span className="body-regular font-medium" style={{ color: 'var(--text-primary)' }}>
                {service.duration}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--interactive-base)' }} />
              <span className="body-regular font-medium" style={{ color: 'var(--text-primary)' }}>
                {service.recovery}
              </span>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};

// 2. La Sección Principal que mapea los servicios
export const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="servicios" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="hero-medium mb-4">
            Servicios de Armonización Facial
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Técnicas avanzadas con productos premium para resultados naturales y duraderos. Haz clic en cada tratamiento para conocer los detalles.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceFlipCard key={service.id} service={service} />
          ))}
        </div>

        {/* Botón CTA */}
        <div className="text-center">
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