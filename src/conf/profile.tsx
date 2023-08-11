import { Database } from "@/types/supabase";
type Figurant = Database["public"]["Tables"]["profils_figurants"]["Row"];

interface textConf {
  name: string;
  value: keyof Figurant;
  type: "array" | "single";
  possibilities: string[] | null;
}

interface numberConf {
  name: string;
  value: keyof Figurant;
  type: "number";
  min: number | null;
  max: number | null;
  unit: string | null;
}

interface textInputConf {
  name: string;
  value: keyof Figurant;
  type: "text";
}

export const topContent: (textConf | numberConf)[] = [
  {
    name: "Prestations",
    value: "prestations",
    type: "array",
    possibilities: ["Voix off", "Figurant", "Acteur", "Actrice", "Figurante"],
  },
  {
    name: "Localisations",
    value: "localisations",
    type: "array",
    possibilities: [
      "Paris",
      "Lille",
      "Région parisienne",
      "Marseille",
      "Franchement je sais pas",
    ],
  },
  {
    name: "Disponibilités",
    value: "disponibilites",
    type: "array",
    possibilities: [
      "Week-end",
      "Tous les jours",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
    ],
  },
];

export const middleContent: (textConf | numberConf)[] = [
  {
    name: "Origines",
    value: "origines",
    type: "array",
    possibilities: ["Français", "Européen", "Asiatique", "Américain"],
  },
  {
    name: "Carrure",
    value: "carrure",
    type: "single",
    possibilities: ["Normal", "Massif comme un frigo", "Fin"],
  },
  {
    name: "Couleur des yeux",
    value: "couleur_yeux",
    type: "single",
    possibilities: ["Marron", "Bleu", "Vert", "Orange", "Gris"],
  },
  {
    name: "Longueur des cheveux",
    value: "longueur_cheveux",
    type: "single",
    possibilities: ["Long", "Court", "Mi-Long", "Très court", "Très long"],
  },
  {
    name: "Type des cheveux",
    value: "type_cheveux",
    type: "single",
    possibilities: ["Frisés", "Raides", "Crépus", "Ondulés", "Rasés"],
  },
  {
    name: "Couleur des cheveux",
    value: "couleur_cheveux",
    type: "single",
    possibilities: ["Roux", "Noirs", "Bruns", "Blonds", "Teints"],
  },
  {
    name: "Signes particuliers",
    value: "signes_particuliers",
    type: "array",
    possibilities: [
      "Tâches de rousseurs",
      "Peau très pale",
      "Cicatrices",
      "Handicap visible",
    ],
  },
  {
    name: "Style",
    value: "style",
    type: "array",
    possibilities: [
      "Vintage",
      "Classique",
      "Friperie",
      "Années 80",
      "Décontracté",
      "Rétro",
    ],
  },
  {
    name: "Tour de poitrine",
    value: "tour_poitrine",
    type: "number",
    min: 40,
    max: 200,
    unit: "cm",
  },
  {
    name: "Tour de hanche",
    value: "tour_hanche",
    type: "number",
    min: 80,
    max: 200,
    unit: "cm",
  },
  {
    name: "Tour de taille",
    value: "tour_taille",
    type: "number",
    min: 50,
    max: 200,
    unit: "cm",
  },
  {
    name: "Taille",
    value: "taille",
    type: "number",
    min: 90,
    max: 230,
    unit: "cm",
  },
  {
    name: "Poids",
    value: "poids",
    type: "number",
    min: 40,
    max: 250,
    unit: "kg",
  },
  {
    name: "Pointure",
    value: "pointure",
    type: "number",
    min: 30,
    max: 50,
    unit: "",
  },
];

export const linksContent: textInputConf[] = [
  {
    name: "Votre bande démo",
    value: "bande_demo",
    type: "text",
  },
  {
    name: "Lien Instagram",
    value: "instagram",
    type: "text",
  },
  {
    name: "Lien TikTok",
    value: "tiktok",
    type: "text",
  },
  {
    name: "Lien Facebook",
    value: "facebook",
    type: "text",
  },
  {
    name: "Site internet",
    value: "site",
    type: "text",
  },
];
