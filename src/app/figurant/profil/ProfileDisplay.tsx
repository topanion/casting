"use client";
import Apparence from "./Apparence";
import Mensurations from "./Mensurations";
import useFigurant from "@/utils/context/figurantContext";
import PicturesInProfile from "./PicturesInProfile";
import Liens from "./Liens";

export default function ProfileDisplay({
  setMode,
}: {
  setMode: (input: boolean) => void;
}) {
  const { figurant, isUser } = useFigurant();

  return (
    <>
      <div className="bg-white w-full flex md:flex-row flex-col px-[7%] py-[3%] gap-10">
        <div className="flex flex-col gap-6 md:w-[20%]">
          <PicturesInProfile />
          <Liens />
        </div>

        <div className="flex flex-col w-[60%] gap-8">
          <div className="flex flex-col gap-3 py-3">
            <h1 className="text-2xl">Apparence</h1>
            {figurant && <Apparence figurant={figurant} />}
          </div>
          <div className="flex flex-col gap-3 py-3">
            <h1 className="text-2xl">Mensurations</h1>
            {figurant && <Mensurations figurant={figurant} />}
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
      </div>
    </>
  );
}
