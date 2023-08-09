"use client";

import { FunctionBody } from "typescript";

export default function SelectButtonSlide({
  role,
  setRole,
}: {
  role: number;
  setRole: Function;
}) {
  return (
    <div className="rounded-xl w-full overflow-hidden">
      <div
        className="whitespace-nowrap duration-100 w-full text-slate-500 font-semibold"
        style={{ transform: `translateX(-${role * 100}%)` }}
        onClick={() => setRole(role === 0 ? 1 : 0)}
      >
        <div className={`inline-flex w-full items-center justify-center`}>
          <p>Figuration</p>
        </div>
        <div className={`inline-flex w-full items-center justify-center`}>
          <p>Direction</p>
        </div>
      </div>
    </div>
  );
}
