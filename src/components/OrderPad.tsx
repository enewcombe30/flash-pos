import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { Recipe } from "../types/recipeTypes";
import { removeItem, removeAllItems } from "../state/orders/orderSlice";

export default function OrderPad() {
  const items = useSelector((state: RootState) => state.orders.items);
  const dispatch = useDispatch();

  // Group items by id and count occurrences
  // move to useOrderPad
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
  // move to useOrderPad
  const handleRemove = (item: Recipe) => {
    dispatch(removeItem(item));
  };

  // Handle long press
  // Move to hook so that it can be used to handle recipe edits
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

  return (
    <div className="p-4 bg-slate-200 text-slate-900 h-full w-full">
      {Object.values(grouped).map(({ item, count }) => (
        <div
          key={item.id}
          className="mb-2 cursor-pointer select-none"
          onClick={() => handleRemove(item)}
          onMouseDown={() => handleMouseDown(item)}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={() => handleMouseDown(item)}
          onTouchEnd={handleMouseUp}
        >
          {count} x {item.name}
        </div>
      ))}
    </div>
  );
}
