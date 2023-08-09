import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import AccountForm from "./AccountForm";

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("user is ", session?.user);

  return (
    <div className="w-screen h-screen flex">
      <AccountForm session={session} />
    </div>
  );
}
