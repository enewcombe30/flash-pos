import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { closeModal, editList } from "../../state/openModal/modalSlice";
import { updateItem } from "../../state/orders/orderSlice";
import usePreEditComponent from "./preEditComponent/usePreeditComponent";
import { editProduct } from "../../types/recipeTypes";
import PreEditComponent from "./preEditComponent/preEditComponent";
import VirtualKeyboard from "../../components/Keyboard/Keyboard";

export default function EditModal() {
  const dispatch = useDispatch();
  const orderList = useSelector((state: RootState) => state.orders.items); // Add this to access orders
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const { handleSubmit } = usePreEditComponent();
  const [productToEdit, setProductToEdit] = useState<editProduct | null>(null);
  const [note, setNote] = useState<string>("");
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);

  // Don't render if modal is not open
  if (!isOpen) return null;

  // Function to refresh the edit list after changes
  const refreshEditList = () => {
    if (productToEdit) {
      const updatedList = orderList.filter(
        (recipe) => recipe.id === productToEdit.recipe.id
      );
      dispatch(editList(updatedList));
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(editList([]));
  };

  const handleAddNote = (newNote: string) => {
    if (productToEdit && newNote.trim()) {
      const updatedRecipe = {
        ...productToEdit.recipe,
        userNotes: [...(productToEdit.recipe.userNotes || []), newNote.trim()],
      };
      dispatch(updateItem({ index: productToEdit.id, updatedRecipe }));
      setProductToEdit({ ...productToEdit, recipe: updatedRecipe });
      refreshEditList(); // Refresh the list immediately
      console.log(
        "Note added at index",
        productToEdit.id,
        ":",
        updatedRecipe.userNotes
      ); // For debugging
    }
  };

  const handleRemoveNote = (noteIndex: number) => {
    if (productToEdit) {
      const updatedRecipe = {
        ...productToEdit.recipe,
        userNotes: productToEdit.recipe.userNotes.filter(
          (_, index) => index !== noteIndex
        ),
      };
      dispatch(updateItem({ index: productToEdit.id, updatedRecipe }));
      setProductToEdit({ ...productToEdit, recipe: updatedRecipe });
      refreshEditList(); // Refresh the list immediately
    }
  };

  const handleCloseKeyboard = () => {
    setKeyboardOpen(false);
    setNote("");
    setProductToEdit(null);
  };

  const handleSubmitAndClose = () => {
    handleSubmit();
    handleClose();
  };

  function renderNotes() {
    if (!productToEdit || !productToEdit.recipe.userNotes) return null;
    return productToEdit.recipe.userNotes.map((note, index) => (
      <div
        key={index}
        className="w-fit border border-border-primary rounded p-2 mb-2 text-white text-sm flex"
      >
        {note}
        <span
          className="cursor-pointer ml-4 font-bold text-red-500"
          onClick={() => handleRemoveNote(index)}
        >
          X
        </span>
      </div>
    ));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="pt-8 px-16 w-fit max-w-[53rem] h-fit max-h-[50rem] bg-background-primary border-2 border-border-primary rounded-3xl flex flex-col transition-all duration-500 ease-in-out">
        {!productToEdit && (
          <PreEditComponent
            setProductToEdit={setProductToEdit}
            productToEdit={productToEdit}
          />
        )}
        {productToEdit && (
          <div className="flex flex-col space-y-4 mb-4 flex-1">
            <div className="w-[21rem] h-[4rem] bg-gray-300 rounded mx-auto flex items-center justify-between px-4 cursor-pointer">
              <div className="text-black font-bold flex items-center">
                {productToEdit.recipe.name}
                <span className="text-gray-500 text-sm italic ml-2">
                  ({productToEdit.id + 1})
                </span>
              </div>
            </div>
            <button className="font-bold text-lg border border-primary-500 py-2 px-4 rounded self-start">
              Add Note
            </button>
            <div>{renderNotes()}</div>
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
                onSubmit={() => {
                  handleAddNote(note);
                  setNote("");
                }}
                onCancel={() => handleCloseKeyboard()}
                className="my-keyboard-class"
              />
            </div>
          </div>
        )}
        {!keyboardOpen && !productToEdit && (
          <div className="space-x-4 flex mx-auto mb-8 w-fit">
            <button
              className="bg-primary-500 text-white w-[10.313rem] rounded-2xl text-2xl font-bold"
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
        )}
      </div>
    </div>
  );
}
