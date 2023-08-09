import { Database } from "@/types/supabase";
import { useState, useEffect } from "react";
import AddPhotosModal from "./AddPhotosModal";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import GalleryModal from "@/components/images/GalleryModal";
import { photosToUrlArray } from "@/utils/pictures";
import useFigurant from "@/utils/context/figurantContext";

export default function PhotosDisplay({
  setMode,
}: {
  setMode: (input: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const supabase = createClientComponentClient<Database>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const { allUrl, setAllUrl, photos, figurant, setPhotos, isUser } =
    useFigurant();

  // Setup the pictures with their links
  useEffect(() => {}, [photos]);

  //
  const onImageClick = (index: number) => {
    setIndex(index);
    setModalOpen(true);
  };

  const onArrowClick = (input: number) => {
    if (index + input < 0 || !allUrl || !allUrl[index + input]) return;
    else setIndex(input + index);
  };

  return (
    <>
      <div className="bg-white flex md:flex-row flex-col px-[7%] py-[3%] gap-10">
        {photos && allUrl && modalOpen && (
          <GalleryModal
            setOpen={setModalOpen}
            setIndex={onArrowClick}
            url={allUrl[index]}
          />
        )}

        <>
          {figurant && isOpen && <AddPhotosModal setOpen={setIsOpen} />}
          <div className="flex flew-wrap gap-6">
            {photos &&
              allUrl &&
              photos.map((e, i) => {
                return (
                  <div
                    key={"gallery picture " + i}
                    className="md:max-h-[30vh] rounded-md max-h-[50vh] hover:cursor-pointer"
                    onClick={() => onImageClick(i)}
                  >
                    {allUrl[i] && (
                      <>
                        <img
                          rel="preload"
                          className="rounded-md object-cover h-full w-full"
                          src={allUrl[i]}
                        />
                      </>
                    )}
                  </div>
                );
              })}
          </div>
          {isUser && (
            <div className="grow flex justify-end">
              <button
                className="rounded-md bg-[#8149a1] hover:bg-[#4a2461] p-3 h-fit text-white text-sm"
                onClick={() => setIsOpen(true)}
              >
                Ajouter
              </button>
            </div>
          )}
        </>
      </div>
    </>
  );
}
