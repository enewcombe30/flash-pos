import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { closeModal, editList } from "../../state/openModal/modalSlice";
import { editProduct } from "../../types/recipeTypes";

export default function useEditModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const currentEditList = useSelector(
    (state: RootState) => state.modal.editList
  );
  const [productToEdit, setProductToEdit] = useState<editProduct | null>(null);

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(editList([]));
  };

  useEffect(() => {
    if (isOpen && currentEditList.length === 0) {
      dispatch(closeModal());
    }
  }, [currentEditList, isOpen, dispatch]);

  return {
    isOpen,
    productToEdit,
    setProductToEdit,
    handleClose,
  };
}
