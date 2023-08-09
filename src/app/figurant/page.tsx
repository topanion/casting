import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import Figurant from "./Figurant";
import SideNav from "@/components/nav/SideNav";
import Navbar from "@/components/nav/Navbar";

export default async function ProfilFigurant({}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className="bg-gray-100 flex flex-row">
      <Navbar />
      <SideNav />
    </main>
  );
}
