// ConfToInput.jsx
import ArrayChoice from "./ArrayChoice";
import SingleChoice from "./SingleChoice";
import NumberSelect from "./NumberSelect";
import { Database } from "@/types/supabase";
type Figurant = Database["public"]["Tables"]["profils_figurants"]["Row"] & {
  [key: string]: any; // Add index signature to allow any string property name
};

export default function ConfToInput({
  figurant,
  setFigurant,
  input,
}: {
  figurant: Figurant;
  setFigurant: (input: Figurant) => void;
  input: any;
}) {
  const handleSetValue = (value: string[] | string | number) => {
    let prevState = { ...figurant, [input.value]: value };
    setFigurant(prevState);
  };

  if (input.type === "array") {
    return (
      <ArrayChoice
        name={input.name}
        current={figurant[input.value]}
        array={input.possibilities}
        setValue={(value) => {
          handleSetValue(value);
        }}
      />
    );
  } else if (input.type === "single") {
    return (
      <SingleChoice
        name={input.name}
        current={figurant[input.value]}
        array={input.possibilities}
        setValue={(value) => {
          handleSetValue(value);
        }}
      />
    );
  } else if (input.type === "number") {
    return (
      <NumberSelect
        name={input.name}
        current={figurant[input.value]}
        min={input.min}
        max={input.max}
        setValue={(value) => {
          handleSetValue(value);
        }}
        unit={input.unit}
      />
    );
  } else {
    return <></>;
  }
}
