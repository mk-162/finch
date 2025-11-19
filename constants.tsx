
import React from 'react';
import { Shovel, Scissors, TreeDeciduous, Ruler, PaintBucket, Sprout } from 'lucide-react';
import { ServiceItem, Testimonial } from './types';

export const PHONE_NUMBER = "07847 358 901";
export const EMAIL_ADDRESS = "finch@finchbanham.com"; // Speculative update for coolness
export const LOCATION = "Ashtead & Mole Valley";

// Please ensure your image file is named 'finch.jpg' and placed in the public folder
export const HERO_IMAGE_URL = "/finch.jpg"; 
export const PORTRAIT_PLACEHOLDER = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";

export const SERVICES: ServiceItem[] = [
  {
    id: 'landscaping',
    title: 'Landscaping',
    description: 'Complete transformation. Patios, pathways, and structural features built to last.',
    icon: <Ruler />,
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'Regular upkeep. Weeding, pruning, and keeping things tight year-round.',
    icon: <Shovel />,
  },
  {
    id: 'lawn-care',
    title: 'Lawn Specialist',
    description: 'Striping, edging, and treatment. Professional finishes for proper lawns.',
    icon: <Scissors />,
  },
  {
    id: 'patios',
    title: 'Paving & Stone',
    description: 'Expert installation of sandstone, porcelain, or block paving.',
    icon: <PaintBucket />,
  },
  {
    id: 'planting',
    title: 'Planting',
    description: 'Sourcing and planting trees and shrubs that actually thrive here.',
    icon: <Sprout />,
  },
  {
    id: 'trees',
    title: 'Hedge Work',
    description: 'Sharp lines on hedges and small tree work to keep boundaries neat.',
    icon: <TreeDeciduous />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Ashtead",
    text: "Finch did an amazing job on our patio. Polite, hardworking, and left everything spotless.",
    rating: 5
  },
  {
    id: 2,
    name: "David Miller",
    location: "Box Hill",
    text: "A proper local lad who knows his stuff. Transformed our mess into a usable garden in two days.",
    rating: 5
  },
  {
    id: 3,
    name: "Mrs. Thompson",
    location: "Leatherhead",
    text: "Reliable maintenance. Finch comes every two weeks and the lawn has never looked better.",
    rating: 5
  }
];
