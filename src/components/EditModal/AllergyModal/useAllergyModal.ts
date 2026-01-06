import { editProduct } from "../../../types/recipeTypes";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../state/store";
import { updateItem } from "../../../state/orders/orderSlice";
import { editList } from "../../../state/modal/modalSlice";
import { Allergen } from "../../../types/recipeTypes";
import { EDIT_TYPES } from "../../../constants/editModalConstants";
import { setEditType } from "../../../state/modal/modalSlice";
import { allergies } from "../../../constants/allergies";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
}

export default function useAllergyModal({
  productToEdit,
  setProductToEdit,
}: props) {
  const dispatch = useDispatch();
  const orderList = useSelector((state: RootState) => state.orders.items);
  const editType = useSelector((state: RootState) => state.modal.editType);

  const handleAddAllergy = (allergy: Allergen) => {
    if (
      productToEdit &&
      allergy ===
        productToEdit.recipe.assignedAllergies?.find(
          (a) => a.allergenId === allergy.allergenId
        )
    ) {
      return; // Allergy already assigned, do nothing
    }
    if (productToEdit && allergy) {
      const updatedRecipe = {
        ...productToEdit.recipe,
        assignedAllergies: [
          ...(productToEdit.recipe.assignedAllergies || []),
          allergy,
        ],
      };
      dispatch(updateItem({ index: productToEdit.id, updatedRecipe }));
      setProductToEdit({ ...productToEdit, recipe: updatedRecipe });

      // Refresh the editList to show updated notes immediately
      const updatedOrders = [...orderList];
      updatedOrders[productToEdit.id] = updatedRecipe;
      const filteredList = updatedOrders
        .map((item, index) => ({ id: index, recipe: item }))
        .filter((ep) => ep.recipe.id === updatedRecipe.id);
      dispatch(editList(filteredList));
    }
  };

  const toggleAllergy = (allergy: Allergen) => {
    if (!productToEdit) return;
    const assignedAllergies = productToEdit.recipe.assignedAllergies || [];
    const isAssigned = assignedAllergies.some(
      (assigned) => assigned.allergenId === allergy.allergenId
    );
    let updatedAllergies: Allergen[];

    if (isAssigned) {
      updatedAllergies = assignedAllergies.filter(
        (a) => a.allergenId !== allergy.allergenId
      );
    } else {
      updatedAllergies = [...assignedAllergies, allergy];
    }

    const updatedRecipe = {
      ...productToEdit.recipe,
      assignedAllergies: updatedAllergies,
    };

    // Update local state
    setProductToEdit({
      ...productToEdit,
      recipe: updatedRecipe,
    });

    // Update Redux state
    dispatch(updateItem({ index: productToEdit.id, updatedRecipe }));

    // Refresh the editList to show updated allergies immediately
    const updatedOrders = [...orderList];
    updatedOrders[productToEdit.id] = updatedRecipe;
    const filteredList = updatedOrders
      .map((item, index) => ({ id: index, recipe: item }))
      .filter((ep) => ep.recipe.id === updatedRecipe.id);
    dispatch(editList(filteredList));
  };

  function handleShowAll() {
    dispatch(setEditType(EDIT_TYPES.ADD_ALLERGY));
  }

  function closeFullList() {
    dispatch(setEditType(EDIT_TYPES.OVERVIEW));
  }

  const isAllergySelected = (allergy: Allergen) => {
    if (!productToEdit) return false;
    const assignedAllergies = productToEdit.recipe.assignedAllergies || [];
    return assignedAllergies.some(
      (assigned) => assigned.allergenId === allergy.allergenId
    );
  };

  // if has allergies assigned return list with assigned allergies first
  const sortedAllergies = () => {
    if (!productToEdit) return allergies;
    const assignedAllergies = productToEdit.recipe.assignedAllergies || [];
    const assignedIds = assignedAllergies.map((a) => a.allergenId);
    const assignedList = allergies.filter((a) =>
      assignedIds.includes(a.allergenId)
    );
    const unassignedList = allergies.filter(
      (a) => !assignedIds.includes(a.allergenId)
    );
    return [...assignedList, ...unassignedList];
  };

  return {
    toggleAllergy,
    sortedAllergies,
    isAllergySelected,
    editType,
    handleShowAll,
    handleAddAllergy,
    closeFullList,
  };
}
