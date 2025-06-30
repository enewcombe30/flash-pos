import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { removeItem } from "../state/orders/orderSlice";
import { Recipe } from "../types/recipeTypes";
import { useEffect, useRef } from "react";

export default function OrderPad() {
  const orders = useSelector((state: RootState) => state.orders);
  const dispatch = useDispatch();
  const orderListRef = useRef<HTMLDivElement>(null);

  function getOrderTotal() {
    return orders.reduce((total, item) => total + item.salePrice, 0).toFixed(2);
  }
  function removeItemFromOrder(item: Recipe) {
    dispatch(removeItem(item));
  }
  const renderOrderItems = () => {
    return orders.map((item) => (
      <div
        key={item.orderItemId}
        className="p-2 border-b border-gray-200 flex justify-between items-center"
        onClick={() => removeItemFromOrder(item)}
      >
        <span className="font-semibold text-slate-800">{item.name}</span>
        <span className="text-gray-500">£{item.salePrice.toFixed(2)}</span>
      </div>
    ));
  };

  console.log("Orders:", orders);

  // Scroll to the bottom of the order list when orders change
  useEffect(() => {
    if (orderListRef.current) {
      orderListRef.current.scrollTop = orderListRef.current.scrollHeight;
    }
  }, [orders]);

  return (
    <div className="w-full h-full bg-slate-100 border border-slate-200 relative flex flex-col">
      <div
        ref={orderListRef}
        className="flex-1 overflow-y-auto overflow-x-hidden"
        style={{ paddingBottom: "56px" }}
      >
        {renderOrderItems()}
      </div>
      <div className="flex justify-between items-center p-2 border-t border-gray-400 text-slate-800 absolute bottom-0 w-full bg-slate-100">
        <span className="font-bold">Total: </span>
        <span className="font-semibold text-slate-700">£{getOrderTotal()}</span>
      </div>
    </div>
  );
}
