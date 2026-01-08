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
  const editListItems = useSelector((state: RootState) => state.modal.editList);
  const dispatch = useDispatch();

  // Use ref for synchronous checking
  const isOpeningRef = useRef(isOpening);
  isOpeningRef.current = isOpening;

  // Ref to track if mouse is currently down
  const isMouseDownRef = useRef(false);

  // Ref to store the pressed item for handleMouseUp
  const pressedItemRef = useRef<Recipe | null>(null);

  // Group items for display (count how many of each recipe)
  // Group products with the same recipe ID, notes, and allergies together
  const grouped: Record<
    string,
    { item: Recipe; count: number; index: number }
  > = items.reduce(
    (
      acc: Record<string, { item: Recipe; count: number; index: number }>,
      recipe: Recipe,
      index: number
    ) => {
      // Create a key based on recipe ID, notes, and allergies
      const notesKey = recipe.userNotes
        ? recipe.userNotes.sort().join("|")
        : "";
      const allergiesKey = recipe.assignedAllergies
        ? recipe.assignedAllergies
            .map((a) => a.allergenId)
            .sort()
            .join("|")
        : "";

      const key = `${recipe.id}-${notesKey}-${allergiesKey}`;

      if (acc[key]) {
        acc[key].count += 1;
      } else {
        acc[key] = { item: recipe, count: 1, index };
      }
      return acc;
    },
    {} as Record<string, { item: Recipe; count: number; index: number }>
  );

  // Sort groups: for each product type, unedited first, then edited
  const sortedGroups = Object.entries(grouped).sort(
    ([keyA, groupA], [keyB, groupB]) => {
      const idA = groupA.item.id;
      const idB = groupB.item.id;
      if (idA !== idB) return idA - idB;
      const isEditedA = keyA.includes("-");
      const isEditedB = keyB.includes("-");
      if (isEditedA && !isEditedB) return 1;
      if (!isEditedA && isEditedB) return -1;
      return 0;
    }
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

        if (!pressedItem || !pressedItem.id) return;

        const hasNotes =
          pressedItem.userNotes && pressedItem.userNotes.length > 0;
        const hasAllergies =
          pressedItem.assignedAllergies &&
          pressedItem.assignedAllergies.length > 0;

        // Show products based on edit status
        if (hasNotes || hasAllergies) {
          // Pressed item has notes/allergies, show only this item
          const index = items.indexOf(pressedItem);
          dispatch(editList([{ id: index, recipe: pressedItem }]));
        } else {
          // Pressed item is plain, show all unedited items of this type
          const filteredItems = items
            .map((item, index) => ({ id: index, recipe: item }))
            .filter(
              (ep) =>
                ep.recipe.id === pressedItem.id &&
                (!ep.recipe.userNotes || ep.recipe.userNotes.length === 0) &&
                (!ep.recipe.assignedAllergies ||
                  ep.recipe.assignedAllergies.length === 0)
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

  // Check if an item is currently being edited in the modal
  function isBeingEdited(index: number): boolean {
    return editListItems.some((editProduct) => editProduct.id === index);
  }

  return {
    grouped: sortedGroups,
    handleClick,
    handleMouseDown,
    handleMouseUp,
    isSelected,
    selectedItem,
    total,
    hasOrders,
    isModalOpen,
    isBeingEdited,
  };
}
