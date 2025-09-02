import { DummyCategories } from "./dummtButtonLists";
import backToLogin from "../hooks/useBackToLogin";

// Split categories for two columns
const half = Math.ceil(DummyCategories.length / 2);
const leftCol = DummyCategories.slice(0, half);
const rightCol = DummyCategories.slice(half);

// Pair them for vertical display
const pairedCategories = leftCol.map((cat, idx) => [cat, rightCol[idx]]);

export const sidebarButtons = [
  {
    label: "Login",
    onClick: () => backToLogin(), // Need reactRouter before use
    bgColor: "bg-[#16A34A]",
    textColor: "text-white",
    font: "font-bold",
    textSize: "text-[1.5rem]",
    colSpan: 2,
  },
  {
    label: "Correct Item",
    onClick: () => alert("Correct Item clicked"),
    bgColor: "bg-[#AF3023]",
    textColor: "text-white",
    font: "font-bold",
    textSize: "text-[1.5rem]",
    colSpan: 2,
  },
  // Category buttons in two vertical columns
  ...pairedCategories
    .flatMap(([left, right]) => [
      {
        label: left.label,
        onClick: left.onClick,
        bgColor:
          left.bgColor ||
          (left.label === "Hot Drinks" ? "bg-[#A32616]" : "bg-[#1E3A8A]"),
        textColor: left.textColor || "text-white",
        font: left.font || "",
        textSize: left.textSize || "text-base",
        colSpan: 1,
      },
      right
        ? {
            label: right.label,
            onClick: right.onClick,
            bgColor:
              right.bgColor ||
              (right.label === "Hot Drinks" ? "bg-[#A32616]" : "bg-[#1E3A8A]"),
            textColor: right.textColor || "text-white",
            font: right.font || "",
            textSize: right.textSize || "text-base",
            colSpan: 1,
          }
        : null,
    ])
    .filter(Boolean),
  {
    label: "Table Plan",
    onClick: () => alert("Table Plan clicked"),
    bgColor: "bg-[#16A34A]",
    textColor: "text-white",
    font: "font-bold",
    textSize: "text-[1.5rem]",
    colSpan: 2,
  },
  {
    label: "Mains Away",
    onClick: () => alert("Mains Away clicked"),
    bgColor: "bg-[#8B447E]",
    textColor: "text-white",
    font: "",
    textSize: "text-sm",
    colSpan: 1,
  },
  {
    label: "Message",
    onClick: () => alert("Message clicked"),
    bgColor: "bg-[#16A34A]",
    textColor: "text-white",
    font: "",
    textSize: "text-sm",
    colSpan: 1,
  },
  {
    label: "Pay",
    onClick: () => alert("Pay clicked"),
    bgColor: "bg-[#1E3A8A]",
    textColor: "text-white",
    font: "font-bold",
    textSize: "text-sm",
    colSpan: 2,
  },

  {
    label: "Print Bill",
    onClick: () => alert("Print Bill clicked"),
    bgColor: "bg-[#8B4444]",
    textColor: "text-white",
    font: "",
    textSize: "text-sm",
    colSpan: 1,
  },
  {
    label: "Allergy",
    onClick: () => alert("Allergy clicked"),
    bgColor: "bg-[#A32616]",
    textColor: "text-white",
    font: "",
    textSize: "text-sm",
    colSpan: 1,
  },
  {
    label: "Send Order",
    onClick: () => alert("Send Order clicked"),
    bgColor: "bg-[#16A34A]",
    textColor: "text-white",
    font: "font-bold",
    textSize: "text-sm",
    colSpan: 2,
  },
];
