"use client";
import useFigurant from "@/utils/context/figurantContext";
import { linksContent } from "@/conf/profile";
import ConfToInput from "@/components/form/ConfToInput";
import { Figurant } from "@/types/client";

export default function LinksChange({
  setFigurant,
}: {
  setFigurant: (input: Figurant) => void;
}) {
  const { figurant } = useFigurant();

  if (!figurant) return <></>;
  return (
    <div className="flex flex-col gap-3">
      <>
        {linksContent.map((e) => {
          return (
            <ConfToInput
              key={e.name}
              figurant={figurant}
              input={e}
              setFigurant={setFigurant}
            />
          );
        })}
      </>
    </div>
  );
}
