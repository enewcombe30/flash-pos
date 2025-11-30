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

  // Ref to store the pressed item for handleMouseUp
  const pressedItemRef = useRef<Recipe | null>(null);

  // Group items for display (count how many of each recipe)

  // Correct this function so that a single product can be edited
  // and group products with the same allergies and notes separately
  const grouped: Record<string, { item: Recipe; count: number }> = items.reduce(
    (
      acc: Record<string, { item: Recipe; count: number }>,
      recipe: Recipe,
      index: number
    ) => {
      const hasNotes = recipe.userNotes && recipe.userNotes.length > 0;
      const hasAllergies =
        recipe.assignedAllergies && recipe.assignedAllergies.length > 0;
      const isEdited = hasNotes || hasAllergies;

      // Use unique key for edited items to prevent grouping, group plain items by id
      const key = isEdited ? `${recipe.id}-${index}` : recipe.id.toString();

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
  const handleClick = (item: Recipe) => {
    if (isModalOpen || isOpeningRef.current) return;

    const index = items.indexOf(item);
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

    pressedItemRef.current = item; // Store the pressed item

    // Clear any existing timer to prevent multiple triggers
    if (pressTimer) clearTimeout(pressTimer);
    isMouseDownRef.current = true;
    isOpeningRef.current = true;
    dispatch(setIsOpening(true));

    pressTimer = setTimeout(() => {
      if (isMouseDownRef.current && pressedItemRef.current) {
        const pressedItem = pressedItemRef.current;
        const hasNotes =
          pressedItem.userNotes && pressedItem.userNotes.length > 0;
        const hasAllergies =
          pressedItem.assignedAllergies &&
          pressedItem.assignedAllergies.length > 0;
        const isEdited = hasNotes || hasAllergies;

        if (isEdited) {
          // Pressed item has notes/allergies, show only this item
          dispatch(editList([pressedItem]));
        } else {
          // Pressed item is plain, show all unedited items of this type
          const filteredItems = items.filter(
            (recipe) =>
              recipe.id === pressedItem.id &&
              (!recipe.userNotes || recipe.userNotes.length === 0) &&
              (!recipe.assignedAllergies ||
                recipe.assignedAllergies.length === 0)
          );
          dispatch(editList(filteredItems));
        }
        dispatch(openModal());
      }
    }, 1000);
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    if (pressTimer) {
      clearTimeout(pressTimer);
      pressTimer = null;
    }
    // Short click: select the item (only if modal didn't open)
    if (!isModalOpen && !isOpeningRef.current && pressedItemRef.current) {
      handleClick(pressedItemRef.current);
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
