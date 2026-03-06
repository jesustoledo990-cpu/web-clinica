import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { chatbotResponses } from '../data/mockData';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy el asistente virtual del Dr. Madrigal. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase());
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput) => {
    if (userInput.includes('precio') || userInput.includes('costo') || userInput.includes('valor')) {
      return chatbotResponses.pricing;
    } else if (userInput.includes('agendar') || userInput.includes('reservar') || userInput.includes('cita')) {
      return chatbotResponses.appointment;
    } else if (userInput.includes('servicio') || userInput.includes('tratamiento') || userInput.includes('procedimiento')) {
      return chatbotResponses.treatments;
    } else {
      return chatbotResponses.default;
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition-smooth hover-lift"
          style={{
            background: 'var(--interactive-base)',
            color: 'white'
          }}
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-8 right-8 w-96 rounded-none shadow-2xl z-50 flex flex-col"
          style={{
            height: '600px',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-medium)'
          }}
        >
          {/* Header */}
          <div
            className="p-4 flex items-center justify-between rounded-none"
            style={{
              background: 'var(--interactive-base)',
              color: 'white'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="body-large font-bold">Asistente Virtual</p>
                <p className="body-small">Dr. Madrigal Clinic</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-smooth"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4"
            style={{ background: 'var(--bg-secondary)' }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[80%] p-3 rounded-lg body-regular"
                  style={{
                    background: message.sender === 'user' ? 'var(--interactive-base)' : 'var(--bg-primary)',
                    color: message.sender === 'user' ? 'white' : 'var(--text-primary)',
                    border: message.sender === 'bot' ? '1px solid var(--border-light)' : 'none'
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="p-4"
            style={{
              borderTop: '1px solid var(--border-light)',
              background: 'var(--bg-primary)'
            }}
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 rounded-none body-regular transition-smooth"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-primary)'
                }}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-none flex items-center justify-center transition-smooth hover-lift"
                style={{
                  background: 'var(--interactive-base)',
                  color: 'white',
                  border: 'none'
                }}
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
