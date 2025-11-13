import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import ProductListModal from "./ProductListComponent/ProductListModal";
import useProductModal from "./useProductModal";
import EditProductModal from "./EditProductModal/EditProductModal";
import { MODAL_PAGES } from "../../constants/editModalConstants";

export default function EditModal() {
  const { productToEdit, handleProductToEdit, setProductToEdit } =
    useProductModal();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const currentPage = useSelector(
    (state: RootState) => state.modal.currentPage
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="pt-8 px-16 w-fit max-w-[53rem] h-fit max-h-[50rem] bg-background-primary border-2 border-border-primary rounded-3xl flex flex-col transition-all duration-1000 ease-in-out overflow-hidden">
        {currentPage === MODAL_PAGES.PRODUCT_LIST && (
          <div>
            <ProductListModal setProductToEdit={handleProductToEdit} />
          </div>
        )}
        {currentPage === MODAL_PAGES.EDIT_PRODUCT && (
          <EditProductModal
            productToEdit={productToEdit}
            setProductToEdit={setProductToEdit}
          />
        )}
      </div>
    </div>
  );
}
