"use client";
import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Figurant } from "@/types/client";
import { useState, useEffect } from "react";
import { middleContent } from "@/conf/profile";
import ConfToInput from "@/components/form/ConfToInput";
import useFigurant from "@/utils/context/figurantContext";
import PicturesInProfile from "./PicturesInProfile";
import LinksChange from "./LinksChange";

export default function ProfileChange({
  setMode,
}: {
  setMode: (input: boolean) => void;
}) {
  const { figurant, setFigurant } = useFigurant();
  // for supabase calls
  const supabase = createClientComponentClient<Database>();
  // copy
  const [figurantCopy, setFigurantCopy] = useState<Figurant | null>(null);
  // Function called for the update
  async function updateMiddle() {
    try {
      if (!figurant || !figurantCopy) return;
      let { error } = await supabase
        .from("profils_figurants")
        .update(figurantCopy)
        .eq("username", figurant.username);

      if (error) {
        throw error;
      } else {
        setFigurant(figurantCopy);
      }
    } catch (error) {
      console.log(
        "Error while updating middle section of profile informations : ",
        error
      );
    } finally {
    }
  }

  useEffect(() => {
    if (!figurantCopy && figurant) {
      setFigurantCopy({ ...figurant });
    }
  }, [figurant]);

  return (
    <>
      <div className="bg-white w-full flex md:flex-row flex-col px-[7%] py-[3%] gap-10">
        <div className="flex flex-col gap-6 md:w-[20%]">
          <PicturesInProfile />
          <LinksChange setFigurant={setFigurantCopy} />
        </div>
        <div className="flex flex-col w-[60%] gap-8">
          <div className="flex flex-col gap-3 py-3">
            {figurantCopy &&
              middleContent.map((input, index) => (
                <ConfToInput
                  key={index}
                  figurant={figurantCopy}
                  setFigurant={setFigurantCopy}
                  input={input}
                />
              ))}
          </div>
        </div>
        <div className="grow flex justify-end">
          <button
            className="rounded-md bg-[#8149a1] hover:bg-[#4a2461] p-3 h-fit text-white text-sm"
            onClick={() => {
              setMode(false);
              updateMiddle();
            }}
          >
            Enregistrer
          </button>
        </div>
      </div>
    </>
  );
}
