import React from 'react';
import { GraduationCap, Award, Shield } from 'lucide-react';
import { clinicInfo } from '../data/mockData';

export const AuthoritySection = () => {
  return (
    <section className="section-padding-small" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="hero-medium mb-4">
            Tu rostro merece un experto, no solo un aplicador
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Formación internacional para tu seguridad y resultados excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8 rounded-none hover-lift transition-smooth" style={{ 
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-light)'
          }}>
            <GraduationCap className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-primary)' }} />
            <h3 className="heading-3 mb-2">Pontificia Universidad Católica de Chile</h3>
            <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
              Formación médica de excelencia
            </p>
          </div>

          <div className="text-center p-8 rounded-none hover-lift transition-smooth" style={{ 
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-light)'
          }}>
            <Award className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-primary)' }} />
            <h3 className="heading-3 mb-2">Queen Mary University of London</h3>
            <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
              Level 7 Diploma & Master of Science en Medicina Estética
            </p>
          </div>

          <div className="text-center p-8 rounded-none hover-lift transition-smooth" style={{ 
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-light)'
          }}>
            <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-primary)' }} />
            <h3 className="heading-3 mb-2">Certificación Internacional</h3>
            <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
              Estándares globales de seguridad y calidad
            </p>
          </div>
        </div>

        <div className="text-center p-8 rounded-none" style={{ 
          background: 'var(--bg-primary)',
          border: '2px solid var(--border-medium)',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <p className="heading-3 mb-4">
            "La medicina estética facial requiere conocimiento anatómico profundo, técnica depurada y un ojo artístico entrenado. Mi compromiso es ofrecerte resultados naturales que respeten tu esencia."
          </p>
          <p className="body-large font-bold">— Dr. J. Madrigal</p>
          <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
            Master of Science en Medicina Estética
          </p>
        </div>
      </div>
    </section>
  );
};
