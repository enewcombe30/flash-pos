import { Ingredient, editProduct } from "../../../types/recipeTypes";
import { useState, useEffect } from "react";

interface props {
  productToEdit: editProduct | null;
  setProductToEdit: (editProduct: editProduct | null) => void;
  localEditList: editProduct[];
  setLocalEditList: (list: editProduct[]) => void;
}

export default function useIngredientModal({
  productToEdit,
  setProductToEdit,
  localEditList,
  setLocalEditList,
}: props) {
  const [selectedIngredients, setSelectedIngredients] = useState<number[]>(
    productToEdit?.recipe.RecipeIngredient.map((ri) => ri.ingredientId) || []
  );

  // Sync selectedIngredients when notes or allergies change
  useEffect(() => {
    if (!productToEdit) return;

    const allIngredients = productToEdit.recipe.RecipeIngredient.flatMap(
      (ri) => ri.ingredients
    );
    const userNotes = productToEdit.recipe.userNotes || [];
    const assignedAllergies = productToEdit.recipe.assignedAllergies || [];

    // Get allergen IDs that have been assigned to the product
    const assignedAllergenIds = assignedAllergies.map((a) => a.allergenId);

    // Start with all ingredients selected
    const shouldBeSelected = allIngredients
      .filter((ingredient) => {
        // Ingredient should be unselected if "No [ingredient]" note exists
        const noteText = `No ${ingredient.name}`;
        if (userNotes.includes(noteText)) {
          return false;
        }

        // Ingredient should be unselected if it contains any assigned allergen
        const hasAssignedAllergen = ingredient.ingredientAllergens.some(
          (allergen) => assignedAllergenIds.includes(allergen.allergenId)
        );
        if (hasAssignedAllergen) {
          return false;
        }

        return true;
      })
      .map((ingredient) => ingredient.id);

    setSelectedIngredients(shouldBeSelected);
  }, [
    productToEdit,
    productToEdit?.recipe.userNotes,
    productToEdit?.recipe.assignedAllergies,
    productToEdit?.id,
  ]);

  const toggleIngredient = (ingredientId: number, ingredientName: string) => {
    if (!productToEdit) return;

    const isCurrentlySelected = selectedIngredients.includes(ingredientId);
    const noteText = `No ${ingredientName}`;

    // Find the ingredient to check its allergens
    const ingredient = productToEdit.recipe.RecipeIngredient.flatMap(
      (ri) => ri.ingredients
    ).find((ing) => ing.id === ingredientId);

    // Check if this ingredient has any assigned allergens
    const assignedAllergies = productToEdit.recipe.assignedAllergies || [];
    const assignedAllergenIds = assignedAllergies.map((a) => a.allergenId);
    const hasAssignedAllergen = ingredient?.ingredientAllergens.some(
      (allergen) => assignedAllergenIds.includes(allergen.allergenId)
    );

    // Prevent checking an ingredient if it has an assigned allergen
    if (!isCurrentlySelected && hasAssignedAllergen) {
      // Don't allow checking ingredients that contain assigned allergens
      return;
    }

    // Update selected ingredients
    const newSelectedIngredients = isCurrentlySelected
      ? selectedIngredients.filter((id) => id !== ingredientId)
      : [...selectedIngredients, ingredientId];

    setSelectedIngredients(newSelectedIngredients);

    // Update user notes based on selection
    let updatedNotes = [...(productToEdit.recipe.userNotes || [])];

    if (isCurrentlySelected) {
      // Ingredient was checked, now unchecking - add "No [ingredient]" note if not already present
      if (!updatedNotes.includes(noteText)) {
        updatedNotes.push(noteText);
      }
    } else {
      // Ingredient was unchecked, now checking - remove the "No [ingredient]" note
      updatedNotes = updatedNotes.filter((note) => note !== noteText);
    }

    // Update the recipe with new notes
    const updatedRecipe = {
      ...productToEdit.recipe,
      userNotes: updatedNotes,
    };

    // Update local product state
    setProductToEdit({
      ...productToEdit,
      recipe: updatedRecipe,
    });

    // Update localEditList
    const updatedList = localEditList.map((item) =>
      item.id === productToEdit.id ? { ...item, recipe: updatedRecipe } : item
    );
    setLocalEditList(updatedList);
  };

  const isIngredientSelected = (ingredientId: number) => {
    return selectedIngredients.includes(ingredientId);
  };

  const getAllIngredients = (): Ingredient[] => {
    if (!productToEdit) return [];
    return productToEdit.recipe.RecipeIngredient.flatMap(
      (ri) => ri.ingredients
    );
  };

  return {
    isIngredientSelected,
    toggleIngredient,
    getAllIngredients,
    selectedIngredients,
  };
}
