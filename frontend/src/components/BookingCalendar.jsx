import React, { useState, useEffect } from 'react';
import { Calendar } from './ui/calendar';
import { Clock, CheckCircle2, ArrowRight, ArrowLeft, X } from 'lucide-react';
import { toast } from 'sonner';
import { es } from 'date-fns/locale';
import { getAvailableSlotsForDate, bookAppointmentWithCalendar } from '../data/bookingData';
import { services } from '../data/mockData';

export const BookingCalendar = ({ onClose }) => {
  const [step, setStep] = useState(1); // 1: Service, 2: Date/Time, 3: Info, 4: Confirmation
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Load available slots when date changes
  useEffect(() => {
    if (selectedDate) {
      setLoadingSlots(true);
      setSelectedTime(null);
      getAvailableSlotsForDate(selectedDate).then(slots => {
        setAvailableSlots(slots);
        setLoadingSlots(false);
      });
    }
  }, [selectedDate]);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleTimeSelect = (timeSlot) => {
    setSelectedTime(timeSlot);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bookingData = {
      service: selectedService.title,
      date: selectedDate.toLocaleDateString('es-CL'),
      time: selectedTime.label,
      ...formData
    };

    try {
      const result = await bookAppointmentWithCalendar(bookingData);
      if (result.success) {
        setConfirmationData(result);
        setStep(4);
        toast.success('¡Cita reservada exitosamente!');
      }
    } catch (error) {
      toast.error('Error al reservar la cita. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const disabledDays = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0; // Disable past dates and Sundays
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none"
        style={{
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-medium)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover-lift transition-smooth z-10"
          style={{ background: 'var(--bg-secondary)' }}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Indicator */}
        <div className="p-6 pb-4" style={{ borderBottom: '1px solid var(--border-light)' }}>
          <div className="flex items-center justify-between max-w-md mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <React.Fragment key={num}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-smooth ${
                      step >= num ? 'text-white' : ''
                    }`}
                    style={{
                      background: step >= num ? 'var(--interactive-base)' : 'var(--bg-secondary)',
                      color: step >= num ? 'white' : 'var(--text-secondary)'
                    }}
                  >
                    {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
                  </div>
                  <span className="body-small mt-2" style={{ color: 'var(--text-secondary)' }}>
                    {num === 1 && 'Servicio'}
                    {num === 2 && 'Fecha'}
                    {num === 3 && 'Datos'}
                    {num === 4 && 'Confirmar'}
                  </span>
                </div>
                {num < 4 && (
                  <div
                    className="flex-1 h-0.5 mx-2"
                    style={{
                      background: step > num ? 'var(--interactive-base)' : 'var(--border-light)'
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="p-8">
            <h2 className="heading-2 mb-2 text-center">Selecciona tu Servicio</h2>
            <p className="body-regular mb-8 text-center" style={{ color: 'var(--text-secondary)' }}>
              Elige el tratamiento que te interesa
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  className="text-left p-6 rounded-none transition-smooth hover-lift"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover rounded-none mb-4"
                  />
                  <h3 className="heading-3 mb-2">{service.title}</h3>
                  <p className="body-small mb-3" style={{ color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      {service.duration}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => handleServiceSelect({ id: 'pack', title: 'Pack Completo de Armonización', duration: '120 minutos' })}
                className="btn-primary"
              >
                Pack Completo - $520.000
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Date and Time Selection */}
        {step === 2 && (
          <div className="p-8">
            <button
              onClick={() => setStep(1)}
              className="btn-secondary mb-6 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Cambiar servicio
            </button>

            <div className="mb-6 p-4 rounded-none" style={{ background: 'var(--bg-secondary)' }}>
              <p className="body-regular">
                <strong>Servicio seleccionado:</strong> {selectedService?.title}
              </p>
            </div>

            <h2 className="heading-2 mb-6">Selecciona Fecha y Hora</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar */}
              <div>
                <h3 className="heading-3 mb-4">Elige una fecha</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={disabledDays}
                  locale={es}
                  className="rounded-none border"
                  style={{ border: '1px solid var(--border-light)' }}
                />
                <p className="body-small mt-3" style={{ color: 'var(--text-secondary)' }}>
                  * Domingos cerrado
                </p>
              </div>

              {/* Time Slots */}
              <div>
                <h3 className="heading-3 mb-4">Elige una hora</h3>
                {!selectedDate ? (
                  <div className="p-8 text-center rounded-none" style={{ background: 'var(--bg-secondary)' }}>
                    <Clock className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--text-secondary)' }} />
                    <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                      Primero selecciona una fecha
                    </p>
                  </div>
                ) : loadingSlots ? (
                  <div className="p-8 text-center">
                    <div className="loading-dots body-large">Cargando horarios...</div>
                  </div>
                ) : availableSlots.length === 0 ? (
                  <div className="p-8 text-center rounded-none" style={{ background: 'var(--bg-secondary)' }}>
                    <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                      No hay horarios disponibles para esta fecha
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => handleTimeSelect(slot)}
                        className={`p-4 rounded-none transition-smooth ${
                          selectedTime?.id === slot.id ? 'text-white' : ''
                        }`}
                        style={{
                          background: selectedTime?.id === slot.id
                            ? 'var(--interactive-base)'
                            : 'var(--bg-secondary)',
                          border: '1px solid var(--border-light)',
                          color: selectedTime?.id === slot.id ? 'white' : 'var(--text-primary)'
                        }}
                      >
                        <Clock className="w-4 h-4 mx-auto mb-2" />
                        <span className="body-regular">{slot.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {selectedDate && selectedTime && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep(3)}
                  className="btn-primary flex items-center gap-2"
                >
                  Continuar
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Personal Information */}
        {step === 3 && (
          <div className="p-8">
            <button
              onClick={() => setStep(2)}
              className="btn-secondary mb-6 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Cambiar fecha/hora
            </button>

            <div className="mb-6 p-4 rounded-none" style={{ background: 'var(--bg-secondary)' }}>
              <p className="body-regular mb-2">
                <strong>Servicio:</strong> {selectedService?.title}
              </p>
              <p className="body-regular mb-2">
                <strong>Fecha:</strong> {selectedDate?.toLocaleDateString('es-CL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="body-regular">
                <strong>Hora:</strong> {selectedTime?.label}
              </p>
            </div>

            <h2 className="heading-2 mb-6">Tus Datos de Contacto</h2>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
              <div>
                <label htmlFor="name" className="body-regular mb-2 block">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 rounded-none body-regular transition-smooth"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Tu nombre completo"
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
                  onChange={handleFormChange}
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
                  onChange={handleFormChange}
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
                <label htmlFor="notes" className="body-regular mb-2 block">
                  Notas adicionales (opcional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleFormChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-none body-regular transition-smooth resize-none"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="¿Algo que debamos saber?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="loading-dots">Reservando...</div>
                ) : (
                  <>
                    Confirmar Reserva
                    <CheckCircle2 className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && confirmationData && (
          <div className="p-8 text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'var(--bg-secondary)' }}>
              <CheckCircle2 className="w-12 h-12" style={{ color: 'var(--interactive-base)' }} />
            </div>

            <h2 className="hero-medium mb-4">¡Cita Reservada!</h2>
            <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
              Tu evaluación ha sido agendada exitosamente
            </p>

            <div className="max-w-md mx-auto mb-8 p-6 rounded-none text-left" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
              <p className="body-regular mb-3">
                <strong>Código de confirmación:</strong><br />
                <span className="heading-3" style={{ color: 'var(--interactive-base)' }}>
                  {confirmationData.confirmationCode}
                </span>
              </p>
              <p className="body-regular mb-2">
                <strong>Servicio:</strong> {selectedService?.title}
              </p>
              <p className="body-regular mb-2">
                <strong>Fecha:</strong> {selectedDate?.toLocaleDateString('es-CL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="body-regular mb-2">
                <strong>Hora:</strong> {selectedTime?.label}
              </p>
              <p className="body-regular">
                <strong>Paciente:</strong> {formData.name}
              </p>
            </div>

            <div className="p-4 rounded-none mb-8" style={{ background: 'rgba(186, 62, 43, 0.1)', border: '1px solid var(--status-error)' }}>
              <p className="body-regular" style={{ color: 'var(--status-error)' }}>
                <strong>Importante:</strong> Recibirás un email de confirmación con todos los detalles. Por favor llega 10 minutos antes de tu cita.
              </p>
            </div>

            <button
              onClick={onClose}
              className="btn-primary"
            >
              Entendido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
