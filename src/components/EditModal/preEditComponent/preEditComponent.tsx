import { scrollbarStyles } from "../../../constants/styleConstants";
import usePreeditComponent from "./usePreeditComponent";
import { editProduct } from "../../../types/recipeTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

interface props {
  setProductToEdit: (editProduct: editProduct) => void;
  productToEdit: editProduct | null;
}

export default function PreEditComponent({
  setProductToEdit,
  productToEdit,
}: props) {
  const editList = useSelector((state: RootState) => state.modal.editList);
  const { handleSubmit, handleRemoveOne } = usePreeditComponent();

  const renderProducts = () => {
    return editList.map((recipe, index) => (
      <div
        key={index}
        className="w-full h-[4rem] bg-gray-300 rounded mb-2 flex items-center justify-between px-4 cursor-pointer relative"
      >
        <div
          className="text-black font-bold flex flex-col"
          onClick={() => setProductToEdit({ id: index, recipe })}
        >
          <span>{recipe.name}</span>
          <div className="text-xs text-gray-400 mt-1 italic">
            ({index + 1}){/* Display notes if they exist */}
            {recipe.userNotes && recipe.userNotes.length > 0 && (
              <span> - {recipe.userNotes.join(", ")}</span>
            )}
          </div>
        </div>
        <div
          className="text-red-700 cursor-pointer absolute right-4 font-bold"
          onClick={() => handleRemoveOne(index)}
        >
          X
        </div>
      </div>
    ));
  };

  const renderNotes = () => {
    if (!productToEdit || !productToEdit.recipe.userNotes) return null;
    return productToEdit.recipe.userNotes.map((note, index) => (
      <div
        key={index}
        className="flex items-center justify-between bg-gray-200 p-2 rounded mb-2"
      >
        <span className="text-sm">{note}</span>
        <button className="text-red-500 hover:text-red-700">X</button>
      </div>
    ));
  };

  return (
    <>
      <div
        className="h-fit max-h-[26.875rem] mb-4 mx-8 overflow-scroll space-y-6 custom-scrollbar"
        style={scrollbarStyles}
      >
        {renderProducts()}
      </div>
      {productToEdit && (
        <div className="mx-8 mb-4">
          <h3 className="text-lg font-bold mb-2">
            Notes for {productToEdit.recipe.name}
          </h3>
          {renderNotes()}
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Submit Changes
          </button>
        </div>
      )}
    </>
  );
}
