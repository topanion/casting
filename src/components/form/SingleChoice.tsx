"use client";
import { useState, useEffect } from "react";

type ArraySelected = { value: string; chosen: boolean };
// Sorting by chosen or not
const sorting = (a: ArraySelected, b: ArraySelected) => {
  return a.chosen < b.chosen ? 1 : b.chosen < a.chosen ? -1 : 0;
};

export default function SingleChoice({
  name,
  array,
  current,
  setValue,
}: {
  name: string;
  array: string[];
  current: string | null;
  setValue: (input: string) => void;
}) {
  const [selected, setSelected] = useState<ArraySelected[]>(
    array
      .map((e) => {
        return { value: e, chosen: current?.includes(e) ? true : false };
      })
      .sort(sorting)
  );
  useEffect(() => {}, [selected]);

  const onClick = (index: number, status: boolean) => {
    if (status === true) return;
    let tmp = [...selected];
    tmp[index].chosen = true;
    setValue(tmp[index].value);

    for (let i = 0; tmp[i]; i++) {
      if (i != index) tmp[i].chosen = false;
    }

    // Selected ones go at the top of the list
    tmp.sort(sorting);
    setSelected(tmp);
  };

  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-gray-500 text-semibold">{name}</p>
      <div className="flex flex-row flex-wrap gap-2">
        {selected.map((e, index) => {
          return (
            <button
              key={(name || "ctg") + index}
              className={`${
                e.chosen ? "basic_information" : "non-selected"
              } whitespace-nowrap text-xs hover:bg-[#b69cc5]`}
              onClick={() => onClick(index, e.chosen)}
            >
              {e.value}
              {e.chosen ? <span className="text-base font-bold"> x</span> : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}
