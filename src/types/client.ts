import { Database } from "@/types/supabase";

export type Figurant = Database["public"]["Tables"]["profils_figurants"]["Row"];
export type Photos =
  | Database["public"]["Tables"]["photos_figurants"]["Row"]
  | null;
