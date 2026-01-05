/**
 * ============================================
 * PÁGINA PRINCIPAL DO IMÓVEL
 * ============================================
 * 
 * Este é o template principal do site imobiliário.
 * 
 * COMO EDITAR:
 * - Para alterar dados do imóvel: edite src/config/property.ts
 * - Para alterar textos: edite src/i18n/pt.json ou en.json
 * - Para ativar/desativar seções: altere sections em property.ts
 * 
 * SEÇÕES DISPONÍVEIS:
 * - HeroSection: Capa com vídeo/imagem
 * - AboutSection: Descrição do imóvel
 * - DetailsSection: Informações técnicas
 * - GallerySection: Galeria de fotos
 * - BeforeAfterSection: Comparação antes/depois
 * - VideoSection: Vídeo do tour virtual
 * - LocationSection: Mapa e localização
 * - ContactSection: Formulário e CTAs
 * 
 * Para remover uma seção, basta comentar ou deletar a linha correspondente.
 */

import React from 'react';
import { propertyConfig } from '@/config/property';

// Componentes do site
import Navigation from '@/components/property/Navigation';
import HeroSection from '@/components/property/HeroSection';
import AboutSection from '@/components/property/AboutSection';
import DetailsSection from '@/components/property/DetailsSection';
import GallerySection from '@/components/property/GallerySection';
import BeforeAfterSection from '@/components/property/BeforeAfterSection';
import VideoSection from '@/components/property/VideoSection';
import LocationSection from '@/components/property/LocationSection';
import ContactSection from '@/components/property/ContactSection';
import Footer from '@/components/property/Footer';
import WhatsAppFloat from '@/components/property/WhatsAppFloat';

const Index: React.FC = () => {
  const { sections } = propertyConfig;

  return (
    <div className="min-h-screen bg-background">
      {/* Navegação fixa */}
      <Navigation />

      {/* Seções do site - comente/descomente para ativar/desativar */}
      <main>
        {sections.hero && <HeroSection />}
        {sections.about && <AboutSection />}
        {sections.details && <DetailsSection />}
        {sections.gallery && <GallerySection />}
        {sections.beforeAfter && <BeforeAfterSection />}
        {sections.video && <VideoSection />}
        {sections.location && <LocationSection />}
        {sections.contact && <ContactSection />}
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
