import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { heroContent } from '../data/mockData';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="grid-two-column">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ 
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)'
            }}>
              <Award className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
              <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                Máxima calidad en procedimientos estéticos
              </span>
            </div>

            <h1 className="hero-large">
              {heroContent.title}
            </h1>

            <p className="heading-3" style={{ color: 'var(--text-secondary)' }}>
              {heroContent.subtitle}
            </p>

            <div className="p-6 rounded-none" style={{ 
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)'
            }}>
              <p className="body-large mb-4" style={{ color: 'var(--text-primary)' }}>
                {heroContent.description}
              </p>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                Realizado por un especialista con doble postgrado en Londres.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="btn-primary">
                Reservar Evaluación Premium
                <ArrowRight className="w-4 h-4 ml-2 inline-block" />
              </button>
              <button 
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Conocer más
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div>
                <div className="heading-2">2000+</div>
                <div className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  Pacientes Satisfechos
                </div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'var(--border-light)' }}></div>
              
            </div>
          </div>

          <div className="relative">
            <img
              src={heroContent.image}
              alt="Medicina Estética Facial"
              className="w-full h-[600px] object-cover rounded-none shadow-lg"
              style={{ border: '1px solid var(--border-light)' }}
            />
            <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md rounded-none"
              style={{ 
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid var(--border-light)'
              }}
            >
              <p className="body-large font-bold mb-2">Certificación Internacional</p>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Master of Science en Medicina Estética - Queen Mary University of London
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
