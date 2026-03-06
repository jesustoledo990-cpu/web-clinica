import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';
import { premiumBrands } from '../data/mockData';

export const QualitySection = () => {
  return (
    <section className="section-padding-small" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="grid-two-column items-center gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxtZWRpY2FsJTIwc3BhfGVufDB8fHx8MTc3Mjc2NzA0Nnww&ixlib=rb-4.1.0&q=85"
              alt="Premium Quality Products"
              className="w-full h-[500px] object-cover rounded-none"
              style={{ border: '1px solid var(--border-light)' }}
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ 
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-light)'
            }}>
              <Shield className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
              <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                Certificación Internacional
              </span>
            </div>

            <h2 className="hero-medium mb-6">
              Solo marcas Premium
            </h2>

            <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
              Utilizamos exclusivamente los mejores insumos del mercado mundial para garantizar durabilidad, seguridad biológica y resultados excepcionales.
            </p>

            <div className="space-y-4 mb-8">
              {premiumBrands.map((brand, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--text-primary)' }} />
                  <div>
                    <p className="body-large font-bold">{brand}</p>
                    <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      Certificación FDA y CE
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-none" style={{ 
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-light)'
            }}>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Todos nuestros productos cuentan con trazabilidad completa, certificados de autenticidad y son importados directamente de laboratorios oficiales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
