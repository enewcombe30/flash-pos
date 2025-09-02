import { useState } from "react";

export default function useMain() {
  const [padValue, setPadValue] = useState<string>("");
  return { padValue, setPadValue };
}
