"use client";

export default function SectionsButtons({
  sections,
  currentSection,
  onClick,
}: {
  sections: string[];
  currentSection: number;
  onClick: (nb: number) => void;
}) {
  return (
    <div className="flex flex-row gap-1 text-sm font-bold">
      {sections.map((e, i) => {
        return (
          <div
            key={"button for section " + e}
            className={`rounded-t-md px-4 py-2 section_button bg-white ${
              currentSection === i
                ? "z-10 text-black border-[#8149a1] current_section"
                : "z-0 text-black/40 border-black/40 hover:cursor-pointer hover:bg-gray-200 hover:text-black"
            }`}
            onClick={() => onClick(i)}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
}
