"use client";

export default function TextInput({
  name,
  current,
  setValue,
}: {
  name: string;
  current: string | undefined;
  setValue: (input: string) => void;
}) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-gray-500 text-semibold">{name}</p>
      <div className="basic_information">
        <input type="text" placeholder={current} onChange={handleChange} />
      </div>
    </div>
  );
}
