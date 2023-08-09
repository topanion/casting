"use client";
import { Database } from "@/types/supabase";
import InformationCategory from "@/components/display/InformationCategory";
import { Figurant } from "@/types/client";

export default function Mensurations({ figurant }: { figurant: Figurant }) {
  return (
    <>
      <div className="flex flex-row gap-2">
        <InformationCategory
          name="Tour de poitrine"
          array={[`${figurant.tour_poitrine || "0"} cm`]}
        />
        <InformationCategory
          name="Tour de hanche"
          array={[`${figurant.tour_hanche || "0"} cm`]}
        />
        <InformationCategory
          name="Tour de taille"
          array={[`${figurant.tour_taille || "0"} cm`]}
        />
      </div>
      <div className="flex flex-row gap-2">
        <InformationCategory
          name="Taille"
          array={[`${figurant.taille || "0"} cm`]}
        />
        <InformationCategory
          name="Poids"
          array={[`${figurant.poids || "0"} kg`]}
        />
        <InformationCategory
          name="Pointure"
          array={[`${figurant.pointure || "0"}`]}
        />
      </div>
    </>
  );
}
