import useOrderPad from "./useOrderPad";

export default function OrderPad() {
  const { grouped, handleRemove, handleMouseDown, handleMouseUp } =
    useOrderPad();

  return (
    <div className="p-4 bg-slate-200 text-slate-900 h-full w-full">
      {Object.values(grouped).map(({ item, count }) => (
        <div
          key={item.id}
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
      ))}
    </div>
  );
}
