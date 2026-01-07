import useEditProductModal from "./useEditProductModal";
import { editProduct } from "../../../types/recipeTypes";
import NoteModal from "../NoteModal/NoteModal";
import { EDIT_TYPES } from "../../../constants/editModalConstants";
import AllergyModal from "../AllergyModal/AllergyModal";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
  localEditList: editProduct[];
  setLocalEditList: (list: editProduct[]) => void;
  handleSubmit?: () => void;
}

export default function EditProductModal({
  productToEdit,
  setProductToEdit,
  localEditList,
  setLocalEditList,
  handleSubmit,
}: props) {
  const isSingleProduct = localEditList.length === 1;

  const {
    handleRemoveNote,
    handleAddNote,
    editing,
    handleClose,
    handleCancel,
    hasAllergies,
    hasNotes,
    allergyList,
    notesList,
  } = useEditProductModal({
    productToEdit,
    setProductToEdit,
    localEditList,
    setLocalEditList,
    handleSubmit,
    isSingleProduct,
  });

  if (!productToEdit) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-col mb-4 flex-1">
        <div
          className={`w-full bg-gray-300 rounded mx-auto px-4 py-2 cursor-pointer my-2 ${
            editing !== EDIT_TYPES.ADD_ALLERGY ? "visible" : "hidden my-0"
          }`}
        >
          <div className="text-black font-bold flex items-center justify-between">
            <span>
              {productToEdit.recipe.name}
              <span className="text-gray-500 text-sm italic ml-2">
                ({productToEdit.id + 1})
              </span>
            </span>
          </div>
          <div className="italic text-sm text-gray-500 mt-1 truncate">
            {allergyList.map((allergy) => (
              <span key={allergy.key} className="mr-1">
                {allergy.name}
                {hasAllergies && allergyList.length > 0 ? "," : ""}
              </span>
            ))}
            {hasNotes && productToEdit.recipe.userNotes.join(", ")}
          </div>
        </div>
        {editing === EDIT_TYPES.OVERVIEW && (
          <button
            className="font-bold text-lg border border-primary-500 py-2 px-4 rounded self-start my-4"
            onClick={handleAddNote}
          >
            Add Note
          </button>
        )}
        {notesList.length > 0 && (
          <div>
            {notesList.map((note, index) => (
              <div
                key={`note-${note}-${index}`}
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
            ))}
          </div>
        )}
        {editing === EDIT_TYPES.ADD_NOTE && (
          <NoteModal
            productToEdit={productToEdit}
            setProductToEdit={setProductToEdit}
            localEditList={localEditList}
            setLocalEditList={setLocalEditList}
          />
        )}
        {editing !== EDIT_TYPES.ADD_NOTE && (
          <div>
            <span
              className={`font-bold text-lg ${
                editing === EDIT_TYPES.ADD_ALLERGY
                  ? "invisible my-0"
                  : "visible my-2"
              }`}
            >
              Allergens
            </span>
            <AllergyModal
              productToEdit={productToEdit}
              setProductToEdit={setProductToEdit}
              localEditList={localEditList}
              setLocalEditList={setLocalEditList}
            />
          </div>
        )}
      </div>
      {editing === EDIT_TYPES.OVERVIEW && (
        <div className="flex flex-col mb-4 flex-1">
          <div className="flex space-x-4 mx-auto">
            {isSingleProduct ? (
              <>
                <button
                  className="bg-primary-500 text-white w-[9.375rem] rounded-2xl text-2xl font-bold"
                  onClick={handleClose}
                >
                  Submit
                </button>
                <button
                  className="bg-border-error text-white w-[9.375rem] rounded-2xl text-2xl font-bold"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-primary-500 text-white w-[9.375rem] rounded-2xl text-2xl font-bold"
                  onClick={handleClose}
                >
                  Done
                </button>
                <button
                  className="bg-border-error text-white w-[9.375rem] rounded-2xl text-2xl font-bold"
                  onClick={handleCancel}
                >
                  Back
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
