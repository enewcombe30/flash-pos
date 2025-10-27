import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { closeModal, editList } from "../../state/openModal/modalSlice";

export default function useEditModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(editList([]));
  };
  return {
    isOpen,
    handleClose,
  };
}
