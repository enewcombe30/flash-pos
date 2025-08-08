import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { Recipe } from "../../types/recipeTypes";
import { removeItem, removeAllItems } from "../../state/orders/orderSlice";

export default function useOrderPad() {
  const items = useSelector((state: RootState) => state.orders.items);
  const dispatch = useDispatch();

  // Group items by id and count occurrences
  const grouped = items.reduce(
    (acc: Record<string, { item: Recipe; count: number }>, item: Recipe) => {
      if (acc[item.id]) {
        acc[item.id].count += 1;
      } else {
        acc[item.id] = { item, count: 1 };
      }
      return acc;
    },
    {}
  );

  // Handle click (remove one)
  const handleRemove = (item: Recipe) => {
    dispatch(removeItem(item));
  };

  // Handle long press edit functionality
  let pressTimer: ReturnType<typeof setTimeout>;
  const handleMouseDown = (item: Recipe) => {
    pressTimer = setTimeout(() => {
      alert("edit");
      dispatch(removeAllItems(item));
    }, 500);
  };
  const handleMouseUp = () => {
    clearTimeout(pressTimer);
  };

  return {
    grouped,
    handleRemove,
    handleMouseDown,
    handleMouseUp,
  };
}
