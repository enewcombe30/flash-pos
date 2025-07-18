import { DummyButton } from "../types/dummyDataTypes";
import { DummyCategories } from "../constants/dummtButtonLists";
export default function SideBar() {
  const dryCol = DummyCategories.slice(0, 5);
  const wetCol = DummyCategories.slice(5, 10);

  function renderCategories(col: DummyButton[]) {
    return col.map((category: DummyButton) => (
      <button
        key={category.id}
        onClick={category.onClick}
        className={`${
          category.label === "Hot Drinks" ? "bg-[#A32616]" : "bg-[#1E3A8A]"
        } w-full h-[3.125rem] text-white rounded-md text-sm px-1`}
      >
        {category.label}
      </button>
    ));
  }

  return (
    <div className="w-full h-full bg-[#061C03] border border-[#061C03] flex flex-col px-2 pt-0">
      <div className="flex flex-col gap-2 mb-2">
        <button
          className="w-full h-[3.125rem] bg-[#16A34A] text-white rounded-md text-[1.5rem] font-bold"
          onClick={() => alert("Login clicked")}
        >
          Login
        </button>
        <button
          className="w-full h-[3.125rem] bg-[#AF3023] text-white rounded-md text-[1.5rem] font-bold"
          onClick={() => alert("Correct Item clicked")}
        >
          Correct Item
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">{renderCategories(dryCol)}</div>
        <div className="flex flex-col gap-2">{renderCategories(wetCol)}</div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <button
          className="w-full h-[3.125rem] bg-[#16A34A] text-white rounded-md text-[1.5rem] font-bold"
          onClick={() => alert("Table Plan clicked")}
        >
          Table Plan
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <button
          className="w-full h-[3.125rem] text-white rounded-md bg-[#8B447E] text-sm flex flex-col gap-2 py-[0.75rem]"
          onClick={() => alert("Mains Away clicked")}
        >
          Mains Away
        </button>
        <button
          className="w-full h-[3.125rem] text-white rounded-md bg-[#16A34A] text-sm flex flex-col gap-2 py-[0.75rem]"
          onClick={() => alert("Message clicked")}
        >
          Message
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <button
          className="w-full h-[3.125rem] text-white rounded-md bg-[#8B4444] text-sm flex flex-col gap-2 py-[0.75rem]"
          onClick={() => alert("Print Bill clicked")}
        >
          Print Bill
        </button>
        <button
          className="w-full h-[3.125rem] text-white rounded-md bg-[#A32616] text-sm flex flex-col gap-2 py-[0.75rem]"
          onClick={() => alert("Allergy clicked")}
        >
          Allergy
        </button>
      </div>
    </div>
  );
}
