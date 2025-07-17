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
        } w-full h-[3.125rem]  text-white rounded-md`}
      >
        {category.label}
      </button>
    ));
  }

  return (
    <div className="w-full h-full grid grid-cols-2 px-2 pt-0 bg-[#061C03] border border-[#061C03]">
      <div className="col-span-2 flex flex-col gap-2 h-fit">
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
      <div className="flex flex-col h-fit">
        <div className="flex flex-col gap-2 mx-1">
          {renderCategories(dryCol)}
        </div>
      </div>
      <div className="flex flex-col h-fit">
        <div className="flex flex-col gap-2 mx-1">
          {renderCategories(wetCol)}
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-2 h-fit">
        <button
          className="w-full h-[3.125rem] bg-[#16A34A] text-white rounded-md text-[1.5rem] font-bold"
          onClick={() => alert("Table Plan clicked")}
        >
          Table Plan
        </button>
      </div>
      <div className="flex flex-col h-fit">
        <div className="flex flex-col gap-2 h-fit">
          <button className="w-full h-[3.125rem] text-white rounded-md bg-[#8B447E] text-sm">
            Mains Away
          </button>
        </div>
      </div>
      <div className="flex flex-col h-fit">
        <div className="flex flex-col gap-2 h-fit mx-1">
          <button className="w-full h-[3.125rem] text-white rounded-md bg-[#16A34A] text-sm ">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
