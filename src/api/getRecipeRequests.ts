export async function GetRecipes() {
  const response = await fetch("http://localhost:5001/api/recipes");
  const data = response.json();
  return data;
}
