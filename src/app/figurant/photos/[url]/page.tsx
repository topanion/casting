import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

export default async function Photo({
  params: { url },
}: {
  params: { url: string };
}) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.storage
    .from("figurant_pictures")
    .getPublicUrl(url);

  if (!data) {
    notFound();
  }

  if (data) {
    return data.publicUrl;
  }
}
