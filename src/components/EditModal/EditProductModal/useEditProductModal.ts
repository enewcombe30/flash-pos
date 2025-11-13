import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../state/store";
import { updateItem } from "../../../state/orders/orderSlice";
import { editList } from "../../../state/modal/modalSlice";
import { editProduct } from "../../../types/recipeTypes";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
}

export default function useEditProductModal({
  productToEdit,
  setProductToEdit,
}: props) {
  const dispatch = useDispatch();
  const orderList = useSelector((state: RootState) => state.orders.items);

  const refreshEditList = () => {
    if (productToEdit) {
      const updatedList = orderList.filter(
        (recipe) => recipe.id === productToEdit.recipe.id
      );
      dispatch(editList(updatedList));
    }
  };

  const handleRemoveNote = (noteIndex: number) => {
    if (productToEdit) {
      const updatedRecipe = {
        ...productToEdit.recipe,
        userNotes: productToEdit.recipe.userNotes.filter(
          (_, index) => index !== noteIndex
        ),
      };
      dispatch(updateItem({ index: productToEdit.id, updatedRecipe }));
      setProductToEdit({ ...productToEdit, recipe: updatedRecipe });
      refreshEditList();
    }
  };

  return {
    handleRemoveNote,
  };
}
