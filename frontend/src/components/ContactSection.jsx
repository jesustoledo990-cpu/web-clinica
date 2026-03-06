import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { clinicInfo, submitContactForm } from '../data/mockData';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        toast.success('¡Mensaje enviado exitosamente!', {
          description: 'Nos pondremos en contacto contigo pronto.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Error al enviar el mensaje', {
        description: 'Por favor intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola Dr. Madrigal, me gustaría obtener más información sobre el Pack de Armonización de Perfil.`
    );
    window.open(`https://wa.me/${clinicInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="hero-medium mb-4">
            Reserva tu Evaluación Premium
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Agenda tu consulta personalizada y descubre cómo podemos realzar tu armonía facial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="body-regular mb-2 block">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-none body-regular transition-smooth"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Ingresa tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="body-regular mb-2 block">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-none body-regular transition-smooth"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="body-regular mb-2 block">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-none body-regular transition-smooth"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div>
                <label htmlFor="service" className="body-regular mb-2 block">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-none body-regular transition-smooth"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="pack-completo">Pack Armonización de Perfil Completo</option>
                  <option value="labios">Perfilado y Aumento de Labios</option>
                  <option value="rinomodelacion">Rinomodelación sin Cirugía</option>
                  <option value="menton">Definición de Mentón</option>
                  <option value="consulta">Consulta General</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="body-regular mb-2 block">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-none body-regular transition-smooth resize-none"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Cuéntanos sobre tus expectativas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-dots">Enviando...</div>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Consulta
                  </>
                )}
              </button>
            </form>

            <div className="mt-6">
              <button
                onClick={handleWhatsApp}
                className="w-full px-6 py-4 rounded-none flex items-center justify-center gap-3 transition-smooth hover-lift"
                style={{
                  background: '#25D366',
                  color: 'white',
                  border: 'none'
                }}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="button-text">Contactar por WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-none" style={{ 
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)'
            }}>
              <h3 className="heading-2 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'var(--text-primary)' }} />
                  <div>
                    <p className="body-large font-bold mb-1">Teléfono</p>
                    <a href={`tel:${clinicInfo.phone}`} className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'var(--text-primary)' }} />
                  <div>
                    <p className="body-large font-bold mb-1">Email</p>
                    <a href={`mailto:${clinicInfo.email}`} className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'var(--text-primary)' }} />
                  <div>
                    <p className="body-large font-bold mb-1">Ubicación</p>
                    <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                      Clínica de Medicina Estética<br />
                      Santiago, Chile
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-none" style={{ 
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)'
            }}>
              <h3 className="heading-3 mb-4">Horario de Atención</h3>
              <div className="space-y-2">
                <div className="flex justify-between body-regular">
                  <span>Lunes - Viernes</span>
                  <span style={{ color: 'var(--text-secondary)' }}>9:00 - 19:00</span>
                </div>
                <div className="flex justify-between body-regular">
                  <span>Sábados</span>
                  <span style={{ color: 'var(--text-secondary)' }}>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between body-regular">
                  <span>Domingos</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Cerrado</span>
                </div>
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/5042612/pexels-photo-5042612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Clínica"
              className="w-full h-64 object-cover rounded-none"
              style={{ border: '1px solid var(--border-light)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
