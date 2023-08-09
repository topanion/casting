"use client";
import React from "react";

export default function InformationCategory({
  name,
  array,
}: {
  name: string | null;
  array: string[] | null;
}) {
  if (!array) return <></>;
  return (
    <div className="flex flex-col gap-1 max-w-[90vw]">
      <p className="text-sm text-gray-500 text-semibold">{name}</p>
      <div className="flex flex-wrap flex-row gap-1">
        {array?.map((e, i) => {
          return (
            <div
              key={(name || "ctg") + i}
              className="basic_information whitespace-nowrap w-fit justify-center flex text-xs"
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
}
