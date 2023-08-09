"use client";
import React, { useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
type Figurant = Database["public"]["Tables"]["profils_figurants"]["Row"];

export default function Avatar({
  onUpload,
  figurant,
  canUpload,
}: {
  onUpload: null | ((input: Figurant) => void);
  figurant: Figurant;
  canUpload: true | false;
}) {
  const supabase = createClientComponentClient<Database>();
  const [avatarUrl, setAvatarUrl] = useState<Figurant["avatar_url"] | null>(
    null
  );
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
      } catch (error) {
        console.log("Error downloading image: ", error);
      }
    }

    if (!avatarUrl)
      downloadImage(figurant.avatar_url ? figurant.avatar_url : "");
  }, [avatarUrl, supabase]);

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${figurant.id}-${Math.random()}.${fileExt}`;

      if (onUpload) {
        let prevState = { ...figurant, avatar_url: filePath };

        onUpload(prevState);
      }

      let { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      alert("Error uploading avatar!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative h-full w-full">
      {avatarUrl ? (
        <Image
          fill
          style={{ objectFit: "cover" }}
          src={avatarUrl}
          alt="Avatar"
          className="avatar image"
        />
      ) : (
        <div className="" style={{}} />
      )}
      {canUpload && (
        <div className="h-full w-full absolute flex justify-center z-20">
          <label className="w-full h-full" htmlFor="avatarUpload"></label>
          <input
            className="hidden absolute"
            type="file"
            id="avatarUpload"
            accept="image/*"
            onChange={uploadAvatar}
            disabled={uploading}
          />
        </div>
      )}
    </div>
  );
}
