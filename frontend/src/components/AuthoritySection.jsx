import React from 'react';
import { GraduationCap } from 'lucide-react';
import { clinicInfo } from '../data/mockData';

export const AuthoritySection = () => {
  return (
    <section id="especialista" className="section-padding-small" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ 
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-light)'
          }}>
            <GraduationCap className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
            <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
              Formación Internacional
            </span>
          </div>

          <h2 className="heading-2 mb-6">
            Respaldado por Educación de Excelencia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-none text-left" style={{ 
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-light)'
            }}>
              <h3 className="heading-3 mb-2">Pontificia Universidad Católica de Chile</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Formación médica de excelencia
              </p>
            </div>

            <div className="p-6 rounded-none text-left" style={{ 
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-light)'
            }}>
              <h3 className="heading-3 mb-2">Queen Mary University of London</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Master of Science en Medicina Estética
              </p>
            </div>
          </div>

          <div className="p-6 rounded-none" style={{ 
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-light)'
          }}>
            <p className="body-large mb-3" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              "La medicina estética facial requiere conocimiento anatómico profundo, técnica depurada y un ojo artístico entrenado. Mi compromiso es ofrecerte resultados naturales que respeten tu esencia."
            </p>
            <p className="body-regular font-bold">— Dr. J. Madrigal</p>
          </div>
        </div>
      </div>
    </section>
  );
};
