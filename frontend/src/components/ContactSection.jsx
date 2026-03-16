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
                    <a href={`tel:${clinicInfo.phone}`} className="+56 9 8304 9976" style={{ color: 'var(--text-secondary)' }}>
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
          </div>
        </div>
    </section>);

};