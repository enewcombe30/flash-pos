import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginData } from "../../../constants/dummyLogin";

// Simulate API call
const checkLoginCode = async (code: number | string) => {
  // Convert string code to number if possible
  const numericCode = typeof code === "string" ? Number(code) : code;
  if (isNaN(numericCode)) {
    return null;
  }
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 300));
  return loginData.find((u) => u.code === numericCode) || null;
};

export default function useLoginModal() {
  const [input, setInput] = useState<(number | string)[]>(["-", "-", "-"]);
  const [hasAccess, setHasAccess] = useState(false);
  const mutation = useMutation({
    mutationFn: checkLoginCode,
    onSuccess: (user) => {
      if (user) {
        alert(`Welcome, ${user.name}!`);
        setHasAccess(true);
      } else {
        setHasAccess(false);
      }
      setInput(["-", "-", "-"]);
    },
  });
  const handleNumber = (num: number) => {
    setInput((prev) => {
      const next = [...prev];
      const idx = next.findIndex((v) => v === "-");
      if (idx !== -1) next[idx] = num;
      return next;
    });
  };

  // Helper to delete the last entered number
  const handleDelete = () => {
    setInput((prev) => {
      const next = [...prev];
      const idx = next
        .slice()
        .reverse()
        .findIndex((v) => v !== "-");
      if (idx !== -1) next[2 - idx] = "-";
      return next;
    });
  };

  return { handleDelete, handleNumber, input, mutation, hasAccess };
}
