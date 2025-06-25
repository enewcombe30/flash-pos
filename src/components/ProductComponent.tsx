import { DummyRecipes } from "../constants/dummyData";
import { Recipe } from "../types/recipeTypes";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../state/orders/orderSlice";
import { RootState } from "../state/store";

export default function ProductComponent() {
  const orders = useSelector((state: RootState) => state.orders);

  console.log("Orders:", orders);
  const dispatch = useDispatch();
  const renderButtons = () => {
    return DummyRecipes.map((item: Recipe) => (
      <button
        key={item.id}
        onClick={dispatch.bind(null, addItem(item))}
        type="button"
        className="w-full h-12 bg-gray-800 text-white border border-gray-600 hover:bg-gray-700"
      >
        {item.name}
      </button>
    ));
  };
  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="grid grid-cols-3 gap-4">{renderButtons()}</div>
    </div>
  );
}
