// Available time slots for appointments
export const availableTimeSlots = [
  { id: 1, time: "09:00", label: "9:00 AM", available: true },
  { id: 2, time: "10:00", label: "10:00 AM", available: true },
  { id: 3, time: "11:00", label: "11:00 AM", available: true },
  { id: 4, time: "12:00", label: "12:00 PM", available: false },
  { id: 5, time: "14:00", label: "2:00 PM", available: true },
  { id: 6, time: "15:00", label: "3:00 PM", available: true },
  { id: 7, time: "16:00", label: "4:00 PM", available: true },
  { id: 8, time: "17:00", label: "5:00 PM", available: true },
  { id: 9, time: "18:00", label: "6:00 PM", available: false }
];

// Mock function to get available slots for a specific date
export const getAvailableSlotsForDate = (date) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // For demo purposes, return all slots
      // In production, this would check actual availability from backend
      const dayOfWeek = date.getDay();
      
      // Sunday (0) - closed
      if (dayOfWeek === 0) {
        resolve([]);
        return;
      }
      
      // Saturday (6) - limited hours
      if (dayOfWeek === 6) {
        resolve(availableTimeSlots.filter(slot => 
          parseInt(slot.time.split(':')[0]) >= 10 && 
          parseInt(slot.time.split(':')[0]) <= 14
        ));
        return;
      }
      
      // Weekdays - full schedule
      resolve(availableTimeSlots.filter(slot => slot.available));
    }, 300);
  });
};

// Mock function to book appointment with calendar
export const bookAppointmentWithCalendar = (bookingData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Appointment booked (mock):', bookingData);
      resolve({ 
        success: true, 
        message: 'Cita reservada exitosamente',
        appointmentId: `APPT-${Date.now()}`,
        confirmationCode: `CF-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
      });
    }, 1000);
  });
};

// Add to existing exports
export * from './mockData';
