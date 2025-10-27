import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { Recipe } from "../../types/recipeTypes";
import { removeItem } from "../../state/orders/orderSlice";
import { editList, openModal } from "../../state/openModal/modalSlice";

export default function useOrderPad() {
  const items: Recipe[] = useSelector((state: RootState) => state.orders.items);
  const dispatch = useDispatch();

  // Group items for display (count how many of each recipe)
  const grouped: Record<string, { item: Recipe; count: number }> = items.reduce(
    (acc: Record<string, { item: Recipe; count: number }>, recipe: Recipe) => {
      const key = recipe.id.toString();
      if (acc[key]) {
        acc[key].count += 1;
      } else {
        acc[key] = { item: recipe, count: 1 };
      }
      return acc;
    },
    {} as Record<string, { item: Recipe; count: number }>
  );

  // Handle click (remove one instance)
  const handleRemove = (item: Recipe) => {
    dispatch(removeItem(item));
  };

  // Handle long press - send ALL individual items to modal
  let pressTimer: ReturnType<typeof setTimeout> | null = null;
  const handleMouseDown = () => {
    pressTimer = setTimeout(() => {
      // Send all items (not grouped) to modal
      dispatch(editList(items));
      dispatch(openModal());
    }, 500);
  };

  const handleMouseUp = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      pressTimer = null;
    }
  };

  // Calculate total
  const total: number = items.reduce(
    (sum: number, recipe: Recipe) => sum + recipe.salePrice,
    0
  );

  const hasOrders: boolean = items.length > 0;

  return {
    grouped,
    handleRemove,
    handleMouseDown,
    handleMouseUp,
    total,
    hasOrders,
  };
}
