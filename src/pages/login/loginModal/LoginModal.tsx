interface props {
  handleDelete: () => void;
  handleNumber: (num: string) => void;
  input: (number | string)[];
  mutation: {
    mutate: (code: number | string) => void;
    isPending: boolean;
  };
  error: boolean;
}

export default function LoginModal({
  handleDelete,
  handleNumber,
  input,
  mutation,
  error,
}: props) {
  // Get error message from Redux

  return (
    <div>
      {/* Output Bar */}
      <div
        className={`w-[205px] h-[60px] bg-[#050F05] mx-auto mb-2 rounded-[10px] flex justify-center items-center gap-6 ${
          error ? "border-[2px] border-[#AF3023]" : ""
        } `}
      >
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
      {!error ? (
        <div className={`h-8 w-fit mx-auto font-thin`}>Enter your code</div>
      ) : (
        <div className="w-fit mx-auto text-[#AF3023] h-8">
          {error === null ? error : "Code invalid - try again"}
        </div>
      )}

      {/* Number Pad */}
      <div className="flex-1 flex flex-col justify-center w-fit mx-auto mb-8 mt-4">
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              className="bg-[#284E24] rounded-3xl h-12 w-12 flex items-center justify-center text-xl font-bold hover:bg-[#376c34] transition"
              onClick={() => handleNumber(num.toString())}
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
            onClick={() => handleNumber("0")}
            disabled={input.every((v) => v !== "-")}
          >
            0
          </button>
          <button
            className="bg-[#16A34A] rounded-3xl h-12 w-12 flex items-center justify-center text-xl font-bold hover:bg-[#1ecf5a] transition"
            onClick={() => {
              const code = input.join("");
              mutation.mutate(Number(code)); // Convert to number before passing
            }}
            disabled={input.some((v) => v === "-") || mutation.isPending}
          >
            {mutation.isPending ? "..." : "↵"}
          </button>
          <div />
        </div>
      </div>
    </div>
  );
}
