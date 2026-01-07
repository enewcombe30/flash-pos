import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { removeItem, updateItem } from "../../../state/orders/orderSlice";
import {
  closeModal,
  editList as setEditList,
  setCurrentPage,
} from "../../../state/modal/modalSlice";
import { editProduct } from "../../../types/recipeTypes";
import { MODAL_PAGES } from "../../../constants/editModalConstants";
import { useState, useEffect, useCallback } from "react";

export default function useProductListModal() {
  const dispatch = useDispatch();
  const reduxEditList = useSelector((state: RootState) => state.modal.editList);
  const currentPage = useSelector(
    (state: RootState) => state.modal.currentPage
  );
  const originalEditList = useSelector(
    (state: RootState) => state.modal.editList
  );

  const [localEditList, setLocalEditList] = useState<editProduct[]>([]);
  const [localProductToEdit, setLocalProductToEdit] =
    useState<editProduct | null>(null);

  // Initialize local state from Redux when editList changes
  useEffect(() => {
    setLocalEditList([...reduxEditList]);
  }, [reduxEditList]);

  // Sync localProductToEdit when localEditList changes
  useEffect(() => {
    if (localProductToEdit) {
      const updatedProduct = localEditList.find(
        (item) => item.id === localProductToEdit.id
      );
      if (updatedProduct) {
        setLocalProductToEdit(updatedProduct);
      }
    }
  }, [localEditList, localProductToEdit]);

  const handleRemoveOne = (index: number) => {
    // Only remove from local state, don't update Redux yet
    if (index !== -1) {
      const updatedList = localEditList.filter((item) => item.id !== index);
      setLocalEditList(updatedList);
    }
  };

  const handleProductSelect = useCallback(
    (product: editProduct) => {
      setLocalProductToEdit(product);
      dispatch(setCurrentPage(MODAL_PAGES.EDIT_PRODUCT));
    },
    [dispatch]
  );

  // Auto-select if only one product
  useEffect(() => {
    if (
      localEditList.length === 1 &&
      currentPage === MODAL_PAGES.PRODUCT_LIST
    ) {
      handleProductSelect(localEditList[0]);
    }
  }, [localEditList.length, currentPage, handleProductSelect, localEditList]);

  const handleSubmit = () => {
    // Update Redux orders with all modified products
    localEditList.forEach((localItem) => {
      const originalItem = originalEditList.find(
        (orig) => orig.id === localItem.id
      );
      if (
        originalItem &&
        JSON.stringify(originalItem.recipe) !== JSON.stringify(localItem.recipe)
      ) {
        // Product was modified, update it in Redux
        dispatch(
          updateItem({ index: localItem.id, updatedRecipe: localItem.recipe })
        );
      }
    });

    // Find items that were removed (in original but not in local)
    const removedItems = originalEditList.filter(
      (original) => !localEditList.find((local) => local.id === original.id)
    );

    // Remove items from Redux orders
    // Sort by index descending to avoid index shifting issues
    removedItems
      .sort((a, b) => b.id - a.id)
      .forEach((item) => {
        dispatch(removeItem(item.id));
      });

    // Close modal and reset
    dispatch(closeModal());
    dispatch(setEditList([]));
  };

  const handleCancel = () => {
    // Discard all changes and close modal
    dispatch(closeModal());
    dispatch(setEditList([]));
    dispatch(setCurrentPage(MODAL_PAGES.PRODUCT_LIST));
  };

  return {
    handleRemoveOne,
    handleProductSelect,
    handleSubmit,
    handleCancel,
    localEditList,
    localProductToEdit,
    setLocalProductToEdit,
    setLocalEditList,
    currentPage,
  };
}
