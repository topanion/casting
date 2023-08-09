"use client";
import { Database } from "@/types/supabase";
type Figurant = Database["public"]["Tables"]["profils_figurants"]["Row"];
import { useState } from "react";
import TopChange from "./TopChange";
import TopDisplay from "./TopDisplay";

export default function TopProfile({}: {}) {
  const [changeMode, setChangeMode] = useState<boolean>(false);

  return (
    <div className="mt-[7vh] flex md:flex-row flex-col p-8 md:gap-6 gap-2 px-[7%]">
      {!changeMode ? (
        <TopDisplay setMode={setChangeMode} />
      ) : (
        <TopChange setMode={setChangeMode} />
      )}
    </div>
  );
}
