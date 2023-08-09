"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex items-center px-[5%] justify-end fixed h-[7vh] w-full z-30 top-0 left-0 bg-white shadow-sm
      ${isOpen ? "sm:w-[40vw]" : "md:w-full w-0"}`}
    >
      <ul>
        <form action="/auth/signout" method="post">
          <button className="hover:cursor-pointer">Se déconnecter</button>
        </form>
      </ul>
    </div>
  );
}
