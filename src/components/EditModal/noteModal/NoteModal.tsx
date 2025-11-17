import VirtualKeyboard from "../../Keyboard/Keyboard";
import useNoteModal from "./useNoteModal";
import { editProduct } from "../../../types/recipeTypes";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
}

export default function NoteModal({ productToEdit, setProductToEdit }: props) {
  const { handleAddNote, handleCloseKeyboard, note, setNote } = useNoteModal({
    productToEdit,
    setProductToEdit,
  });

  return (
    <div>
      <div className="w-[44.5rem] mx-auto mb-4 px-3">
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
            handleCloseKeyboard();
          }}
          onCancel={() => handleCloseKeyboard()}
          className="my-keyboard-class"
        />
      </div>
    </div>
  );
}
