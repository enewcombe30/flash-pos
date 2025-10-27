import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { removeItem } from "../../../state/orders/orderSlice";
import { Recipe } from "../../../types/recipeTypes";

export default function usePreeditComponent() {
  const dispatch = useDispatch();
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
    // Remove the first instance from the local edited list only
    setEditedList((prev) => {
      const index = prev.findIndex((r) => r.id === recipeId);
      if (index !== -1) {
        const updated = [...prev];
        updated.splice(index, 1);
        return updated;
      }
      return prev;
    });
    // Do NOT dispatch removeItem here - keep changes local
  };

  const handleSubmit = () => {
    // Calculate how many items to remove (difference between initial and edited)
    const itemsToRemove = initialList.length - editedList.length;
    const recipeToRemove = initialList[0]; // All items are the same type

    // Dispatch removeItem for each item that was removed
    for (let i = 0; i < itemsToRemove; i++) {
      dispatch(removeItem(recipeToRemove));
    }
  };

  return { handleRemoveOne, editedList, handleSubmit };
}
