interface NumberPadProps {
  value: string;
  setValue: (value: string) => void;
}

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["⌫", 0, "↵"], // Changed "C" to "⌫" for backspace
];

export default function NumberPad({ value, setValue }: NumberPadProps) {
  const handleClick = (item: number | string) => {
    if (item === "⌫") {
      setValue(value.slice(0, -1)); // Remove last character
    } else if (item === "↵") {
      setValue("");
    } else if (typeof item === "number") {
      setValue(value + item.toString());
    }
  };

  return (
    <div>
      <div className="w-full h-[40px] flex items-center justify-end px-4 bg-[#050F05] border-b border-[#284E24] text-2xl font-mono select-all">
        {value || <span>{""}</span>}
      </div>
      <div className="grid grid-cols-3 gap-2 p-2">
        {numbers.flat().map((item, idx) => {
          let btnColor = "bg-[#284E24]";
          if (item === "⌫") btnColor = "bg-[#AF3023]";
          if (item === "↵") btnColor = "bg-[#16A34A]";
          return (
            <button
              key={idx}
              className={`${btnColor} text-white rounded-md h-12 text-xl font-bold`}
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
