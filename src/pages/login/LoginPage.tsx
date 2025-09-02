import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./loginModal/LoginModal";
import LoginSuccess from "./LoginSuccess";
import useLoginModal from "./useLogin";
import { setIsLoggedIn } from "../../state/login/loginSlice";
import { RootState } from "../../state/store";
import { AnimatePresence, motion } from "framer-motion";

export default function LoginPage() {
  const {
    handleDelete,
    handleNumber,
    input,
    mutation,
    hasAccess,
    error,
    userName,
  } = useLoginModal();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  useEffect(() => {
    if (hasAccess) {
      const timer = setTimeout(() => {
        dispatch(setIsLoggedIn(true));
      }, 1500); // Show success for 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, [hasAccess, isLoggedIn, dispatch]);

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[300px] h-fit bg-[#061C03] p-4 border-[3px] border-[#284E24] text-slate-200 flex flex-col justify-between rounded-3xl">
          <AnimatePresence mode="wait">
            {!hasAccess ? (
              <motion.div
                key="modal"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <LoginModal
                  handleDelete={handleDelete}
                  handleNumber={handleNumber}
                  input={input}
                  mutation={mutation}
                  error={error}
                />
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <LoginSuccess userName={userName} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
