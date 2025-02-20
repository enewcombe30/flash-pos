import "./index.css";
import "./App.css";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <>
      <div className="w-full h-full p-8 bg-[#f5f5f5]">
        <div className="text-3xl font-bold mx-auto w-fit">
          Hey 👋 I'm Elijah
        </div>
        <div className="text-3xl font-bold">Let's get some data</div>
        <RecipeList />
      </div>
    </>
  );
}

export default App;
