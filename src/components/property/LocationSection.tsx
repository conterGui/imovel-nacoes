import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { propertyConfig } from "@/config/property";
import { MapPin, Navigation } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// ícone customizado do marker
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const LocationSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const position: LatLngExpression = [38.8308, -9.1705];

  const openMaps = () => {
    const { lat, lng } = propertyConfig.mapCenter;
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  return (
    <section
      id="location"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-warm-white"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="w-12 h-0.5 bg-primary mb-8" />

            <h2 className="heading-primary mb-8">{t.location.title}</h2>
            <p className="body-large text-muted-foreground mb-8">
              {t.location.description}
            </p>

            <div className="flex items-start gap-3 mb-8">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="body-base">{propertyConfig.address}</span>
            </div>

            <div className="w-full h-px bg-primary/30 mb-8" />

            <h3 className="heading-secondary mb-6">
              {t.location.highlights.title}
            </h3>

            <ul className="space-y-4 mb-8">
              {t.location.highlights.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="body-base">{item}</span>
                </li>
              ))}
            </ul>

            <button onClick={openMaps} className="btn-outline">
              <Navigation className="w-5 h-5" />
              {t.location.seeMap}
            </button>
          </div>

          {/* Map */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <MapContainer
              center={position}
              zoom={15}
              scrollWheelZoom={false}
              className="w-full h-96 rounded-lg"
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.carto.com/">CARTO</a> &copy; OpenStreetMap'
              />

              <Marker position={position} icon={customIcon}>
                <Popup>Endereço do imóvel</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
