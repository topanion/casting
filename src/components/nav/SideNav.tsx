"use client";

import { useState } from "react";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed h-screen grow z-40 top-0 left-0 bg-purple-200
      ${isOpen ? "sm:w-[40vw]" : "md:w-[3vw] w-0"}`}
    ></div>
  );
}
