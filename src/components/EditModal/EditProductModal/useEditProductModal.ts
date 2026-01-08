import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../state/store";
import { setCurrentPage, setEditType } from "../../../state/modal/modalSlice";
import { editProduct } from "../../../types/recipeTypes";
import { EDIT_TYPES, MODAL_PAGES } from "../../../constants/editModalConstants";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
  localEditList: editProduct[];
  setLocalEditList: (list: editProduct[]) => void;
  handleSubmit?: () => void;
  isSingleProduct: boolean;
  handleCancelAll?: () => void;
}

export default function useEditProductModal({
  productToEdit,
  setProductToEdit,
  localEditList,
  setLocalEditList,
  handleSubmit,
  isSingleProduct,
  handleCancelAll,
}: props) {
  const dispatch = useDispatch();
  const editing = useSelector((state: RootState) => state.modal.editType);
  const hasNotes = productToEdit
    ? productToEdit.recipe.userNotes &&
      productToEdit.recipe.userNotes.length > 0
    : false;
  const hasAllergies = productToEdit
    ? productToEdit.recipe.assignedAllergies &&
      productToEdit.recipe.assignedAllergies.length > 0
    : false;

  const allergyList =
    (productToEdit?.recipe.assignedAllergies &&
      productToEdit.recipe.assignedAllergies?.map((allergy, index) => ({
        key: `allergy-${allergy.allergenId}-${index}`,
        name: allergy.allergen.name,
      }))) ||
    [];

  const notesList = productToEdit?.recipe.userNotes || [];

  function handleAddNote() {
    dispatch(setEditType(EDIT_TYPES.ADD_NOTE));
  }

  const handleRemoveNote = (noteIndex: number) => {
    if (productToEdit) {
      const updatedRecipe = {
        ...productToEdit.recipe,
        userNotes: productToEdit.recipe.userNotes.filter(
          (_, index) => index !== noteIndex
        ),
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

  function handleClose() {
    if (isSingleProduct && handleSubmit) {
      // If single product, submit changes to Redux
      handleSubmit();
    } else {
      // Go back to product list view
      dispatch(setCurrentPage(MODAL_PAGES.PRODUCT_LIST));
    }
  }

  function handleCancel() {
    if (isSingleProduct && handleCancelAll) {
      // If single product, discard all changes and close modal
      handleCancelAll();
    } else {
      // Go back to product list without saving changes to this product
      dispatch(setCurrentPage(MODAL_PAGES.PRODUCT_LIST));
    }
  }

  return {
    handleRemoveNote,
    handleAddNote,
    editing,
    handleClose,
    handleCancel,
    hasNotes,
    hasAllergies,
    allergyList,
    notesList,
  };
}
