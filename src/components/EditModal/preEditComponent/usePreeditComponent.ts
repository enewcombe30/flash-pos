import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { removeItem } from "../../../state/orders/orderSlice";
import { Recipe } from "../../../types/recipeTypes";

export default function usePreeditComponent() {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.items);
  const initialList: Recipe[] = useSelector(
    (state: RootState) => state.modal.editList as Recipe[]
  );

  // Local state for the edited list (copy of initialList)
  const [editedList, setEditedList] = useState<Recipe[]>([]);

  // Initialize editedList when initialList changes
  useEffect(() => {
    setEditedList([...initialList]);
  }, [initialList]);

  const handleRemoveOne = (recipeId: number) => {
    // Find the global index of the first recipe with this id
    const globalIndex = orders.findIndex((recipe) => recipe.id === recipeId);
    if (globalIndex !== -1) {
      dispatch(removeItem(globalIndex)); // Dispatch with the global index
    }
    // Also update local state for UI feedback
    setEditedList((prev) => {
      const localIndex = prev.findIndex((r) => r.id === recipeId);
      if (localIndex !== -1) {
        const updated = [...prev];
        updated.splice(localIndex, 1);
        return updated;
      }
      return prev;
    });
  };

  const handleSubmit = () => {
    // Since changes are dispatched immediately, handleSubmit can be a no-op or handle any final logic
    // For now, it's not needed as removals are immediate
  };

  // const handleRemoveNote = (noteIndex: number) => {
  // This function will be implemented in the EditModal component
  // as it needs to update the specific recipe in the global state.
  // };

  return { handleRemoveOne, editedList, handleSubmit };
}
