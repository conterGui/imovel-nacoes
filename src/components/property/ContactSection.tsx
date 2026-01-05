import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { propertyConfig } from '@/config/property';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Tenho interesse no imóvel e gostaria de mais informações.');
    window.open(`https://wa.me/${propertyConfig.whatsapp}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${propertyConfig.phone.replace(/\s/g, '')}`, '_self');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section 
      id="contact" 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-foreground text-background"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: CTA and buttons */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="heading-primary text-background mb-6">
              {t.contact.title}
            </h2>

            <p className="body-large text-background/70 mb-12">
              {t.contact.subtitle}
            </p>

            <div className="space-y-4">
              {/* Primary CTA - Phone Call for scheduling */}
              <button 
                onClick={handleCall}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-background text-foreground font-medium tracking-wide transition-all duration-300 hover:bg-background/90 rounded-lg"
              >
                <Phone className="w-5 h-5" />
                {t.contact.schedule}
              </button>

              {/* Secondary CTAs */}
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-green-600 text-white font-medium transition-all duration-300 hover:bg-green-700 rounded-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.contact.whatsapp}
                </button>
                <button 
                  onClick={handleCall}
                  className="flex items-center justify-center gap-2 px-6 py-4 border border-background/30 text-background font-medium transition-all duration-300 hover:bg-background hover:text-foreground rounded-lg"
                >
                  <Phone className="w-5 h-5" />
                  {t.contact.call}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div 
            id="contact-form"
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-background/60 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-background/30 text-background placeholder:text-background/40 focus:outline-none focus:border-background transition-colors rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-background/60 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-background/30 text-background placeholder:text-background/40 focus:outline-none focus:border-background transition-colors rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-background/60 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-background/30 text-background placeholder:text-background/40 focus:outline-none focus:border-background transition-colors rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-background/60 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-background/30 text-background placeholder:text-background/40 focus:outline-none focus:border-background transition-colors resize-none rounded-lg"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-background text-foreground font-medium tracking-wide transition-all duration-300 hover:bg-background/90 disabled:opacity-50 rounded-lg"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? '...' : t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
