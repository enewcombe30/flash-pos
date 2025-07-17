import "./index.css";
import "./App.css";
import ProductComponent from "./components/ProductComponent";
import OrderPad from "./components/OrderPad";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="w-full h-screen bg-[#061C03] text-slate-200 border border-[#061C03] overflow-hidden">
      <div className="w-full h-[30px] border border-[#061C03]">
        <div className="w-fit h-content m-auto">Top function bar</div>
      </div>
      <div className="w-full h-full flex bg-black border border-[#061C03]">
        <div className="w-[20%] h-full bg-black flex-none text-slate-200 border border-[#061C03]">
          <div className="w-full h-[60%] bg-black border border-[#061C03]">
            <OrderPad />
          </div>
          <div className="w-full h-[40%] bg-black border border-[#061C03]">
            <div className="w-fit h-4 mx-auto">Numeric pad</div>
          </div>
        </div>
        <div className="w-[65%] h-full bg-black flex-none text-slate-200 border border-[#061C03]">
          <div className="w-full h-full border border-[#061C03]">
            <ProductComponent />
          </div>
          <div className="fixed bottom-0 left-0 w-full h-[30px] border border-[#061C03] bg-black z-50">
            <div className="w-fit h-4 mx-auto">Button mods and functions</div>
          </div>
        </div>
        <div className="w-[15%] h-full flex bg-black text-slate-200 border border-[#061C03]">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default App;
