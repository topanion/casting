"use client";
import { Database } from "@/types/supabase";
import InformationCategory from "@/components/display/InformationCategory";
type Figurant = Database["public"]["Tables"]["profils_figurants"]["Row"];
type Photos = Database["public"]["Tables"]["photos_figurants"]["Row"] | null;

import { useState } from "react";
import SectionsButtons from "@/components/buttons/SectionsButtons";
import ProfileChange from "./profil/ProfileChange";
import ProfileDisplay from "./profil/ProfileDisplay";
import PhotosDisplay from "./photos/PhotosDisplay";

const sections = ["Profil", "Photos", "Expériences"];

export default function MiddleSections({}: {}) {
  const [section, setSection] = useState(0);
  const [changeMode, setChangeMode] = useState<boolean>(false);

  const onSectionChange = (value: number) => {
    setChangeMode(false);
    setSection(value);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full px-[7%] border-b-[2px] border-[#8149a1]">
          <SectionsButtons
            sections={sections}
            currentSection={section}
            onClick={onSectionChange}
          />
        </div>
        {section === 0 && (
          <>
            {!changeMode ? (
              <ProfileDisplay setMode={setChangeMode} />
            ) : (
              <ProfileChange setMode={setChangeMode} />
            )}
          </>
        )}
        {section === 1 && (
          <>{!changeMode ? <PhotosDisplay setMode={setChangeMode} /> : <></>}</>
        )}
      </div>
    </>
  );
}
