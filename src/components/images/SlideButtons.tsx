export default function SlideButtons({
  setIndex,
}: {
  setIndex(input: number): void;
}) {
  return (
    <>
      <div className="absolute h-full -left-5 z-30 flex rounded-md ">
        <div
          onClick={() => setIndex(-1)}
          className="flex my-auto hover:cursor-pointer bg-white border-2 border-gray h-[5vh] w-[5vh] rounded-full justify-center items-center"
        >
          <svg width="24" height="24" className="m-auto">
            <path
              d="M5 12l13 7v-14z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="absolute h-full -right-4 z-30 flex rounded-md ">
        <div
          onClick={() => setIndex(1)}
          className="flex my-auto bg-white border-2 border-gray h-[5vh] hover:cursor-pointer w-[5vh] rounded-full justify-center items-center"
        >
          <svg width="24" height="24" className="m-auto">
            <path
              d="M19 12L6 5v14z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
