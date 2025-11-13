import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { Recipe } from "../../types/recipeTypes";
import { removeItem } from "../../state/orders/orderSlice";
import {
  editList,
  openModal,
  setIsOpening,
} from "../../state/modal/modalSlice";

export default function useOrderPad() {
  const items: Recipe[] = useSelector((state: RootState) => state.orders.items);
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const isOpening = useSelector((state: RootState) => state.modal.isOpening);
  const dispatch = useDispatch();

  // Use ref for synchronous checking
  const isOpeningRef = useRef(isOpening);
  isOpeningRef.current = isOpening;

  // Group items for display (count how many of each recipe)
  const grouped: Record<string, { item: Recipe; count: number }> = items.reduce(
    (acc: Record<string, { item: Recipe; count: number }>, recipe: Recipe) => {
      // Include userNotes in the key to ungroup items with notes
      const key =
        recipe.id.toString() +
        (recipe.userNotes && recipe.userNotes.length > 0
          ? JSON.stringify(recipe.userNotes)
          : "");
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
    // Find the index of the first matching recipe in the items array
    const index = items.findIndex((recipe) => recipe.id === item.id);
    if (index !== -1) {
      dispatch(removeItem(index));
    }
  };

  // Handle long press - send only the filtered items for the pressed recipe type
  let pressTimer: ReturnType<typeof setTimeout> | null = null;
  const handleMouseDown = (item: Recipe) => {
    if (isModalOpen || isOpeningRef.current) return;
    // Clear any existing timer to prevent multiple triggers
    if (pressTimer) clearTimeout(pressTimer);
    isOpeningRef.current = true;
    dispatch(setIsOpening(true));
    pressTimer = setTimeout(() => {
      // Filter items to only those matching the pressed recipe's ID
      const filteredItems = items.filter((recipe) => recipe.id === item.id);
      dispatch(editList(filteredItems));
      dispatch(openModal());
    }, 1000); // Increased to 1000ms for less sensitivity
  };

  const handleMouseUp = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      pressTimer = null;
      isOpeningRef.current = false;
      dispatch(setIsOpening(false));
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
    isModalOpen,
  };
}
