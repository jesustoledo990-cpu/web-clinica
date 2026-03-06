# PRD - Clínica de Medicina Estética Facial Dr. J. Madrigal

## Problem Statement Original
Crear una Landing Page de alta gama para una Clínica de Medicina Estética Facial de Élite que comunique profesionalismo, seguridad y resultados naturales. El Dr. J. Madrigal tiene formación internacional (PUC Chile + Queen Mary University London) y ofrece un Pack de Armonización de Perfil por $520.000.

## User Personas
**Target Principal**: Mujeres 30-50 años
- Buscan rejuvenecer y armonizar sin perder su esencia
- Valoran la formación académica y certificaciones
- Dispuestas a pagar premium por calidad y seguridad
- Investigan antes de decidir
- Quieren resultados naturales, no cambios drásticos

## Architecture & Tech Stack
- **Frontend**: React 19 + Tailwind CSS + Shadcn UI
- **Backend**: FastAPI + Python (pending implementation)
- **Database**: MongoDB (pending implementation)
- **Integrations Planned**:
  - Gemini 2.5 Flash AI Chatbot (Emergent LLM key)
  - Email service (credentials pending)
  - WhatsApp Business integration

## Design System
**Style**: Luxury Minimalist Premium Commerce
- Color Palette: Warm neutrals (#fffef2, #f6f5e8, #333333)
- Typography: Inter font family
- Buttons: Sharp rectangular (0px border radius)
- No gradients, no bright colors
- Generous white space
- Professional medical aesthetic

## Features Implemented (Dec 2024)

### ✅ Frontend Complete (Mock Data Phase)
**Date**: Dec 2024

1. **Header/Navigation**
   - Sticky header with smooth scroll navigation
   - Mobile responsive menu
   - Phone CTA + Reservation button

2. **Hero Section**
   - Value proposition messaging
   - Pack offer highlight ($520.000)
   - Dual CTAs (Primary + Secondary)
   - Statistics badges (500+ patients, 98% recommendation)
   - Premium certification badge

3. **Authority Section**
   - University credentials display (PUC + Queen Mary)
   - Three-pillar trust layout
   - Doctor's quote/philosophy statement

4. **Services Section**
   - Three service cards:
     * Perfilado y Aumento de Labios
     * Rinomodelación sin Cirugía
     * Definición de Mentón
   - Duration and recovery info per service
   - Pack CTA button

5. **Quality/Premium Brands Section**
   - Premium product showcases
   - Brand list (Juvederm, Restylane, Belotero, Stylage, Teosyal)
   - FDA/CE certification badges
   - Product authenticity messaging

6. **Before/After Gallery**
   - Interactive slider comparison
   - Draggable slider handle
   - Gallery navigation (arrows + dots)
   - Treatment descriptions

7. **FAQ Section**
   - Shadcn Accordion component
   - 6 comprehensive questions covering:
     * Procedure duration
     * Materials used
     * Natural results
     * Results longevity
     * Post-treatment care
     * Pain/discomfort levels

8. **Contact Section**
   - Full contact form (name, email, phone, service, message)
   - WhatsApp direct button
   - Contact info display
   - Business hours
   - Clinic location
   - Sonner toast notifications

9. **Footer**
   - Quick links navigation
   - Services list
   - Contact information
   - Social media links (Instagram, Facebook)
   - Privacy & Terms links

10. **AI Chatbot Widget**
    - Floating chat button
    - Chat window with conversation history
    - Mock responses for common queries (pricing, appointments, treatments)
    - Conversational interface

### Mock Data Structure
- All data in `/app/frontend/src/data/mockData.js`
- Mock functions: `submitContactForm()`, `bookAppointment()`
- Chatbot responses pre-defined
- Services, FAQs, testimonials, gallery items

## API Contracts (Pending Backend Implementation)

### Contact Form Endpoint
```
POST /api/contact
Body: {
  name: string,
  email: string,
  phone: string,
  service: string (optional),
  message: string (optional)
}
Response: { success: boolean, message: string }
```

### Appointment Booking Endpoint
```
POST /api/appointments
Body: {
  name: string,
  email: string,
  phone: string,
  service: string,
  preferredDate: date (optional),
  message: string (optional)
}
Response: { 
  success: boolean, 
  message: string,
  appointmentId: string 
}
```

### Chatbot Endpoint
```
POST /api/chat
Body: {
  sessionId: string,
  message: string,
  conversationHistory: array (optional)
}
Response: {
  reply: string,
  sessionId: string
}
```

### Email Service Integration
```
POST /api/send-email
Body: {
  to: string,
  subject: string,
  body: string,
  type: string (contact_form | appointment_confirmation)
}
```

## Prioritized Backlog

### P0 - Critical (Next Sprint)
1. **Backend Development**
   - MongoDB models for contacts, appointments, chat history
   - Contact form endpoint with validation
   - Appointment booking endpoint
   - Email service integration (SendGrid/Gmail)
   
2. **Gemini AI Chatbot Integration**
   - Implement Gemini 2.5 Flash using emergentintegrations library
   - Context: Medical aesthetics clinic
   - Store conversation history in MongoDB
   - Smart responses about procedures, pricing, booking

3. **WhatsApp Integration**
   - Pre-filled message template
   - Click-to-chat functionality

### P1 - High Priority
1. **Admin Dashboard** (Future consideration)
   - View contact submissions
   - Manage appointment requests
   - Export leads

2. **Image Upload Feature**
   - Allow client to upload real before/after photos
   - Replace placeholder images
   - Upload clinic photos and doctor profile photo

3. **Form Validation Enhancement**
   - Chilean phone number format validation
   - Email verification
   - Spam protection (reCAPTCHA)

### P2 - Nice to Have
1. **Testimonials Management**
   - Replace mock testimonials with real ones
   - Add more social proof elements

2. **Blog/Resources Section**
   - Educational content about procedures
   - Post-treatment care guides
   - SEO content

3. **Multi-language Support**
   - English version for international patients

4. **Analytics Integration**
   - Google Analytics
   - Conversion tracking
   - Heatmap analysis

## Next Action Items
1. ✅ Implement backend with MongoDB models
2. ✅ Create API endpoints for contact form and appointments
3. ✅ Integrate Gemini 2.5 Flash chatbot
4. ✅ Set up email service
5. ✅ Remove mock data and connect frontend to backend
6. ✅ Test full-stack application end-to-end
7. ⏳ Get real images from client
8. ⏳ Get email service credentials

## Success Metrics
- Form submission rate
- Appointment booking rate
- Average time on page
- Scroll depth
- CTA click-through rate
- WhatsApp conversion rate
- Chatbot engagement rate

## Notes
- All frontend forms currently use mock data (console.log)
- Images are placeholder from Unsplash/Pexels
- Chatbot has basic pattern matching, needs AI upgrade
- Email credentials needed from client before email integration
- Real before/after photos needed from client
