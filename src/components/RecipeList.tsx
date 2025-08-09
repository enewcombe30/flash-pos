// import { useEffect, useState } from "react";
// import { Recipe } from "../types/recipeTypes";

// const RecipeList = () => {
//   const [recipes, setRecipes] = useState<Recipe[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Fetch the recipes from the API
//     fetch("http://localhost:3001/recipes") // Ensure this URL is correct for your API
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("API Data:", data); // Check the data in the console
//         setRecipes(data); // Set the data to the recipes state
//       })
//       .catch((error) => {
//         console.error("Error fetching recipes:", error);
//         setError(error.message); // Handle any error that occurs during the fetch
//       });
//   }, []);

//   // Function to render recipes
//   const renderRecipes = () => {
//     if (recipes.length === 0) return <p>No recipes found.</p>; // Display a message if no recipes are found

//     return recipes.map((recipe) => (
//       <li key={recipe.id}>
//         <div className="border border-gray-500  m-2">
//           <h2 className="font-bold border-b border-gray-500 p-2">
//             {recipe.name}
//           </h2>
//           <div className="p-2">
//             <h3>Ingredients:</h3>
//             <ul>
//               {recipe.ingredients.map((ingredient) => (
//                 <li key={ingredient.id}>
//                   {ingredient.amount}g of {ingredient.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </li>
//     ));
//   };

//   return (
//     <div>
//       <h1>Recipe List</h1>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <ul>{renderRecipes()}</ul>
//     </div>
//   );
// };

// export default RecipeList;
