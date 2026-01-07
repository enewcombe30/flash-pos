import { editProduct } from "../../../types/recipeTypes";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../state/store";
import { Allergen } from "../../../types/recipeTypes";
import { EDIT_TYPES } from "../../../constants/editModalConstants";
import { setEditType } from "../../../state/modal/modalSlice";
import { allergies } from "../../../constants/allergies";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
  localEditList: editProduct[];
  setLocalEditList: (list: editProduct[]) => void;
}

export default function useAllergyModal({
  productToEdit,
  setProductToEdit,
  localEditList,
  setLocalEditList,
}: props) {
  const dispatch = useDispatch();
  const editType = useSelector((state: RootState) => state.modal.editType);

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

    // Update local product state
    setProductToEdit({
      ...productToEdit,
      recipe: updatedRecipe,
    });

    // Update localEditList
    const updatedList = localEditList.map((item) =>
      item.id === productToEdit.id ? { ...item, recipe: updatedRecipe } : item
    );
    setLocalEditList(updatedList);
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
    closeFullList,
    allergies,
  };
}
