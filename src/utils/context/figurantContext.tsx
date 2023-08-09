"use client";
import { createContext, useContext } from "react";
import { Photos, Figurant } from "@/types/client";
import { useState } from "react";

type FigurantState = {
  figurant: Figurant | null;
  setFigurant(input: Figurant): void;
  photos: Photos[] | null;
  setPhotos(input: Photos[]): void;
  allUrl: string[] | null;
  setAllUrl(input: string[] | null): void;
  isUser: boolean | null;
  setIsUser(input: boolean): void;
};

const FigurantContext = createContext<FigurantState | null>(null);

const useFigurant = (): FigurantState => {
  const context = useContext(FigurantContext);

  if (!context) {
    throw new Error("Use FigurantProvider as parent component !");
  }

  return context;
};

export const FigurantProvider = (props: React.PropsWithChildren) => {
  const [figurant, setFigurant] = useState<Figurant | null>(null);
  const [photos, setPhotos] = useState<Photos[] | null>(null);
  const [allUrl, setAllUrl] = useState<string[] | null>(null);
  const [isUser, setIsUser] = useState<boolean | null>(null);

  return (
    <FigurantContext.Provider
      value={{
        figurant,
        setFigurant,
        photos,
        setPhotos,
        allUrl,
        setAllUrl,
        isUser,
        setIsUser,
      }}
    >
      {props.children}
    </FigurantContext.Provider>
  );
};

export default useFigurant;
