interface props {
  value: string;
  setValue: (value: string) => void;
}

export default function useNumberPad({ value, setValue }: props) {
  const handleNumberInput = (item: number | string) => {
    if (item === "⌫") {
      setValue(value.slice(0, -1));
    } else if (item === "↵") {
      setValue("");
    } else if (typeof item === "number") {
      setValue(value + item.toString());
    }
  };

  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["⌫", 0, "↵"],
  ];

  return { value, setValue, handleNumberInput, numbers };
}
