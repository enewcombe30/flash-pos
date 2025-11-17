import useEditProductModal from "./useEditProductModal";
import { editProduct } from "../../../types/recipeTypes";
import NoteModal from "../NoteModal/NoteModal";
import { EDIT_TYPES } from "../../../constants/editModalConstants";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
}

export default function EditProductModal({
  productToEdit,
  setProductToEdit,
}: props) {
  const { handleRemoveNote, handleAddNote, editing, handleClose } =
    useEditProductModal({
      productToEdit,
      setProductToEdit,
    });

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
      <button
        className="font-bold text-lg border border-primary-500 py-2 px-4 rounded self-start"
        onClick={handleAddNote}
      >
        Add Note
      </button>
      <div>{renderNotes()}</div>
      {editing === EDIT_TYPES.ADD_NOTE && (
        <NoteModal
          productToEdit={productToEdit}
          setProductToEdit={setProductToEdit}
        />
      )}
      {editing === EDIT_TYPES.OVERVIEW && (
        <button
          className="bg-primary-500 text-white w-[9.375rem] rounded-2xl text-2xl font-bold mx-auto"
          onClick={handleClose}
        >
          Submit
        </button>
      )}
    </div>
  );
}
