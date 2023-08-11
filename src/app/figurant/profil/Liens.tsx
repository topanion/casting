"use client";
import { Database } from "@/types/supabase";
import InformationCategory from "@/components/display/InformationCategory";
import useFigurant from "@/utils/context/figurantContext";
import SingleInformation from "@/components/display/SingleInformation";

export default function Liens() {
  const { figurant } = useFigurant();

  if (!figurant) return <></>;
  return (
    <div className="flex flex-col gap-3">
      <SingleInformation name="Votre bande démo" value={figurant.bande_demo} />
      <p>Présence en ligne</p>
      <SingleInformation name="Lien Instagram" value={figurant.instagram} />
      <SingleInformation name="Lien TikTok" value={figurant.tiktok} />
      <SingleInformation name="Lien Facebook" value={figurant.facebook} />
      <SingleInformation name="Site internet" value={figurant.site} />
    </div>
  );
}
