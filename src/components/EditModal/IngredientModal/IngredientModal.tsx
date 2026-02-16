import { editProduct, Ingredient } from "../../../types/recipeTypes";
import CheckIcon from "../../../svgs/CheckIcon";
import useIngredientModal from "./useIngredientModal";
import { scrollbarStyles } from "../../../constants/styleConstants";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
  localEditList: editProduct[];
  setLocalEditList: (list: editProduct[]) => void;
}

export default function IngredientModal({
  productToEdit,
  setProductToEdit,
  localEditList,
  setLocalEditList,
}: props) {
  const { isIngredientSelected, toggleIngredient, getAllIngredients } =
    useIngredientModal({
      productToEdit,
      setProductToEdit,
      localEditList,
      setLocalEditList,
    });

  const renderIngredientCheckbox = (ingredient: Ingredient) => {
    const isSelected = isIngredientSelected(ingredient.id);

    const assignedAllergies = productToEdit?.recipe.assignedAllergies || [];
    const assignedAllergenIds = assignedAllergies.map((a) => a.allergenId);
    const isDisabled = ingredient.ingredientAllergens.some((allergen) =>
      assignedAllergenIds.includes(allergen.allergenId),
    );
    console.log(ingredient);
    return (
      <button
        key={ingredient.id}
        className={`w-full font-bold text-lg border py-2 px-4 rounded transition-colors flex items-center space-x-4 ${
          isDisabled
            ? "border-gray-600 cursor-not-allowed"
            : "border-border-primary"
        }`}
        onClick={() => toggleIngredient(ingredient.id, ingredient.name)}
      >
        <div
          className={`w-6 h-6 border-2 rounded flex items-center justify-center bg-background-primary ${
            isDisabled ? "border-gray-600" : "border-border-primary"
          }`}
        >
          {isSelected && <CheckIcon />}
        </div>
        <span
          className={`font-medium text-sm text-white ${
            isDisabled || !isSelected ? "line-through" : ""
          }`}
        >
          {ingredient.name} - {ingredient.metricValue}
          {ingredient.unit}
        </span>
      </button>
    );
  };

  const ingredients = getAllIngredients();

  return (
    <div className="mb-6">
      <div
        className="p-4 space-y-4 overflow-y-scroll max-h-60 custom-scrollbar"
        style={scrollbarStyles}
      >
        {ingredients.length > 0 ? (
          ingredients.map((ingredient) => renderIngredientCheckbox(ingredient))
        ) : (
          <p className="text-gray-400 text-center">No ingredients available</p>
        )}
      </div>
    </div>
  );
}
