import useNumberPad from "./useNumberPad";
import * as reactRedux from "react-redux";
import { setPadValue, clearPadValue } from "../../state/numberPad/numberSlice";

jest.mock("react-redux");

describe("useNumberPad", () => {
  let mockDispatch: jest.Mock;
  let mockUseSelector: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockUseSelector = jest.fn();
    (reactRedux.useDispatch as unknown as jest.Mock).mockReturnValue(
      mockDispatch
    );
    (reactRedux.useSelector as unknown as jest.Mock).mockImplementation(
      mockUseSelector
    );
  });

  it("adds a number to the value", () => {
    const { handleNumberInput } = useNumberPad();
    handleNumberInput(5);
    expect(mockDispatch).toHaveBeenCalledWith(setPadValue("5"));
  });

  it("appends numbers to the value", () => {
    mockUseSelector.mockReturnValue("1");
    const { handleNumberInput } = useNumberPad();
    handleNumberInput(2);
    expect(mockDispatch).toHaveBeenCalledWith(setPadValue("12"));
  });

  it("removes the last character with backspace", () => {
    mockUseSelector.mockReturnValue("123");
    const { handleNumberInput } = useNumberPad();
    handleNumberInput("⌫");
    expect(mockDispatch).toHaveBeenCalledWith(setPadValue("12"));
  });

  it("clears the value with enter", () => {
    mockUseSelector.mockReturnValue("123");
    const { handleNumberInput } = useNumberPad();
    handleNumberInput("↵");
    expect(mockDispatch).toHaveBeenCalledWith(clearPadValue());
  });

  it("does not add non-number or non-control characters", () => {
    mockUseSelector.mockReturnValue("1");
    const { handleNumberInput } = useNumberPad();

    handleNumberInput("A");
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
