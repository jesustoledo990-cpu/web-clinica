import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { beforeAfterGallery } from '../data/mockData';

export const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? beforeAfterGallery.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === beforeAfterGallery.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
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
          <div className="relative rounded-none overflow-hidden" style={{ 
            height: '600px',
            border: '1px solid var(--border-light)'
          }}>
            {/* Before Image (Background) */}
            <div className="absolute inset-0">
              <img
                src={currentItem.before}
                alt="Before"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-4 py-2 rounded-none" style={{ 
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white'
              }}>
                <span className="body-small font-bold">ANTES</span>
              </div>
            </div>

            {/* After Image (Overlay with clip-path) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                transition: isDragging ? 'none' : 'clip-path 0.1s ease'
              }}
            >
              <img
                src={currentItem.after}
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-4 py-2 rounded-none" style={{ 
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white'
              }}>
                <span className="body-small font-bold">DESPUÉS</span>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 cursor-ew-resize"
              style={{
                left: `${sliderPosition}%`,
                background: 'white',
                boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                zIndex: 10
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'white',
                  border: '2px solid var(--border-medium)',
                  cursor: 'ew-resize'
                }}
              >
                <ChevronLeft className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
                <ChevronRight className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
              </div>
            </div>

            {/* Range Slider (Invisible but interactive) */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              style={{ margin: 0 }}
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
                  onClick={() => {
                    setActiveIndex(index);
                    setSliderPosition(50);
                  }}
                  className="w-3 h-3 rounded-full transition-smooth"
                  style={{
                    background: index === activeIndex ? 'var(--text-primary)' : 'var(--border-light)'
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
