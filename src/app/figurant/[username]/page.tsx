import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import Figurant from "../Figurant";
import SideNav from "@/components/nav/SideNav";
import Navbar from "@/components/nav/Navbar";
import { FigurantProvider } from "@/utils/context/figurantContext";

export default async function PageFigurant({
  params,
}: {
  params: { username: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className="bg-gray-100 flex flex-row">
      <Navbar />
      <SideNav />
      <FigurantProvider>
        <Figurant session={session} username={params.username} />
      </FigurantProvider>
    </main>
  );
}
