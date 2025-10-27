import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./loginModal/LoginModal";
import LoginSuccess from "./LoginSuccess";
import useLoginModal from "./useLogin";
import { setIsLoggedIn } from "../../state/login/loginSlice";
import { RootState } from "../../state/store";
import { AnimatePresence, motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

const variants = {
  initial: { opacity: 0, scale: 0.95, y: 40 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: -40 },
};

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
        <div className="w-[300px] h-fit bg-background-primary p-4 border-[3px] border-border-primary text-slate-200 flex flex-col justify-between rounded-3xl">
          <AnimatePresence mode="wait">
            {!hasAccess ? (
              <motion.div
                key="modal"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
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
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
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
