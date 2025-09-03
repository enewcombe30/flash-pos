import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { addItem } from "../../state/orders/orderSlice";
import { clearPadValue } from "../../state/numberPad/numberSlice";
import { Recipe } from "../../types/recipeTypes";

export default function useProductComponent() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.numberPad.padValue);

  const handleRecipeClick = (item: Recipe) => {
    const multiplier = parseInt(value, 10) || 1;
    for (let i = 0; i < multiplier; i++) {
      dispatch(addItem(item));
    }
    dispatch(clearPadValue());
  };

  return { handleRecipeClick };
}
