import VirtualKeyboard from "../../Keyboard/Keyboard";
import useNoteModal from "./useNoteModal";
import { editProduct } from "../../../types/recipeTypes";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
  localEditList: editProduct[];
  setLocalEditList: (list: editProduct[]) => void;
}

export default function NoteModal({
  productToEdit,
  setProductToEdit,
  localEditList,
  setLocalEditList,
}: props) {
  const { handleAddNote, handleCloseKeyboard, note, setNote } = useNoteModal({
    productToEdit,
    setProductToEdit,
    localEditList,
    setLocalEditList,
  });

  return (
    <div>
      <div className="w-full mx-auto my-4 ">
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
