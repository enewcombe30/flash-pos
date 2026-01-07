import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import ProductListModal from "./ProductList/ProductListModal";

export default function EditModal() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="pt-8 px-8 w-fit max-w-[54rem] h-fit max-h-[50rem] bg-background-primary border-2 border-border-primary rounded-3xl flex flex-col transition-all duration-1000 ease-in-out overflow-hidden">
        <ProductListModal />
      </div>
    </div>
  );
}
