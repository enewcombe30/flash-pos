import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { setPadValue, clearPadValue } from "../../state/numberPad/numberSlice";

export default function useNumberPad() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.numberPad.padValue);
  const handleNumberInput = (item: number | string) => {
    if (item === "⌫") {
      dispatch(setPadValue(value.slice(0, -1)));
    } else if (item === "↵") {
      dispatch(clearPadValue());
    } else if (typeof item === "number") {
      dispatch(setPadValue(value + item.toString()));
    }
  };

  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["⌫", 0, "↵"],
  ];

  return { handleNumberInput, numbers };
}
