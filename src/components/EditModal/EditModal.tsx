import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import PreEditComponent from "./preEditComponent/preEditComponent";
import useEditModal from "./useEditModal";
import EditProductModal from "./EditProductModal/EditProductModal";

export default function EditModal() {
  const { productToEdit, setProductToEdit, handleClose } = useEditModal();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);

  // return null if modal not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="pt-8 px-16 w-fit max-w-[53rem] h-fit max-h-[50rem] bg-background-primary border-2 border-border-primary rounded-3xl flex flex-col transition-all duration-500 ease-in-out">
        {productToEdit ? (
          <EditProductModal
            setKeyboardOpen={setKeyboardOpen}
            productToEdit={productToEdit}
            setProductToEdit={setProductToEdit}
          />
        ) : (
          <div>
            <PreEditComponent
              setProductToEdit={setProductToEdit}
              productToEdit={productToEdit}
            />
            {!keyboardOpen && (
              <div className="space-x-4 flex mx-auto mb-8 w-fit">
                <button
                  className="bg-primary-500 text-white w-[10.313rem] rounded-2xl text-2xl font-bold"
                  onClick={handleClose}
                >
                  Submit
                </button>
                <button
                  className="bg-red-500 text-white w-[10.313rem] h-[50px] rounded-2xl text-2xl font-bold"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
