import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../state/store";
import { updateItem } from "../../../state/orders/orderSlice";
import { closeKeyboard } from "../../../state/keyboard/keyboardSlice";
import { editProduct } from "../../../types/recipeTypes";
import { editList, setCurrentPage } from "../../../state/modal/modalSlice";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
}

export default function useNoteModal({
  productToEdit,
  setProductToEdit,
}: props) {
  const dispatch = useDispatch();
  const orderList = useSelector((state: RootState) => state.orders.items);
  const [note, setNote] = useState<string>("");
  const handleAddNote = (newNote: string) => {
    if (productToEdit && newNote.trim()) {
      const updatedRecipe = {
        ...productToEdit.recipe,
        userNotes: [...(productToEdit.recipe.userNotes || []), newNote.trim()],
      };
      dispatch(updateItem({ index: productToEdit.id, updatedRecipe }));
      setProductToEdit({ ...productToEdit, recipe: updatedRecipe });

      // Refresh the editList to show updated notes immediately
      const updatedOrders = [...orderList];
      updatedOrders[productToEdit.id] = updatedRecipe;
      const filteredList = updatedOrders.filter(
        (item) => item.id === updatedRecipe.id
      );
      dispatch(editList(filteredList));
    }
  };

  const handleCloseKeyboard = () => {
    dispatch(closeKeyboard());
    setNote("");
    setProductToEdit(null);
    dispatch(setCurrentPage("PRODUCT_LIST"));
  };
  return { handleAddNote, handleCloseKeyboard, note, setNote };
}
