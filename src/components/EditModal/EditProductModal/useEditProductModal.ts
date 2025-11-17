import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../state/store";
import { updateItem } from "../../../state/orders/orderSlice";
import {
  editList,
  setCurrentPage,
  setEditType,
} from "../../../state/modal/modalSlice";
import { editProduct } from "../../../types/recipeTypes";
import { EDIT_TYPES } from "../../../constants/editModalConstants";

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
  const editing = useSelector((state: RootState) => state.modal.editType);
  const hasNotes = productToEdit
    ? productToEdit.recipe.userNotes &&
      productToEdit.recipe.userNotes.length > 0
    : false;
  const hasAllergies = productToEdit
    ? productToEdit.recipe.assignedAllergies &&
      productToEdit.recipe.assignedAllergies.length > 0
    : false;

  function handleAddNote() {
    dispatch(setEditType(EDIT_TYPES.ADD_NOTE));
  }
  // function handleAddAllergy() {
  //   dispatch(setEditType(EDIT_TYPES.ADD_ALLERGY));
  // }

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

  function handleClose() {
    dispatch(setCurrentPage("PRODUCT_LIST"));
  }

  return {
    handleRemoveNote,
    handleAddNote,
    // handleAddAllergy,
    editing,
    handleClose,
    hasNotes,
    hasAllergies,
  };
}
