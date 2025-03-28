// import { UseSelector } from react-redux;
// import { RootState } from @reduxjs/toolkit/query;
import { useQuery } from "@tanstack/react-query";
import { GetRecipes } from "../../api/getRecipeRequests";
import { Recipe } from "../../types/recipeTypes";

export default function FastBar() {
  const recipeQuery = useQuery({
    queryKey: ["recipes"],
    queryFn: GetRecipes,
  });

  if (recipeQuery.isLoading) return "Loading";
  if (recipeQuery.error) return <pre>{JSON.stringify(recipeQuery.error)}</pre>;

  console.log(recipeQuery.fetchStatus === "fetching");

  return (
    <div>
      <div>
        {recipeQuery.data &&
          recipeQuery.data.map((recipe: Recipe) => (
            <div>
              <div key={recipe.id} className="font-extrabold text-xl mb-2">
                {recipe.name}
              </div>

              {recipe.recipeAllergens.length > 0 && (
                <ul className="ml-4 mb-2">
                  <div className="font-bold">Recipe Allergens</div>
                  {recipe.recipeAllergens.map((allergen) => (
                    <li>{allergen.allergen.name}</li>
                  ))}
                </ul>
              )}
              {recipe.recipeDietaryTags.length > 0 && (
                <ul className="ml-4 mb-2">
                  <div className="font-bold">Dietary Info</div>
                  {recipe.recipeDietaryTags.map((tag) => (
                    <li>"{tag.dietaryTag.name}"</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
