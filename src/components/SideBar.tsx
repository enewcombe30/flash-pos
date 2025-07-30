import SidebarButton from "./SidebarButton";
import { sidebarButtons } from "../constants/sidebarButtons";

export default function SideBar() {
  return (
    <div className="w-full h-full bg-[#061C03] border border-[#061C03] flex flex-col px-2 pt-2 gap-2">
      <div className="grid grid-cols-2 gap-2">
        {sidebarButtons.map((btn, idx) =>
          btn ? (
            <SidebarButton
              key={btn.label + idx}
              label={btn.label}
              onClick={btn.onClick}
              className={`${btn.bgColor || ""} ${btn.textColor || ""} ${
                btn.font || ""
              } ${btn.textSize || ""}`}
              colSpan={btn.colSpan}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
