import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { removeItem } from "../state/orders/orderSlice";
import { Recipe } from "../types/recipeTypes";

export default function OrderPad() {
  const orders = useSelector((state: RootState) => state.orders);
  const dispatch = useDispatch();
  function getOrderTotal() {
    return orders.reduce((total, item) => total + item.salePrice, 0).toFixed(2);
  }
  function removeItemFromOrder(item: Recipe) {
    dispatch(removeItem(item));
    console.log("Removed item:", item);
  }
  const renderOrderItems = () => {
    return orders.map((item) => (
      <div
        key={item.id}
        className="p-2 border-b border-gray-200 flex justify-between items-center"
        onClick={() => removeItemFromOrder(item)}
      >
        <span className="font-semibold text-slate-800">{item.name}</span>
        <span className="text-gray-500">£{item.salePrice.toFixed(2)}</span>
      </div>
    ));
  };
  console.log("Orders in OrderPad:", orders);
  return (
    <div className="w-full h-full bg-slate-100 border border-slate-200 relative">
      <div>{renderOrderItems()}</div>
      <div className="flex justify-between items-center p-2 border-t border-gray-400 text-slate-800 absolute bottom-0 w-full">
        <span className="font-bold">Total: </span>
        <span className="font-semibold text-slate-700">£{getOrderTotal()}</span>
      </div>
    </div>
  );
}
