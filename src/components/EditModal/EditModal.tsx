import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { closeModal, editList } from "../../state/openModal/modalSlice";
import usePreEditComponent from "./preEditComponent/usePreeditComponent";
import { editProduct } from "../../types/recipeTypes";
import PreEditComponent from "./preEditComponent/preEditComponent";
import VirtualKeyboard from "../../components/Keyboard/Keyboard";

export default function EditModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const { handleSubmit } = usePreEditComponent();
  const [productToEdit, setProductToEdit] = useState<editProduct | null>(null);
  const [note, setNote] = useState<string>("");
  // const [notes, setNotes] = useState<string[]>([]);

  // Don't render if modal is not open
  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(editList([]));
  };

  const handleSubmitAndClose = () => {
    handleSubmit(); // Apply changes to Redux
    handleClose();
  };

  console.log(productToEdit);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="pt-8 px-16 w-[53rem] h-fit max-h-[50rem] bg-[#061C03] border-2 border-[#16A34A] rounded-3xl flex flex-col">
        {!productToEdit && (
          <PreEditComponent setProductToEdit={setProductToEdit} />
        )}
        {productToEdit && (
          <div className="flex flex-col space-y-4 mb-4 flex-1">
            <div className="w-[21rem] h-[4rem] bg-[#D9D9D9] rounded mx-auto flex items-center justify-between px-4 cursor-pointer">
              <div className="text-black font-bold flex items-center">
                {productToEdit.recipe.name}
                <span className="text-[#908D8D] text-sm italic ml-2">
                  ({productToEdit.id + 1})
                </span>
              </div>
            </div>
            <button className="font-bold text-lg border border-primary-500 py-2 px-4 rounded self-start">
              Add Note
            </button>
            <div className="w-[45rem] mx-auto mb-4">
              <input
                type="text"
                value={note}
                readOnly
                className="w-full p-4 text-2xl mb-4 text-black font-bold"
              />
              <VirtualKeyboard
                value={note}
                onChange={setNote}
                className="my-keyboard-class"
              />
            </div>
          </div>
        )}
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
