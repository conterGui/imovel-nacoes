import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { propertyConfig } from '@/config/property';
import { MessageCircle, Phone } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Tenho interesse no imóvel.');
    window.open(`https://wa.me/${propertyConfig.whatsapp}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${propertyConfig.phone.replace(/\s/g, '')}`, '_self');
  };

  const showVideo = propertyConfig.heroVideo && !isMobile;

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image */}
      {showVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={propertyConfig.heroVideo} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${propertyConfig.heroImage})` }}
        />
      )}

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-20 md:pb-32">
        <div className="container-wide">
          {/* Title */}
          <h1 
            className="heading-display text-white mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p 
            className="body-large text-white/80 max-w-2xl mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            <button onClick={handleCall} className="btn-primary bg-white text-foreground hover:bg-white/90">
              <Phone className="w-5 h-5" />
              {t.hero.cta}
            </button>
            <button onClick={handleWhatsApp} className="btn-secondary border-white text-white hover:bg-white hover:text-foreground">
              <MessageCircle className="w-5 h-5" />
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1000ms' }}>
        <div className="w-px h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
