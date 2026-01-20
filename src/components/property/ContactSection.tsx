import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { propertyConfig } from "@/config/property";
import { FileText, MessageCircle, Paperclip, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Tenho interesse no imóvel e gostaria de mais informações.",
    );
    window.open(
      `https://wa.me/${propertyConfig.whatsapp}?text=${message}`,
      "_blank",
    );
  };

  const handleCall = () => {
    window.open(`tel:${propertyConfig.phone.replace(/\s/g, "")}`, "_self");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-charcoal text-warm-white"
    >
      <div className="container-wide mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Gold accent line */}
            <div className="w-16 h-0.5 bg-primary mb-6" />

            <h2 className="heading-primary text-warm-white mb-4">
              {t.contact.title}
            </h2>

            <p className="body-large text-warm-white/70 mb-12 max-w-2xl">
              {t.contact.subtitle}
            </p>

            {/* Seller Info Card */}
            <div className="bg-warm-white/5 border border-warm-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
              <div className="flex items-center gap-5">
                {/* Seller Photo */}
                <div className="relative flex-shrink-0">
                  <img
                    src={propertyConfig.seller.photo}
                    alt={`Foto de ${propertyConfig.seller.name}`}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-2 ring-primary/30 antialiased"
                    loading="lazy"
                    style={{ imageRendering: "auto" }}
                  />
                </div>

                {/* Seller Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-warm-white mb-1">
                    {propertyConfig.seller.name}
                  </h3>
                  <p className="text-sm md:text-base text-warm-white/60">
                    {propertyConfig.seller.agency}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-4 max-w">
              <button
                onClick={handleCall}
                className="group relative flex items-center justify-center gap-3 px-8 py-5 border-2 border-primary text-primary font-semibold uppercase text-sm tracking-wider transition-all duration-300 hover:bg-primary hover:text-charcoal hover:scale-105 active:scale-100 rounded overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Phone className="w-5 h-5 relative z-10 transition-transform group-hover:rotate-12" />
                <span className="relative z-10">{t.contact.call}</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-green-600 text-white font-semibold uppercase text-sm tracking-wider transition-all duration-300 hover:bg-green-700 hover:scale-105 active:scale-100 rounded shadow-lg hover:shadow-green-600/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <MessageCircle className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
                <span className="relative z-10">{t.contact.whatsapp}</span>
              </button>
            </div>

            {/* Optional: Add contact info */}
            <div className="mt-10 pt-8 border-t border-warm-white/10">
              <div className="flex flex-wrap gap-6 text-sm text-warm-white/60">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>{propertyConfig.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span>{t.contact.available}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
