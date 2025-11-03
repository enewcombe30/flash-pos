import VirtualKeyboard from "../../../components/Keyboard/Keyboard";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../state/store";
import { updateItem } from "../../../state/orders/orderSlice";
import { editList } from "../../../state/openModal/modalSlice";
import { editProduct } from "../../../types/recipeTypes";

interface props {
  setKeyboardOpen: (open: boolean) => void;
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
}

export default function EditProductModal({
  setKeyboardOpen,
  productToEdit,
  setProductToEdit,
}: props) {
  const dispatch = useDispatch();
  const orderList = useSelector((state: RootState) => state.orders.items);
  const [note, setNote] = useState<string>("");
  const handleAddNote = (newNote: string) => {
    if (productToEdit && newNote.trim()) {
      const updatedRecipe = {
        ...productToEdit.recipe,
        userNotes: [...(productToEdit.recipe.userNotes || []), newNote.trim()],
      };
      dispatch(updateItem({ index: productToEdit.id, updatedRecipe }));
      setProductToEdit({ ...productToEdit, recipe: updatedRecipe });

      // Refresh the editList to show updated notes immediately
      const updatedOrders = [...orderList];
      updatedOrders[productToEdit.id] = updatedRecipe;
      const filteredList = updatedOrders.filter(
        (item) => item.id === updatedRecipe.id
      );
      dispatch(editList(filteredList));
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
  const refreshEditList = () => {
    if (productToEdit) {
      const updatedList = orderList.filter(
        (recipe) => recipe.id === productToEdit.recipe.id
      );
      dispatch(editList(updatedList));
    }
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

  const handleCloseKeyboard = () => {
    setKeyboardOpen(false);
    setNote("");
    setProductToEdit(null);
  };
  if (!productToEdit) return null;
  return (
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
  );
}
