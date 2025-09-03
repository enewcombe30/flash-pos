import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import useNumberPad from "./useNumberPad";

export default function NumberPad() {
  const value = useSelector((state: RootState) => state.numberPad.padValue);
  const { handleNumberInput, numbers } = useNumberPad();

  return (
    <div>
      <div className="w-full h-[40px] flex items-center justify-end px-4 bg-[#050F05] border-b border-[#284E24] text-2xl font-mono select-all">
        {value || <span>{""}</span>}
      </div>
      <div className="grid grid-cols-3 gap-2 p-2">
        {numbers.flat().map((input, idx) => {
          let btnColor = "bg-[#284E24]";
          if (input === "⌫") btnColor = "bg-[#AF3023]";
          if (input === "↵") btnColor = "bg-[#16A34A]";
          return (
            <button
              key={idx}
              className={`${btnColor} text-white rounded-md h-12 text-xl font-bold`}
              onClick={() => handleNumberInput(input)}
            >
              {input}
            </button>
          );
        })}
      </div>
    </div>
  );
}
