"use client";
import { useState, useEffect } from "react";

export default function NumberSelect({
  name,
  min,
  max,
  current,
  unit,
  setValue,
}: {
  name: string;
  min: number | null;
  max: number | null;
  current: number | null;
  unit: string | null;
  setValue: (input: number) => void;
}) {
  const [selected, setSelected] = useState<number | null>(current);

  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-gray-500 text-semibold">{name}</p>
      <div className="flex flex-row flex-wrap gap-2 basic_information w-fit text-xs">
        <select
          value={selected ? selected.toString() : ""}
          onChange={(e) => {
            setSelected(parseInt(e.target.value, 10));
            setValue(parseInt(e.target.value, 10));
          }}
        >
          {min !== null &&
            max !== null &&
            Array.from({ length: max - min + 1 }, (_, index) => {
              const value = min + index;
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
        </select>
        {unit && <>{" " + unit}</>}
      </div>
    </div>
  );
}
