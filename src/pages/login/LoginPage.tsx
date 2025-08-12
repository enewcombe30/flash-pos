import { useState } from "react";

export default function LoginPage() {
  const [input, setInput] = useState<(number | string)[]>(["-", "-", "-"]);

  // Helper to add a number to the first available slot
  const handleNumber = (num: number) => {
    setInput((prev) => {
      const next = [...prev];
      const idx = next.findIndex((v) => v === "-");
      if (idx !== -1) next[idx] = num;
      return next;
    });
  };

  // Helper to delete the last entered number
  const handleDelete = () => {
    setInput((prev) => {
      const next = [...prev];
      const idx = next
        .slice()
        .reverse()
        .findIndex((v) => v !== "-");
      if (idx !== -1) next[2 - idx] = "-";
      return next;
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[300px] h-fit bg-[#061C03] p-4 border border-[#284E24] text-slate-200 flex flex-col justify-between rounded-3xl">
        {/* Output Bar */}
        <div className="w-[205px] h-[60px] bg-[#050F05] mx-auto mb-2 rounded flex justify-center items-center gap-6">
          <span className="text-3xl font-mono">
            {input[0] !== "-" ? "*" : "-"}
          </span>
          <span className="text-3xl font-mono">
            {input[1] !== "-" ? "*" : "-"}
          </span>
          <span className="text-3xl font-mono">
            {input[2] !== "-" ? "*" : "-"}
          </span>
        </div>
        {/* Text bar */}
        <div className="h-8 w-fit mx-auto font-thin">Enter your code</div>
        {/* Number Pad */}
        <div className="flex-1 flex flex-col justify-center w-fit mx-auto mb-8 mt-4">
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                className="bg-[#284E24] rounded-3xl h-12 w-12 flex items-center justify-center text-xl font-bold hover:bg-[#376c34] transition"
                onClick={() => handleNumber(num)}
                disabled={input.every((v) => v !== "-")}
              >
                {num}
              </button>
            ))}

            {/* Delete Button */}
            <button
              className="bg-[#AF3023] rounded-3xl h-12 w-12 flex items-center justify-center text-xl font-bold hover:bg-[#c23d2f] transition"
              onClick={handleDelete}
            >
              ⌫
            </button>
            {/* 0 Button */}
            <button
              className="bg-[#284E24] rounded-3xl h-12 w-12 flex items-center justify-center text-xl font-bold hover:bg-[#376c34] transition"
              onClick={() => handleNumber(0)}
              disabled={input.every((v) => v !== "-")}
            >
              0
            </button>
            <button
              className="bg-[#16A34A] rounded-3xl h-12 w-12 flex items-center justify-center text-xl font-bold hover:bg-[#1ecf5a] transition"
              onClick={() => {
                // Handle enter logic here
                setInput(["-", "-", "-"]);
              }}
              disabled={input.some((v) => v === "-")}
            >
              ↵
            </button>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}
