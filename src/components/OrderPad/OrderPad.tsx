import useOrderPad from "./useOrderPad";

export default function OrderPad() {
  const {
    grouped,
    handleRemove,
    handleMouseDown,
    handleMouseUp,
    total,
    hasOrders,
  } = useOrderPad();

  return (
    <div className="p-4 bg-slate-200 text-slate-900 h-full w-full flex flex-col">
      {/* Orders list, scrollable */}
      <div className="flex-1 overflow-y-auto">
        {hasOrders ? (
          Object.values(grouped).map(({ item, count }) => (
            <div className="flex justify-between" key={item.id}>
              <div
                className="mb-2 cursor-pointer select-none"
                onClick={() => handleRemove(item)}
                onMouseDown={() => handleMouseDown(item)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={() => handleMouseDown(item)}
                onTouchEnd={handleMouseUp}
              >
                {count} x {item.name}
              </div>
              <div>£{(item.salePrice * count).toFixed(2)}</div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 mt-8">
            No items in order
          </div>
        )}
      </div>
      {/* Total always at the bottom */}
      <div className="mt-4 flex justify-between font-bold text-lg border-t pt-2 border-slate-400">
        <div>Total</div>
        <div>£{total.toFixed(2)}</div>
      </div>
    </div>
  );
}
