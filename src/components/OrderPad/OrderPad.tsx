import useOrderPad from "./useOrderPad";

export default function OrderPad() {
  const {
    grouped,
    // handleRemove,
    handleMouseDown,
    handleMouseUp,
    total,
    hasOrders,
    isModalOpen,
  } = useOrderPad();

  return (
    <div
      className={`p-4 bg-slate-200 text-slate-900 h-full w-full flex flex-col ${
        isModalOpen ? "pointer-events-none" : ""
      }`} // Disable interactions when modal is open
    >
      {/* Orders list, scrollable */}
      <div className="flex-1 overflow-y-auto">
        {hasOrders ? (
          Object.values(grouped).map(({ item, count }) => (
            <div
              className="flex justify-between relative mb-2 w-[15rem]"
              key={item.id}
            >
              <div
                className="cursor-pointer select-none pr-20 w-[20rem]"
                // onClick={() => handleRemove(item)}
                onMouseDown={
                  isModalOpen ? undefined : () => handleMouseDown(item)
                }
                // onMouseUp={handleMouseUp}
                // onMouseLeave={handleMouseUp}
                onTouchStart={
                  isModalOpen ? undefined : () => handleMouseDown(item)
                }
                onTouchEnd={handleMouseUp}
              >
                <div>
                  {count} x {item.name}
                </div>
                <div className="text-xs text-gray-400 mt-1 italic truncate">
                  {item.userNotes.join(", ")}
                </div>
              </div>
              <div className="absolute right-0 top-0">
                £{(item.salePrice * count).toFixed(2)}
              </div>
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
