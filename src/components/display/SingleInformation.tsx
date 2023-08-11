"use client";
import React from "react";

export default function SingleInformation({
  name,
  value,
}: {
  name: string | null;
  value: string | null;
}) {
  if (!value) return <></>;
  return (
    <div className="flex flex-col gap-1 max-w-[90vw]">
      <p className="text-sm text-gray-500 text-semibold">{name}</p>
      <div className="flex flex-wrap flex-row gap-1">
        <div className="basic_information whitespace-nowrap w-fit justify-center flex text-xs">
          {" "}
          {value}
        </div>
      </div>
    </div>
  );
}
