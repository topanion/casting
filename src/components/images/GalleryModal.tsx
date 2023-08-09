import Image from "next/image";
import SlideButtons from "./SlideButtons";

export default function GalleryModal({
  setOpen,
  setIndex,
  url,
}: {
  setOpen: (input: boolean) => void;
  setIndex: (input: number) => void;
  url: string;
}) {
  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed top-0 left-0 bg-black/60 z-40 h-screen w-screen flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-md m-auto h-[80vh] p-6 relative max-w-[80vw]"
      >
        <SlideButtons setIndex={setIndex} />
        <img src={url} className="object-cover h-full " alt="image preview" />
      </div>
    </div>
  );
}
