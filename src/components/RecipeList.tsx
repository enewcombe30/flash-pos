import { useEffect, useState } from "react";

type Recipe = {
  id: number;
  name: string;
  description: string;
  instructions: string;
  category_id: number;
  version: number;
};

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the recipes from the API
    fetch("http://localhost:3001/recipes") // Ensure this URL is correct for your API
      .then((response) => response.json())
      .then((data) => {
        console.log("API Data:", data); // Check the data in the console
        setRecipes(data); // Set the data to the recipes state
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setError(error.message); // Handle any error that occurs during the fetch
      });
  }, []);

  // Function to render recipes
  const renderRecipes = () => {
    if (recipes.length === 0) return <p>No recipes found.</p>; // Display a message if no recipes are found

    return recipes.map((recipe) => (
      <li key={recipe.id}>
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
        <p>
          <strong>Instructions:</strong> {recipe.instructions}
        </p>
        <p>
          <strong>Category ID:</strong> {recipe.category_id}
        </p>
        <p>
          <strong>Version:</strong> {recipe.version}
        </p>
      </li>
    ));
  };

  return (
    <div>
      <h1>Recipe List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>{renderRecipes()}</ul>
    </div>
  );
};

export default RecipeList;
