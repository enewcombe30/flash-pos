import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import TrashCan from "../../svgs/TrashCan";
import { closeModal, editList } from "../../state/openModal/modalSlice";
import { removeItem } from "../../state/orders/orderSlice";
import { Recipe } from "../../types/recipeTypes";

// Define scrollbar styles inline (or create a constants file)
const scrollbarStyles = {
  scrollbarWidth: "thin" as const,
  scrollbarColor: "#284E24 #050F05",
};

export default function EditModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const editableList: Recipe[] = useSelector(
    (state: RootState) => state.modal.editList as Recipe[]
  );

  // Don't render if modal is not open
  if (!isOpen) return null;

  const handleRemoveOne = (recipeId: number) => {
    // Find first instance of this recipe and remove it
    const recipeToRemove = editableList.find((r: Recipe) => r.id === recipeId);
    if (recipeToRemove) {
      dispatch(removeItem(recipeToRemove));
      // Update modal list
      const updatedList = [...editableList];
      const index = updatedList.findIndex((r) => r.id === recipeId);
      if (index !== -1) {
        updatedList.splice(index, 1);
      }
      dispatch(editList(updatedList));
    }
  };

  const renderProducts = () => {
    return editableList.map((recipe, index) => (
      <div
        key={`${recipe.id}-${index}`} // Unique key for each instance
        className="w-[21.875rem] h-[4rem] bg-[#D9D9D9] mx-auto flex items-center justify-between px-4 cursor-pointer"
      >
        <div className="text-black font-bold flex items-center">
          {recipe.name}
          <span className="text-[#908D8D] text-sm italic ml-2">
            ({index + 1})
          </span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleRemoveOne(recipe.id)}
        >
          <TrashCan />
        </div>
      </div>
    ));
  };

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(editList([]));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="pt-8 w-[29.375rem] h-fit max-h-[38rem] bg-[#061C03] border-2 border-[#16A34A] rounded-3xl">
        <div
          className="h-fit max-h-[430px] mb-4 mx-8 overflow-scroll space-y-6 custom-scrollbar"
          style={scrollbarStyles}
        >
          {renderProducts()}
        </div>
        <div className="space-x-4 flex mx-auto mb-8 w-fit">
          <button
            className="bg-[#16A34A] text-white w-[10.313rem] rounded-2xl text-2xl font-bold"
            onClick={handleClose}
          >
            Submit
          </button>
          <button
            className="bg-red-500 text-white w-[10.313rem] h-[50px] rounded-2xl text-2xl font-bold"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
