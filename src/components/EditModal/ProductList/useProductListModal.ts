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
import { MODAL_PAGES } from "../../../constants/editModalConstants";

interface props {
  setProductToEdit: (editProduct: editProduct) => void;
}

export default function useProductListModal({ setProductToEdit }: props) {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.items);

  const handleRemoveOne = (recipe: Recipe, index: number) => {
    if (index !== -1) {
      dispatch(removeItem(index));
      const updatedList = orders.filter((_, idx) => idx !== index);
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

  return { handleRemoveOne, handleProductSelect, editList, handleClose };
}
