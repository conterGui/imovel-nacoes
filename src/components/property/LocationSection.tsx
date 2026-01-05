import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { propertyConfig } from '@/config/property';
import { MapPin, Navigation } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const openMaps = () => {
    const { lat, lng } = propertyConfig.mapCenter;
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [propertyConfig.mapCenter.lng, propertyConfig.mapCenter.lat],
        zoom: 15,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker
      new mapboxgl.Marker({ color: '#000000' })
        .setLngLat([propertyConfig.mapCenter.lng, propertyConfig.mapCenter.lat])
        .addTo(map.current);

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector('input');
    if (input?.value) {
      setMapboxToken(input.value);
    }
  };

  return (
    <section 
      id="location" 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="heading-primary mb-8">
              {t.location.title}
            </h2>

            <p className="body-large text-muted-foreground mb-8">
              {t.location.description}
            </p>

            <div className="flex items-start gap-3 mb-8">
              <MapPin className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
              <span className="body-base">{propertyConfig.address}</span>
            </div>

            <div className="divider mb-8" />

            <h3 className="heading-secondary mb-6">
              {t.location.highlights.title}
            </h3>

            <ul className="space-y-4 mb-8">
              {t.location.highlights.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  <span className="body-base">{item}</span>
                </li>
              ))}
            </ul>

            <button onClick={openMaps} className="btn-secondary">
              <Navigation className="w-5 h-5" />
              Ver no Google Maps
            </button>
          </div>

          {/* Map */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {showTokenInput ? (
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-8">
                <div className="text-center max-w-sm">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="body-small text-muted-foreground mb-4">
                    Para ver o mapa interativo, insira seu token público do Mapbox
                  </p>
                  <form onSubmit={handleTokenSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="pk.eyJ1Ijoi..."
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                    >
                      Carregar Mapa
                    </button>
                  </form>
                  <button 
                    onClick={openMaps}
                    className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Ou abrir no Google Maps →
                  </button>
                </div>
              </div>
            ) : (
              <div 
                ref={mapContainer}
                className="aspect-square rounded-lg overflow-hidden shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
