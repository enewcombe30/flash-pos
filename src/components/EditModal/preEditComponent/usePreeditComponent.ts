import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { removeItem } from "../../../state/orders/orderSlice";
import {
  closeModal,
  editList,
  setCurrentPage,
} from "../../../state/modal/modalSlice";
import { editProduct } from "../../../types/recipeTypes";
import { Recipe } from "../../../types/recipeTypes";
import { MODAL_PAGES } from "../../../constants/modalConstants";

interface props {
  setProductToEdit: (editProduct: editProduct) => void;
}

export default function usePreeditComponent({ setProductToEdit }: props) {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.items);

  const handleRemoveOne = (recipe: Recipe) => {
    // Find the global index of this specific recipe instance
    const globalIndex = orders.findIndex((item) => {
      // Match by id and check if userNotes are the same (for uniqueness)
      return (
        item.id === recipe.id &&
        JSON.stringify(item.userNotes) === JSON.stringify(recipe.userNotes)
      );
    });

    if (globalIndex !== -1) {
      dispatch(removeItem(globalIndex));

      // Update the editList to reflect the change
      const updatedList = orders.filter((_, idx) => idx !== globalIndex);
      const filteredList = updatedList.filter((item) => item.id === recipe.id);
      dispatch(editList(filteredList));
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(editList([]));
  };

  function handleProductSelect(product: editProduct) {
    setProductToEdit(product);
    dispatch(setCurrentPage(MODAL_PAGES.EDIT_PRODUCT));
  }

  return { handleRemoveOne, handleClose, handleProductSelect, editList };
}
