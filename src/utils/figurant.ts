import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";
import { Figurant, Photos } from "@/types/client";

export const getFigurantByUsername = async (
  username: string | null,
  supabase: SupabaseClient<Database>
) => {
  try {
    if (!username || !supabase) throw new Error("getFigurant lack arguments");

    let { data, error, status } = await supabase
      .from("profils_figurants")
      .select(`*`)
      .eq("username", username)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      return data;
    }
  } catch (error) {
    console.log("error while getting figurant by username : ", error);
  }
};

export const getFigurantPhotosById = async (
  id: number | null,
  supabase: SupabaseClient<Database>
) => {
  try {
    if (!id || !supabase) throw new Error("getFigurantPhotos lack arguments");

    let { data, error, status } = await supabase
      .from("photos_figurants")
      .select(`*`)
      .eq("id_figurant", id);

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      return data;
    }
  } catch (error) {
    console.log("error while getting figurant photos by id : ", error);
  }
};
