"use client";
import { Database } from "@/types/supabase";
import InformationCategory from "@/components/display/InformationCategory";
import { Figurant } from "@/types/client";

export default function Apparence({ figurant }: { figurant: Figurant }) {
  return (
    <>
      <InformationCategory name="Origines" array={figurant.origines} />
      <InformationCategory name="Carrure" array={[`${figurant.carrure}`]} />
      <InformationCategory
        name="Couleurs des yeux"
        array={[`${figurant.couleur_yeux}`]}
      />
      <InformationCategory
        name="Cheveux"
        array={[
          `${figurant.longueur_cheveux}`,
          `${figurant.type_cheveux}`,
          `${figurant.couleur_cheveux}`,
        ]}
      />
      <InformationCategory
        name="Signes particuliers"
        array={figurant.signes_particuliers}
      />
      <InformationCategory name="Style" array={figurant.style} />
    </>
  );
}
