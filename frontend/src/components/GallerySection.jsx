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
          {/* Image Display */}
          <div className="relative rounded-none overflow-hidden" style={{ 
            minHeight: '600px',
            border: '1px solid var(--border-light)',
            background: 'var(--bg-secondary)'
          }}>
            <img
              src={currentItem.before}
              alt={currentItem.treatment}
              className="w-full h-full object-contain"
              style={{ maxHeight: '600px' }}
            />
          </div>

          {/* Treatment Info */}
          <div className="mt-6 text-center p-6 rounded-none" style={{ 
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)'
          }}>
            <h3 className="heading-3 mb-2">{currentItem.treatment}</h3>
            <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
              {currentItem.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-smooth hover-lift"
              style={{
                border: '1px solid var(--border-medium)',
                background: 'var(--bg-primary)'
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {beforeAfterGallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="w-3 h-3 rounded-full transition-smooth"
                  style={{
                    background: index === activeIndex ? 'var(--interactive-base)' : 'var(--border-light)'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-smooth hover-lift"
              style={{
                border: '1px solid var(--border-medium)',
                background: 'var(--bg-primary)'
              }}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
