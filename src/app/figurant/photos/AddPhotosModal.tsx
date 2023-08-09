"use client";
import { Database } from "@/types/supabase";
import { Figurant, Photos } from "@/types/client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import Image from "next/image";
import {
  createNewPictureLinkWithFigurant,
  uploadPictureToServer,
} from "@/utils/pictures";
import useFigurant from "@/utils/context/figurantContext";

export default function AddPhotosModal({
  setOpen,
}: {
  setOpen: (input: boolean) => void;
}) {
  const supabase = createClientComponentClient<Database>();
  const [pictureUrl, setPictureUrl] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { figurant, photos, setPhotos } = useFigurant();

  const onPictureUpload: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      setUploadedFile(file);

      // Read the file as a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPictureUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {}
  };

  const onRegisterClick = async () => {
    try {
      if (!uploadedFile || !figurant) throw new Error("no file");

      let path = await uploadPictureToServer(uploadedFile, supabase, figurant);
      let inserted = {
        id_figurant: figurant.id,
        url: path,
        tags: [],
        role: "",
      };
      let createdLink = await createNewPictureLinkWithFigurant(
        inserted,
        supabase
      );

      if (photos && createdLink) {
        let tmpPhotos: Photos[] | null = [...photos];
        tmpPhotos.push(createdLink);
        setPhotos(tmpPhotos);
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <>
      <div
        className="fixed z-50 top-0 left-0 h-screen w-screen bg-black/80 flex justify-center items-center"
        onClick={() => setOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="rounded-md bg-white p-3 flex flex-row gap-6 justify-center items-center"
        >
          <div className="flex flex-col gap-2">
            <div className="rounded-md p-3 border hover:cursor-pointer">
              <label htmlFor="imageUpload">Télécharger une photo</label>
              <input
                className="hidden absolute"
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={onPictureUpload}
              />
            </div>
            <button
              className="rounded-md p-3 border"
              onClick={() => onRegisterClick()}
              disabled={!uploadedFile}
            >
              Enregistrer
            </button>
          </div>
          <div className="relative h-[30vh] w-[30vw]">
            {pictureUrl && (
              <Image
                src={pictureUrl}
                alt="preview picture upload"
                fill
                style={{ objectFit: "contain" }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
