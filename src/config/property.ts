// ============================================
// CONFIGURAÇÃO DO IMÓVEL
// Edite este arquivo para personalizar o imóvel
// ============================================

// Imagens importadas como ES6 modules
import agentPhoto from '@/assets/agent-photo.jpg';
import { propertyImages, beforeAfterImages} from '@/assets/propertyImages';


export const propertyConfig = {
  // Informações básicas
  price: "850 000 €",
  area: 125.7,
  totalArea: 172,
  bedrooms: 3,
  bathrooms: 2,
  parking: 2,
  yearBuilt: 1998,
  //lotSize: 917,
  condition: "Renovado",
  energyRating: "C",

  // Contato
  whatsapp: "351965039757", // Número com código do país, sem símbolos
  phone: "+351 965039757",
  email: "sandrasemedo@century21.pt",

  // Localização - Loures Shopping, Loures, Lisboa, Portugal
  address: "Alameda dos Oceanos 100, 1990-238 Lisboa",
  mapCenter: { lat: 38.779944, lng: -9.095222 },


  
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
  beforeAfter: [
    {
      label: propertyImages.beforeAfter[0].label,
      before: propertyImages.beforeAfter[0].before,
      after: propertyImages.beforeAfter[0].after,
    },
    {
      label: propertyImages.beforeAfter[1].label,
      before: propertyImages.beforeAfter[1].before,
      after: propertyImages.beforeAfter[1].after,
    },
    {
      label: propertyImages.beforeAfter[2].label,
      before: propertyImages.beforeAfter[2].before,
      after: propertyImages.beforeAfter[2].after,
    },
  ],

  // Vídeos
  heroVideo: "", // URL do vídeo do hero (deixe vazio para usar imagem)
  heroImage: propertyImages.hero, // Imagem de fallback/mobile
  tourVideo: "", // URL do vídeo do tour virtual
};
