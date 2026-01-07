import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeKeyboard } from "../../../state/keyboard/keyboardSlice";
import { editProduct } from "../../../types/recipeTypes";
import { setEditType } from "../../../state/modal/modalSlice";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
  localEditList: editProduct[];
  setLocalEditList: (list: editProduct[]) => void;
}

export default function useNoteModal({
  productToEdit,
  setProductToEdit,
  localEditList,
  setLocalEditList,
}: props) {
  const dispatch = useDispatch();
  const [note, setNote] = useState<string>("");

  const handleAddNote = (newNote: string) => {
    if (productToEdit && newNote.trim()) {
      const updatedRecipe = {
        ...productToEdit.recipe,
        userNotes: [...(productToEdit.recipe.userNotes || []), newNote.trim()],
      };

      // Update local product state
      setProductToEdit({ ...productToEdit, recipe: updatedRecipe });

      // Update localEditList
      const updatedList = localEditList.map((item) =>
        item.id === productToEdit.id ? { ...item, recipe: updatedRecipe } : item
      );
      setLocalEditList(updatedList);
    }
  };

  const handleCloseKeyboard = () => {
    dispatch(closeKeyboard());
    setNote("");
    dispatch(setEditType("OVERVIEW"));
  };

  return { handleAddNote, handleCloseKeyboard, note, setNote };
}
