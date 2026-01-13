// ============================================
// CONFIGURAÇÃO DO IMÓVEL
// Edite este arquivo para personalizar o imóvel
// ============================================

// Imagens importadas como ES6 modules
import agentPhoto from '@/assets/agent-photo.jpg';
import { galleryImages } from "@/assets/propertyImages";
import { propertyImages } from '@/assets/propertyImages';

export const propertyConfig = {
  // Informações básicas
  price: "587 000 €",
  area: 200,
  totalArea: 277,
  bedrooms: 4,
  bathrooms: 3,
  parking: 4,
  yearBuilt: 2003,
  lotSize: 917,
  condition: "Usado",
  energyRating: "D",

  // Contato
  whatsapp: "351965039757", // Número com código do país, sem símbolos
  phone: "+351 965039757",
  email: "sandrasemedo@century21.pt",

  // Localização - Loures Shopping, Loures, Lisboa, Portugal
  address: "Av. Liberdade 41, 2674-501 Loures, Portugal",
  mapCenter: { lat: 38.8308, lng: -9.1705 },
  
  // Pontos de interesse (para o mapa)
  pointsOfInterest: [
    { name: "Loures Shopping", distance: "0 min" },
    { name: "Metro Odivelas", distance: "10 min" },
    { name: "Hospital Beatriz Ângelo", distance: "5 min" },
  ],

  // Agente imobiliário
  seller:{
    photo: agentPhoto, // URL ou caminho para a foto do agente
    name: "Sandra Semedo",
    agency: "Century 21",
  },


  // Seções ativas (true = visível, false = oculto)
  sections: {
    hero: true,
    about: true,
    details: true,
    gallery: true,
    beforeAfter: true,
    video: false, // Ative quando tiver um vídeo de tour
    location: true,
    contact: true,
  },

  // Galeria de imagens
  gallery: propertyImages.gallery,

  // Before/After comparisons - Um para cada cômodo
  /*beforeAfter: [
    {
      label: "livingRoom",
      before: beforeLiving,
      after: afterLiving,
    },
    {
      label: "kitchen",
      before: beforeKitchen,
      after: afterKitchen,
    },
    {
      label: "bedroom",
      before: beforeBedroom,
      after: afterBedroom,
    },
    {
      label: "bathroom",
      before: beforeBathroom,
      after: afterBathroom,
    },
  ],*/

  // Vídeos
  heroVideo: "", // URL do vídeo do hero (deixe vazio para usar imagem)
  heroImage: propertyImages.hero, // Imagem de fallback/mobile
  tourVideo: "", // URL do vídeo do tour virtual
};
