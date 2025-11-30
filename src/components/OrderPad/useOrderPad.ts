import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { Recipe } from "../../types/recipeTypes";
import { setSelectedItem, clearSelection } from "../../state/orders/orderSlice";
import {
  editList,
  openModal,
  setIsOpening,
} from "../../state/modal/modalSlice";

export default function useOrderPad() {
  const items: Recipe[] = useSelector((state: RootState) => state.orders.items);
  const selectedItem: Recipe | null = useSelector(
    (state: RootState) => state.orders.selectedItem
  );
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const isOpening = useSelector((state: RootState) => state.modal.isOpening);
  const dispatch = useDispatch();

  // Use ref for synchronous checking
  const isOpeningRef = useRef(isOpening);
  isOpeningRef.current = isOpening;

  // Ref to track if mouse is currently down
  const isMouseDownRef = useRef(false);

  // Group items for display (count how many of each recipe)
  const grouped: Record<string, { item: Recipe; count: number }> = items.reduce(
    (acc: Record<string, { item: Recipe; count: number }>, recipe: Recipe) => {
      // Include userNotes in the key to ungroup items with notes
      const key =
        recipe.id.toString() +
        ((recipe.userNotes && recipe.userNotes.length > 0) ||
        (recipe.assignedAllergies && recipe.assignedAllergies.length > 0)
          ? JSON.stringify({
              assignedAllergies: recipe.assignedAllergies || [],
              userNotes: recipe.userNotes || [],
            })
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

  // Handle click to select item (short press)
  const handleClick = (item: Recipe, index: number) => {
    if (isModalOpen || isOpeningRef.current) return;

    // const foundIndex = items.findIndex(
    //   (recipe) =>
    //     recipe.id === item.id &&
    //     JSON.stringify(recipe.userNotes) === JSON.stringify(item.userNotes) &&
    //     JSON.stringify(recipe.assignedAllergies) ===
    //       JSON.stringify(item.assignedAllergies)
    // );

    if (index !== -1) {
      // If this item is already selected, deselect it
      if (
        selectedItem &&
        selectedItem.id === item.id &&
        JSON.stringify(selectedItem.userNotes) ===
          JSON.stringify(item.userNotes) &&
        JSON.stringify(selectedItem.assignedAllergies) ===
          JSON.stringify(item.assignedAllergies)
      ) {
        dispatch(clearSelection());
      } else {
        // Select the item
        dispatch(setSelectedItem({ item, index }));
      }
    }
  };

  // Handle long press - send only the filtered items for the pressed recipe type
  let pressTimer: ReturnType<typeof setTimeout> | null = null;

  const handleMouseDown = (item: Recipe) => {
    if (isModalOpen || isOpeningRef.current) return;

    // Clear any existing timer to prevent multiple triggers
    if (pressTimer) clearTimeout(pressTimer);
    isMouseDownRef.current = true;
    isOpeningRef.current = true;
    dispatch(setIsOpening(true));

    pressTimer = setTimeout(() => {
      if (isMouseDownRef.current) {
        // Only open modal if mouse is still down
        // Filter items to only those matching the pressed recipe's ID
        const filteredItems = items.filter((recipe) => recipe.id === item.id);
        dispatch(editList(filteredItems));
        dispatch(openModal());
      }
    }, 1000); // 1 second for long press
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    if (pressTimer) {
      clearTimeout(pressTimer);
      pressTimer = null;
    }
    // Short click: select the item (only if modal didn't open)
    if (!isModalOpen && !isOpeningRef.current) {
      handleClick(
        selectedItem as Recipe,
        items.indexOf(selectedItem as Recipe)
      );
    }
    isOpeningRef.current = false;
    dispatch(setIsOpening(false));
  };

  // Calculate total
  const total: number = items.reduce(
    (sum: number, recipe: Recipe) => sum + recipe.salePrice,
    0
  );

  const hasOrders: boolean = items.length > 0;

  function isSelected(item: Recipe): boolean {
    if (!selectedItem) return false;
    return (
      item.id === selectedItem.id &&
      JSON.stringify(item.userNotes) ===
        JSON.stringify(selectedItem.userNotes) &&
      JSON.stringify(item.assignedAllergies) ===
        JSON.stringify(selectedItem.assignedAllergies)
    );
  }

  console.log("Selected Item in useOrderPad:", selectedItem);
  console.log("items in useOrderPad:", items);

  return {
    grouped,
    handleClick,
    handleMouseDown,
    handleMouseUp,
    isSelected,
    selectedItem,
    total,
    hasOrders,
    isModalOpen,
  };
}
