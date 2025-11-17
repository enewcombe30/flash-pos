import { scrollbarStyles } from "../../../constants/styleConstants";
import useProductListModal from "./useProductListModal";
import { editProduct } from "../../../types/recipeTypes";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";

interface props {
  setProductToEdit: (editProduct: editProduct) => void;
}

export default function ProductListModal({ setProductToEdit }: props) {
  const editList = useSelector((state: RootState) => state.modal.editList);
  const { handleRemoveOne, handleProductSelect, handleClose } =
    useProductListModal({
      setProductToEdit,
    });

  const renderProducts = () => {
    const products = editList.map((recipe, index) => {
      const allergies = recipe.assignedAllergies
        ? recipe.assignedAllergies
            .map((allergy) => allergy.allergen.name)
            .join(", ") + (recipe.userNotes.length > 0 ? "," : "")
        : " ";

      console.log("allerhgies", allergies);
      return (
        <div
          key={index}
          className="w-[21rem] h-[4rem] bg-gray-300 rounded mb-2 flex items-center justify-between px-4 cursor-pointer relative"
        >
          <div
            className="text-black font-bold flex flex-col flex-1 pr-8"
            onClick={() => handleProductSelect({ id: index, recipe })}
          >
            <span>{recipe.name}</span>
            <div className="text-xs text-gray-400 mt-1 italic">
              {(recipe.userNotes && recipe.userNotes.length > 0) ||
              allergies ? (
                <span>
                  {allergies} {recipe.userNotes.join(", ")}
                </span>
              ) : (
                `(${index + 1})`
              )}
            </div>
          </div>
          <div
            className="text-red-700 cursor-pointer absolute right-4 font-bold"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveOne(recipe);
            }}
          >
            X
          </div>
        </div>
      );
    });
    return products;
  };

  return (
    <>
      <div
        className="h-fit max-h-[26.875rem] mb-4 mx-8 overflow-scroll space-y-6 custom-scrollbar"
        style={scrollbarStyles}
      >
        {renderProducts()}
      </div>
      <div>
        <div className="space-x-4 flex mx-auto mb-8 w-fit">
          <button
            className="bg-primary-500 text-white w-[9.375rem] h-[2.5rem] rounded-2xl text-2xl font-bold"
            onClick={handleClose}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
