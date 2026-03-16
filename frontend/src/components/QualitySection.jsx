import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';
import { premiumBrands } from '../data/mockData';

export const QualitySection = () => {
  return (
    /* Forzamos el fondo Marfil y eliminamos clases personalizadas antiguas */
    <section className="py-24 px-6 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-16">
          
          {/* Columna de la Imagen */}
          <div className="relative">
            {/* Adorno trasero en Verde Sabio */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#CDD4B1] rounded-3xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?auto=format&fit=crop&q=80"
              alt="Premium Quality Products"
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl border border-[#CDD4B1]"
            />
          </div>

          {/* Columna de Texto */}
          <div>
            {/* Badge de Certificación en Verde Celadón */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 bg-[#a8bbe7] border border-[#3c507d]">
              <Shield className="w-4 h-4 text-[#3c507d]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#3d4231]">
                Certificación Internacional
              </span>
            </div>

            {/* Título en Verde Bosque Oscuro */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#3d4231]">
              Solo marcas Premium
            </h2>

            {/* Párrafo descriptivo */}
            <p className="text-lg leading-relaxed mb-10 text-[#5c6346]">
              Utilizamos exclusivamente los mejores insumos del mercado mundial para garantizar durabilidad, seguridad biológica y resultados excepcionales.
            </p>

            {/* Lista de Marcas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {premiumBrands.map((brand, index) => (
                <div key={index} className="flex items-start gap-3">
                  {/* Icono de Check en Bronce para resaltar */}
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0 text-[#e0c58f]" />
                  <div>
                    <p className="font-bold text-[#3d4231] text-lg">{brand}</p>
                    <p className="text-sm text-[#7a825d]">
                      Certificación FDA y CE
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recuadro Inferior */}
            <div className="p-6 rounded-2xl bg-[#a8bbe7]/50 border border-dashed border-[#CDD4B1]">
              <p className="text-sm leading-relaxed text-[#3c507d]">
                <strong className="text-[#112250]">Compromiso de Seguridad:</strong> Todos nuestros productos cuentan con trazabilidad completa, certificados de autenticidad y son importados directamente de laboratorios oficiales.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};