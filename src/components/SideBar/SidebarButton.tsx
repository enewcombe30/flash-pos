import React from "react";

interface SidebarButtonProps {
  label: string;
  onClick: () => void;
  colSpan: number; // Optional, defaults to 1
  className: string; // Optional, for extra styling
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  label,
  onClick,
  colSpan = 1,
  className = "",
}) => {
  return (
    <button
      className={`w-full h-[3.125rem] text-white rounded-md text-sm px-1 col-span-${colSpan} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SidebarButton;
