import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqs } from '../data/mockData';

export const FAQSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="hero-medium mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Resolvemos tus dudas sobre nuestros procedimientos y cuidados
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="rounded-none p-6 transition-smooth"
                style={{
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <AccordionTrigger className="heading-3 text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="body-regular pt-4" style={{ color: 'var(--text-secondary)' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="body-large mb-4" style={{ color: 'var(--text-secondary)' }}>
            ¿Tienes más preguntas?
          </p>
          <button 
            onClick={scrollToContact}
            className="btn-primary"
          >
            Contactar al Especialista
          </button>
        </div>
      </div>
    </section>
  );
};
