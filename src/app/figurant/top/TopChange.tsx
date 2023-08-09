"use client";
import ArrayChoice from "@/components/form/ArrayChoice";
import { Database } from "@/types/supabase";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";
import Figurant from "../Figurant";
type Figurant = Database["public"]["Tables"]["profils_figurants"]["Row"];
import { topContent } from "@/conf/profile";
import ConfToInput from "@/components/form/ConfToInput";
import Avatar from "@/components/Avatar";
import useFigurant from "@/utils/context/figurantContext";

export default function TopChange({
  setMode,
}: {
  setMode: (value: boolean) => void;
}) {
  const supabase = createClientComponentClient<Database>();
  const { figurant, setFigurant } = useFigurant();

  async function updateTop() {
    if (!figurant) return;
    try {
      let { error } = await supabase
        .from("profils_figurants")
        .update(figurant)
        .eq("username", figurant.username);

      if (error) {
        throw error;
      } else {
      }
    } catch (error) {
      console.log("error on update top ", error);
    } finally {
    }
  }

  return (
    <>
      {figurant && (
        <>
          <div className="bg-white relative rounded-full overflow-hidden flex border h-[15vh] w-[15vh] items-center justify-center">
            <Avatar
              figurant={figurant}
              onUpload={setFigurant}
              canUpload={true}
            />
          </div>
          <div className="flex flex-col justify-between p-3">
            <div className="text-3xl font-bold">
              {figurant.nom} {figurant.prenom}
            </div>
            <div className="flex flex-col md:gap-6 gap-1">
              {topContent.map((input, index) => (
                <ConfToInput
                  key={index}
                  figurant={figurant}
                  setFigurant={setFigurant}
                  input={input}
                />
              ))}
            </div>
          </div>
        </>
      )}
      <div className="grow flex justify-end">
        <button
          className="rounded-md bg-[#8149a1] hover:bg-[#4a2461] p-3 h-fit text-white text-sm"
          onClick={() => {
            updateTop();
            setMode(false);
          }}
        >
          Enregistrer
        </button>
      </div>
    </>
  );
}
