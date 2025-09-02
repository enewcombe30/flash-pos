import { useDispatch } from "react-redux";
import { setIsLoggedIn, resetAccess } from "../state/login/loginSlice";

export default function useBackToLogin() {
  const dispatch = useDispatch();

  function backToLogin() {
    dispatch(setIsLoggedIn(false));
    dispatch(resetAccess()); // Reset access
  }

  return { backToLogin };
}
