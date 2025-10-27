import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import TrashCan from "../../svgs/TrashCan";
import { closeModal, editList } from "../../state/openModal/modalSlice";
import usePreEditComponent from "./preEditComponent/usePreeditComponent";

// Define scrollbar styles inline
const scrollbarStyles = {
  scrollbarWidth: "thin" as const,
  scrollbarColor: "#284E24 #050F05",
};

export default function EditModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const { handleRemoveOne, editedList, handleSubmit } = usePreEditComponent();

  // Don't render if modal is not open
  if (!isOpen) return null;

  const renderProducts = () => {
    return editedList.map((recipe, index) => (
      <div
        key={`${recipe.id}-${index}`}
        className="w-[21.875rem] h-[4rem] bg-[#D9D9D9] mx-auto flex items-center justify-between px-4 cursor-pointer"
      >
        <div className="text-black font-bold flex items-center">
          {recipe.name}
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

  const handleSubmitAndClose = () => {
    handleSubmit(); // Apply changes to Redux
    handleClose();
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
            onClick={handleSubmitAndClose} // Submit changes
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
