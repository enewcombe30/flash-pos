import "./index.css";
import "./App.css";
import ProductComponent from "./components/ProductComponent";
import OrderPad from "./components/OrderPad";

function App() {
  return (
    <div className="w-full h-screen bg-black text-slate-200 border border-slate-200">
      <div className="w-full h-[10%] border border-slate-200">
        <div className="w-fit h-content m-auto">Top function bar</div>
      </div>
      <div className="w-full h-screen flex bg-black border border-slate-200">
        <div className="w-[20%] h-[90%] bg-black flex-none text-slate-200 border border-slate-200">
          <div className="w-full h-[65%] bg-black border border-slate-200">
            <OrderPad />
          </div>
          <div className="w-full h-[35%] bg-black border border-slate-200">
            <div className="w-fit h-4 mx-auto">Numeric pad</div>
          </div>
        </div>
        <div className="w-[65%] h-[90%] bg-black flex-none text-slate-200 border border-slate-200">
          <div className="w-full h-[85%] border border-slate-200">
            <ProductComponent />
          </div>
          <div className="w-full h-[15%] border border-slate-200">
            <div className="w-fit h-4 mx-auto">Button mods and functions</div>
          </div>
        </div>
        <div className="w-[15%] h-[90%] flex bg-black text-slate-200 border border-slate-200">
          <div className="w-fit h-4 mx-auto">Functions and payments</div>
        </div>
      </div>
    </div>
  );
}

export default App;
