import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-warm-white"
    >
      <div className="container-wide">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Gold accent line */}
          <div className="w-12 h-0.5 bg-primary mb-8" />

          {/* Section title */}
          <h2 className="heading-primary mb-12">{t.about.title}</h2>

          {/* Description */}
          <div className="space-y-8">
            <p className="body-large text-foreground">{t.about.description}</p>

            <div className="w-full h-px bg-primary/30" />

            <p className="body-base text-muted-foreground whitespace-pre-line">
              {t.about.longDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
