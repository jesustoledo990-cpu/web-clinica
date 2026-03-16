import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { beforeAfterGallery } from '../data/mockData';

export const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? beforeAfterGallery.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === beforeAfterGallery.length - 1 ? 0 : prev + 1));
  };

  const currentItem = beforeAfterGallery[activeIndex];

  return (
    <section id="resultados" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="hero-medium mb-4">
            Resultados que Hablan por Sí Mismos
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Transformaciones naturales que respetan la esencia de cada paciente
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Contenedor de la Imagen y Botones Laterales */}
          {/* Añadimos 'group' para poder hacer efectos hover en el futuro si quieres */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ 
            minHeight: '600px',
            border: '1px solid var(--border-light)',
            background: 'var(--bg-secondary)'
          }}>
            
            {/* Botón Anterior (Izquierda) */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
              style={{
                border: '1px solid var(--border-medium)',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)'
              }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Imagen Principal */}
            <img
              src={currentItem.before}
              alt={currentItem.treatment}
              className="w-full h-full object-contain absolute inset-0 m-auto"
              style={{ maxHeight: '600px' }}
            />

            {/* Botón Siguiente (Derecha) */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
              style={{
                border: '1px solid var(--border-medium)',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)'
              }}
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Información del Tratamiento */}
          <div className="mt-6 text-center p-6 rounded-2xl shadow-sm" style={{ 
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)'
          }}>
            <h3 className="heading-3 mb-2">{currentItem.treatment}</h3>
            <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
              {currentItem.description}
            </p>
          </div>

          {/* Navegación por Puntos (Dots) */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {beforeAfterGallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-3 h-3 rounded-full transition-smooth hover:scale-125"
                style={{
                  background: index === activeIndex ? 'var(--interactive-base)' : 'var(--border-light)'
                }}
                aria-label={`Ir a foto ${index + 1}`}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};