import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";
import { Figurant, Photos } from "@/types/client";

// uploads a picture to server (for a figurant)
export const uploadPictureToServer = async (
  file: File,
  supabase: SupabaseClient<Database>,
  figurant: Figurant
) => {
  try {
    const fileExt = file?.name.split(".").pop();
    const filePath = `${
      figurant.id
    }-gallery_picture-${Math.random()}.${fileExt}`;

    let { error: uploadError } = await supabase.storage
      .from("figurant_pictures")
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    } else return filePath;
  } catch (error) {
    throw error;
  }
};

//
export const createNewPictureLinkWithFigurant = async (
  inserted: { id_figurant: number; url: string; tags: string[]; role: string },
  supabase: SupabaseClient<Database>
) => {
  if (!inserted) throw new Error("unvalid picture");

  try {
    const { data, error } = await supabase
      .from("photos_figurants")
      .insert(inserted)
      .select()
      .single();
    if (error) throw error;

    if (data) return data;
  } catch (error) {
    console.log("error while creating figurant to picture link");
    throw error;
  }
};

// create an array of url from a Photo array
export const photosToUrlArray = (
  photos: Photos[] | null,
  supabase: SupabaseClient<Database>,
  table: string
): string[] | null => {
  if (!photos) return null;

  let tmp: string[] = photos?.map((e) => {
    if (!e?.url) return "";
    const { data } = supabase.storage.from(table).getPublicUrl(e.url);

    if (data) {
      return data.publicUrl;
    } else {
      return "";
    }
  });

  return tmp;
};
