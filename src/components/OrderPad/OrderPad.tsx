import useOrderPad from "./useOrderPad";

export default function OrderPad() {
  const {
    grouped,
    handleMouseDown,
    handleMouseUp,
    isSelected,
    total,
    hasOrders,
    isModalOpen,
    isBeingEdited,
  } = useOrderPad();

  return (
    <div
      className={`p-2 bg-slate-200 text-slate-900 h-full w-full flex flex-col ${
        isModalOpen ? "pointer-events-none" : ""
      }`}
    >
      <div className="flex-1 overflow-y-auto">
        {hasOrders ? (
          grouped.map(([groupKey, { item, count, index }]) => (
            <div
              className={`flex justify-between relative mb-2 ${
                isSelected(item) ? "bg-primary-100" : ""
              } ${isBeingEdited(index) ? "bg-lime-200" : ""}`}
              key={groupKey}
            >
              <div
                className="cursor-pointer select-none pr-5 w-[calc(100%-2rem)]"
                onMouseDown={() => handleMouseDown(item)}
                onMouseUp={() => handleMouseUp()}
                onTouchStart={() => handleMouseDown(item)}
                onTouchEnd={() => handleMouseUp()}
              >
                <div>
                  {count} x {item.name}
                </div>
                <div className="text-xs text-gray-400 mt-1 italic truncate">
                  {item.userNotes &&
                    item.userNotes.length > 0 &&
                    item.userNotes.join(", ")}
                  {item.userNotes &&
                    item.userNotes.length > 0 &&
                    item.assignedAllergies &&
                    item.assignedAllergies.length > 0 &&
                    ", "}
                  {item.assignedAllergies &&
                    item.assignedAllergies.length > 0 &&
                    item.assignedAllergies
                      .map((a) => a.allergen.name)
                      .join(", ")}
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
      <div className="mt-4 flex justify-between font-bold text-lg border-t p-2 border-slate-400">
        <div>Total</div>
        <div>£{total.toFixed(2)}</div>
      </div>
    </div>
  );
}
