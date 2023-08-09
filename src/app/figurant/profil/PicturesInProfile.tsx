"use client";

import useFigurant from "@/utils/context/figurantContext";

export default function PicturesInProfile() {
  const { allUrl } = useFigurant();

  return (
    <>
      {allUrl && (
        <>
          <div className="w-full h-[40vh] rounded-md bg-gray-500">
            {allUrl[0] && (
              <img
                rel="preload"
                className="object-cover rounded-md h-full w-full"
                src={allUrl[0]}
              />
            )}
          </div>
          <div className="flex flex-row gap-6">
            <div className="rounded-md h-[12vh] w-full bg-gray-500">
              {allUrl[1] && (
                <img
                  rel="preload"
                  className="object-cover rounded-md h-full w-full"
                  src={allUrl[1]}
                />
              )}
            </div>
            <div className="rounded-md h-[12vh] w-full bg-gray-500">
              {allUrl[2] && (
                <img
                  rel="preload"
                  className="object-cover rounded-md h-full w-full"
                  src={allUrl[2]}
                />
              )}
            </div>
            <div className="rounded-md h-[12vh] w-full bg-gray-500">
              {allUrl[3] && (
                <img
                  rel="preload"
                  className="object-cover rounded-md h-full w-full"
                  src={allUrl[3]}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
