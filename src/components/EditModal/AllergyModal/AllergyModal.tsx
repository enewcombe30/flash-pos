import { editProduct } from "../../../types/recipeTypes";
import { Allergen } from "../../../types/recipeTypes";
import { allergies } from "../../../constants/allergies";
import CheckIcon from "../../../svgs/CheckIcon";
import useAllergyModal from "./useAllergyModal";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
}

export default function AllergyModal({
  productToEdit,
  setProductToEdit,
}: props) {
  const {
    toggleAllergy,
    isAllergySelected,
    showMore,
    setShowMore,
    handleShowAll,
  } = useAllergyModal({
    productToEdit,
    setProductToEdit,
  });

  const renderAllergyCheckbox = (allergy: Allergen) => {
    const isSelected = isAllergySelected(allergy);
    return (
      <button
        key={allergy.allergenId}
        className={`w-[12rem] font-bold text-lg border border-border-primary py-2 px-4 rounded ${
          isSelected ? "bg-border-primary" : ""
        } text-white transition-colors flex items-center space-x-4`}
        onClick={() => toggleAllergy(allergy)}
      >
        <div
          className={`w-6 h-6 border-2 rounded flex items-center justify-center bg-background-primary border-border-primary`}
        >
          {isSelected && <CheckIcon />}
        </div>
        <span className="text-white font-medium text-sm">
          {allergy.allergen.name}
        </span>
      </button>
    );
  };

  if (!showMore) {
    return (
      <div className="grid grid-flow-col grid-rows-2 gap-4 mb-6">
        {allergies.slice(0, 3).map((allergy) => renderAllergyCheckbox(allergy))}
        <button
          key={"allergy-all"}
          className={`w-[12rem] font-bold border border-border-primary py-2 px-4 rounded text-white transition-colors flex items-center space-x-4`}
          onClick={() => handleShowAll()}
        >
          {/* Add bg colour when allergies from the full list have been added */}
          <span className="text-white font-medium w-fit mx-auto">
            Allergy All...
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4 mb-6 mx-auto h-fit overflow-scroll max-h-80 custom-scrollbar">
      {allergies.map((allergy) => renderAllergyCheckbox(allergy))}
      <button
        className="font-bold text-lg border border-primary-500 py-2 px-4 rounded text-white hover:bg-primary-500 transition-colors"
        onClick={() => setShowMore(false)}
      >
        Show Less
      </button>
    </div>
  );
}
