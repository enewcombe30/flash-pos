import { DummyRecipes } from "../constants/dummyData";
import { AltDummyProducts } from "../constants/dummyData";
import { Recipe } from "../types/recipeTypes";
import { useDispatch } from "react-redux";
import { addItem } from "../state/orders/orderSlice";

export default function ProductComponent() {
  const dispatch = useDispatch();
  const renderRecipeButtons = () => {
    const partialDummyRecipes = DummyRecipes.slice(0, 8);
    return (
      <div className="flex flex-wrap gap-2">
        {partialDummyRecipes.map((item: Recipe) => (
          <button
            key={item.id}
            onClick={dispatch.bind(null, addItem(item))}
            type="button"
            className="w-[100px] h-[60px] bg-[#284E24] text-white rounded-md p-1"
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  };
  const renderAltButtons = () => {
    return (
      <div className="flex flex-wrap gap-2 justify-end">
        {AltDummyProducts.map((item: Recipe) => (
          <button
            key={item.id}
            className="w-[100px] h-[60px] bg-[#8B447E] text-white rounded-md p-1"
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  };
  return (
    <div className="w-full h-full grid p-4 grid-cols-6">
      <div className="col-span-2">{renderRecipeButtons()}</div>
      <div className="col-span-3"></div>
      <div className="">{renderAltButtons()}</div>
    </div>
  );
}
