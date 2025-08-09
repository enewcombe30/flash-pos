import useNumberPad from "./useNumberPad";

describe("useNumberPad", () => {
  let value = "";
  const setValue = jest.fn((v) => {
    value = v;
  });

  beforeEach(() => {
    value = "";
    setValue.mockClear();
  });

  it("adds a number to the value", () => {
    const { handleNumberInput } = useNumberPad({ value, setValue });
    handleNumberInput(5);
    expect(setValue).toHaveBeenCalledWith("5");
  });

  it("appends numbers to the value", () => {
    value = "1";
    const { handleNumberInput } = useNumberPad({ value, setValue });
    handleNumberInput(2);
    expect(setValue).toHaveBeenCalledWith("12");
  });

  it("removes the last character with backspace", () => {
    value = "123";
    const { handleNumberInput } = useNumberPad({ value, setValue });
    handleNumberInput("⌫");
    expect(setValue).toHaveBeenCalledWith("12");
  });

  it("clears the value with enter", () => {
    value = "123";
    const { handleNumberInput } = useNumberPad({ value, setValue });
    handleNumberInput("↵");
    expect(setValue).toHaveBeenCalledWith("");
  });

  it("does not add non-number or non-control characters", () => {
    value = "1";
    const { handleNumberInput } = useNumberPad({ value, setValue });

    handleNumberInput("A");
    expect(setValue).not.toHaveBeenCalledWith("1A");
  });
});
