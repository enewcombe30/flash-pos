import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { scrollbarStyles } from "../../constants/styleConstants";
import TrashCan from "../../svgs/TrashCan";

export default function EditModal() {
  const bulkProducts = useSelector((state: RootState) => state.orders.items);
  // Remove dummy products when real products exist
  const DummyProducts = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
  ];
  // Remove when hooked up to real data
  const productData = bulkProducts.length < 1 ? DummyProducts : bulkProducts;

  const renderProducts = () => {
    return productData.map((product, index) => (
      <div
        key={product.id}
        className="w-[21.875rem] h-[4rem] bg-[#D9D9D9] mx-auto flex items-center justify-between px-4 cursor-pointer"
      >
        <div className="text-black font-bold flex items-center">
          {product.name}{" "}
          <span className="text-sm italic text-[#908D8D] ml-2">{`(${
            index + 1
          })`}</span>
        </div>
        <div className="cursor-pointer">
          <TrashCan />
        </div>
      </div>
    ));
  };

  return (
    <div className="mx-auto my-[6rem] pt-8 w-[29.375rem] h-fit max-h-[38rem] bg-background-primary border-2 border-primary-500 rounded-3xl">
      <div
        className="h-fit max-h-[430px] mb-4 mx-8 overflow-scroll space-y-6 custom-scrollbar"
        style={scrollbarStyles}
      >
        {renderProducts()}
      </div>
      <div className="space-x-4 flex mx-auto mb-8 w-fit">
        <button className="bg-primary-500 text-white w-[10.313rem] rounded-2xl text-2xl font-bold">
          Submit
        </button>
        <button className="bg-border-error text-white w-[10.313rem] h-[50px] rounded-2xl text-2xl font-bold">
          Cancel
        </button>
      </div>
    </div>
  );
}
