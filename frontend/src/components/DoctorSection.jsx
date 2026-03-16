import React from 'react';

const DoctorProfile = () => {
  const doctorData = {
    nombre: "Dr. Jorge Madrigal",
    especialidad: "Especialista en Medicina Estética",
    descripcion: "Cirujano Dentista de la Pontificia Universidad Católica de Chile, especializado en la vanguardia de la estética avanzada en Londres, Inglaterra. Posee un Master of Science (MSc) en Medicina Estética y un Level 7 Diploma en Estética Facial por la prestigiosa Queen Mary University of London. Su enfoque integra la precisión clínica con una visión artística internacional, ofreciendo tratamientos de armonización facial con los más altos estándares de seguridad y excelencia académica.",
    imagen: "doctor.jpg"
  };

  return (
    <section className="bg-white py-16 px-6"> 
      {/* Contenedor principal: Flex en fila para PC, columna para móvil */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
        
        {/* Panel 1: Contenedor de la Imagen */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[450px]">
            {/* Adorno decorativo (Asegúrate de tener definido 'gold-500' en tailwind o cámbialo a 'yellow-500') */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-yellow-500 rounded-3xl -z-10"></div>
            <img 
              src={doctorData.imagen} 
              alt={doctorData.nombre}
              className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>

        {/* Panel 2: Contenedor de Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
  {/* Especialidad principal */}
  <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
    Medicina Estética & Armonización Facial
  </span>
  
  <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
    {doctorData.nombre}
  </h2>
  
  <div className="h-1 w-20 bg-blue-500 mb-8 mx-auto md:ml-0"></div>

  {/* Información académica en punteos */}
  <div className="space-y-6 mb-10 text-gray-700">
    <div>
      <h4 className="font-bold text-gray-900 mb-2">Formación de Excelencia:</h4>
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <span className="text-blue-500 mt-1">●</span>
          <span><strong>Cirujano Dentista</strong> por la Pontificia Universidad Católica de Chile.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-500 mt-1">●</span>
          <span><strong>Master of Science (MSc) in Aesthetic Medicine</strong> de la Queen Mary University of London.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-500 mt-1">●</span>
          <span><strong>Level 7 Diploma en Estética Facial</strong> (Reino Unido), el estándar más alto en seguridad del paciente.</span>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold text-gray-900 mb-2">Especialización y Enfoque:</h4>
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <span className="text-blue-500 mt-1">✓</span>
          <span>Experiencia internacional en técnicas de vanguardia en Londres.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-500 mt-1">✓</span>
          <span>Miembro activo de sociedades internacionales de medicina estética.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-blue-500 mt-1">✓</span>
          <span>Enfoque en resultados naturales mediante armonización orofacial avanzada.</span>
        </li>
      </ul>
    </div>
  </div>

  <button className="w-full md:w-auto bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
    Reservar Evaluación Diagnóstica
  </button>
</div>

      </div>
    </section>
  );
};

export default DoctorProfile;