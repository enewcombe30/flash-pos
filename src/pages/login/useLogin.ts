import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLoginCode, resetAccess } from "../../state/login/loginSlice";
import { RootState } from "../../state/store";

export default function useLogin() {
  const dispatch = useDispatch();
  const hasAccess = useSelector((state: RootState) => state.login.hasAccess);
  const error = useSelector((state: RootState) => state.login.error);
  const currentUser = useSelector(
    (state: RootState) => state.login.matchedUser
  );

  const [input, setInput] = useState<string[]>(["-", "-", "-"]);
  const [isPending, setIsPending] = useState(false);

  const userName = currentUser ? currentUser.name : "User";

  const handleNumber = (num: string) => {
    setInput((prev) => {
      const idx = prev.findIndex((v) => v === "-");
      if (idx === -1) return prev;
      const next = [...prev];
      next[idx] = num;
      return next;
    });
  };

  const handleDelete = () => {
    setInput((prev) => {
      const idx = prev.findIndex((v) => v === "-");
      if (idx === 0) return prev;
      const next = [...prev];
      next[idx === -1 ? prev.length - 1 : idx - 1] = "-";
      return next;
    });
  };

  const handleSubmit = () => {
    const code = Number(input.join(""));
    if (isNaN(code)) return;
    setIsPending(true);
    setTimeout(() => {
      dispatch(checkLoginCode(code));
      setIsPending(false);
      setInput(["-", "-", "-"]);
    }, 300); // Simulate async check
  };

  return {
    handleDelete,
    handleNumber,
    input,
    mutation: {
      isPending,
      mutate: handleSubmit,
    },
    hasAccess,
    resetAccess: () => dispatch(resetAccess()),
    setInput,
    error,
    userName,
  };
}
