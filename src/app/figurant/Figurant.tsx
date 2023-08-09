"use client";
import { useCallback, useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import Loading from "@/components/Loading";
import TopProfile from "./top/TopProfile";
import MiddleSections from "./MiddleSections";
import { getFigurantByUsername, getFigurantPhotosById } from "@/utils/figurant";
type Figurant = Database["public"]["Tables"]["profils_figurants"]["Row"] | null;
type Photos = Database["public"]["Tables"]["photos_figurants"]["Row"] | null;
import useFigurant from "@/utils/context/figurantContext";
import { photosToUrlArray } from "@/utils/pictures";

export default function Figurant({
  session,
  username,
}: {
  session: Session | null;
  username: string | null;
}) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const { figurant, setFigurant } = useFigurant();
  const { photos, setPhotos } = useFigurant();
  const { allUrl, setAllUrl } = useFigurant();
  const { isUser, setIsUser } = useFigurant();

  const user = session?.user;

  // Setting up figurant information
  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      let fetchedFigurant = await getFigurantByUsername(username, supabase);

      if (fetchedFigurant) {
        if (fetchedFigurant.profiles_id === user?.id) setIsUser(true);
        else setIsUser(false);
        setFigurant(fetchedFigurant);
      }
    } catch (error) {
      console.log("erreur : ", error);
    } finally {
      setLoading(false);
    }
  }, [figurant, supabase]);

  // Setting up photos
  const getPhotos = useCallback(async () => {
    try {
      setLoading(true);

      if (!figurant) return;
      let tmpPhotos = await getFigurantPhotosById(figurant?.id, supabase);

      if (tmpPhotos) {
        setPhotos(tmpPhotos);

        let tmpUrl = await photosToUrlArray(
          tmpPhotos,
          supabase,
          "figurant_pictures"
        );
        setAllUrl(tmpUrl);
      }
    } catch (error) {
      console.log("erreur : ", error);
    } finally {
      setLoading(false);
    }
  }, [figurant, photos, supabase]);

  useEffect(() => {
    if (!figurant) getProfile();
    if (figurant && !photos) getPhotos();
  }, [figurant]);

  return (
    <div className="grow">
      <div
        className={`absolute top-0 z-20 overflow-hidden left-0 w-screen flex bg-black text-white transform-all md:duration-500 duration-1000 ${
          loading ? "h-full" : "h-0"
        }`}
      >
        <div className="flex flex-col m-auto gap-6">
          <Loading />

          <p className="">Chargement...</p>
        </div>
      </div>
      {user && figurant && (
        <div className="">
          {/**Top */}
          <TopProfile />
          {/*Middle*/}
          <MiddleSections />
        </div>
      )}
    </div>
  );
}
