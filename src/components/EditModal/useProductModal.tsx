import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { closeModal, setCurrentPage } from "../../state/modal/modalSlice";
import { editProduct } from "../../types/recipeTypes";

export default function useEditModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const currentEditList = useSelector(
    (state: RootState) => state.modal.editList
  );
  const [productToEdit, setProductToEdit] = useState<editProduct | null>(null);

  useEffect(() => {
    if (isOpen && currentEditList.length === 0) {
      dispatch(closeModal());
    }
  }, [currentEditList, isOpen, dispatch]);

  function handleProductToEdit(product: editProduct | null) {
    setProductToEdit(product);
    dispatch(setCurrentPage("EDIT_PRODUCT"));
  }

  return {
    isOpen,
    productToEdit,
    setProductToEdit,
    handleProductToEdit,
  };
}
