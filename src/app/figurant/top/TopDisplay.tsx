"use client";
import { Database } from "@/types/supabase";
type Figurant = Database["public"]["Tables"]["profils_figurants"]["Row"];
import InformationCategory from "@/components/display/InformationCategory";
import Avatar from "@/components/Avatar";
import useFigurant from "@/utils/context/figurantContext";

export default function TopDisplay({
  setMode,
}: {
  setMode: (value: boolean) => void;
}) {
  const { figurant, isUser } = useFigurant();
  if (!figurant) return <></>;

  return (
    <>
      <div className="bg-white relative rounded-full overflow-hidden flex border h-[15vh] w-[15vh] items-center justify-center">
        <Avatar figurant={figurant} canUpload={false} onUpload={null} />
      </div>
      <div className="grid justify-between p-3">
        <div className="text-3xl font-bold">
          {figurant.nom} {figurant.prenom}
        </div>
        <div className="flex md:flex-row flex-col md:gap-6 gap-1">
          <InformationCategory
            name="Prestations"
            array={figurant.prestations}
          />
          <InformationCategory
            name="Localisations"
            array={figurant.localisations}
          />
          <InformationCategory
            name="Disponibilités"
            array={figurant.disponibilites}
          />
        </div>
      </div>
      {isUser && (
        <div className="grow flex justify-end">
          <button
            className="rounded-md bg-[#8149a1] hover:bg-[#4a2461] p-3 h-fit text-white text-sm"
            onClick={() => setMode(true)}
          >
            Modifier
          </button>
        </div>
      )}
    </>
  );
}
