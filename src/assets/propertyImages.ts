// ============================================
// IMAGENS DO IMÓVEL (TypeScript)
// ============================================

// HERO
import heroImage from "@/assets/hero/DJI_0695.jpg";

// BEFORE / AFTER
import beforeLiving from "@/assets/before/before-living.jpg";
import afterLiving from "@/assets/after/after-living.jpg";
import beforeKitchen from "@/assets/before/before-kitchen.jpg";
import afterKitchen from "@/assets/after/after-kitchen.jpg";
import beforeBedroom from "@/assets/before/before-bedroom.jpg";
import afterBedroom from "@/assets/after/after-bedroom.jpg";
import beforeBathroom from "@/assets/before/before-bathroom.jpg";
import afterBathroom from "@/assets/after/after-bathroom.jpg";

// DRONE
import g1 from "@/assets/gallery/DJI_0688.jpg";
import g2 from "@/assets/gallery/DJI_0689.jpg";
import g3 from "@/assets/gallery/DJI_0690.jpg";
import g4 from "@/assets/gallery/DJI_0691.jpg";
import g5 from "@/assets/gallery/DJI_0692.jpg";
import g6 from "@/assets/gallery/DJI_0693.jpg";
import g7 from "@/assets/gallery/DJI_0694.jpg";
import g8 from "@/assets/gallery/DJI_0696.jpg";

// INTERIOR
import g9 from "@/assets/gallery/DSC06927.jpg";
import g10 from "@/assets/gallery/DSC06928.jpg";
import g11 from "@/assets/gallery/DSC06929.jpg";
import g12 from "@/assets/gallery/DSC06930.jpg";
import g13 from "@/assets/gallery/DSC06931.jpg";
import g14 from "@/assets/gallery/DSC06932.jpg";
import g15 from "@/assets/gallery/DSC06933.jpg";

// BLENDS
import g16 from "@/assets/gallery/DSC06935Blend.jpg";
import g17 from "@/assets/gallery/DSC06940Blend.jpg";
import g18 from "@/assets/gallery/DSC06945Blend.jpg";
import g19 from "@/assets/gallery/DSC06950Blend.jpg";
import g20 from "@/assets/gallery/DSC06955Blend.jpg";
import g21 from "@/assets/gallery/DSC06960Blend.jpg";
import g22 from "@/assets/gallery/DSC06965Blend.jpg";
import g23 from "@/assets/gallery/DSC06970Blend.jpg";
import g24 from "@/assets/gallery/DSC06975Blend.jpg";
import g25 from "@/assets/gallery/DSC06980Blend.jpg";
import g26 from "@/assets/gallery/DSC06985Blend.jpg";
import g27 from "@/assets/gallery/DSC06990Blend.jpg";
import g28 from "@/assets/gallery/DSC06995Blend.jpg";

import g29 from "@/assets/gallery/DSC07000Blend.jpg";
import g30 from "@/assets/gallery/DSC07005Blend.jpg";
import g31 from "@/assets/gallery/DSC07010Blend.jpg";
import g32 from "@/assets/gallery/DSC07020Blend.jpg";
import g33 from "@/assets/gallery/DSC07025Blend.jpg";
import g34 from "@/assets/gallery/DSC07030Blend.jpg";
import g35 from "@/assets/gallery/DSC07035Blend.jpg";
import g36 from "@/assets/gallery/DSC07044Blend.jpg";
import g37 from "@/assets/gallery/DSC07045Blend.jpg";

import g38 from "@/assets/gallery/DSC07055Blend.jpg";
import g39 from "@/assets/gallery/DSC07060Blend.jpg";
import g40 from "@/assets/gallery/DSC07065Blend.jpg";
import g41 from "@/assets/gallery/DSC07070Blend.jpg";
import g42 from "@/assets/gallery/DSC07075Blend.jpg";
import g43 from "@/assets/gallery/DSC07080Blend.jpg";
import g44 from "@/assets/gallery/DSC07085Blend.jpg";
import g45 from "@/assets/gallery/DSC07090Blend.jpg";
import g46 from "@/assets/gallery/DSC07095Blend.jpg";
import g47 from "@/assets/gallery/DSC07100Blend.jpg";
import g48 from "@/assets/gallery/DSC07105Blend.jpg";
import g49 from "@/assets/gallery/DSC07110Blend.jpg";

// EXTRAS
import g50 from "@/assets/gallery/DSC07115.jpg";
import g51 from "@/assets/gallery/DSC07116.jpg";


// =======================
// TIPOS
// =======================
export interface BeforeAfterItem {
  label: string;
  before: string;
  after: string;
}

export interface PropertyImages {
  hero: string;
  gallery: string[];
  beforeAfter: BeforeAfterItem[];
}

// =======================
// EXPORT FINAL
// =======================
export const propertyImages: PropertyImages = {
  hero: heroImage,

  gallery: [
    g1, g2, g3, g4, g5, g6, g7, g8,
    g9, g10, g11, g12, g13, g14, g15,
    g16, g17, g18, g19, g20, g21, g22, g23, g24, g25, g26, g27, g28,
    g29, g30, g31, g32, g33, g34, g35, g36, g37,
    g38, g39, g40, g41, g42, g43, g44, g45, g46, g47, g48, g49,
    g50, g51,
  ],

  beforeAfter: [
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
  ],
};

export const galleryImages = propertyImages.gallery;
export const beforeAfterImages = propertyImages.beforeAfter;
