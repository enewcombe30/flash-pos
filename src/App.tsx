import { useState } from "react";
import "./index.css";
import "./App.css";
import ProductComponent from "./components/ProductComponent";
import OrderPad from "./components/OrderPad/OrderPad";
import SideBar from "./components/SideBar";
import NumberPad from "./components/NumberPad/NumberPad";
import LoginPage from "./pages/login/LoginPage";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn } from "./state/login/loginSlice";
import { RootState } from "./state/store";

function App() {
  const [padValue, setPadValue] = useState<string>("");
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen bg-black text-slate-200 border border-[#061C03] overflow-hidden">
      {!isLoggedIn ? (
        <LoginPage />
      ) : (
        <div className="w-full h-full flex bg-black border border-[#061C03]">
          {/* Main content area (left + center) */}
          <div className="w-[85%] h-full flex flex-col">
            {/* Top function bar */}
            <div className="w-full h-[30px] border border-[#061C03]">
              <div className="w-fit h-content m-auto">Top function bar</div>
            </div>
            {/* Main content below top bar */}
            <div className="flex flex-1 h-full">
              <div className="w-[23.5%] h-full bg-black flex-none text-slate-200 border border-[#061C03] flex flex-col">
                {/* Number pad display */}
                <div className="w-full h-[60%] bg-black border border-[#061C03]">
                  <OrderPad />
                </div>
                <div className="w-full h-[40%] bg-black border border-[#061C03]">
                  <NumberPad value={padValue} setValue={setPadValue} />
                </div>
              </div>
              <div className="w-[76.5%] h-full bg-black flex-none text-slate-200 border border-[#061C03]">
                <div className="w-full h-full border border-[#061C03] relative">
                  <ProductComponent
                    padValue={padValue}
                    resetPadValue={() => setPadValue("")}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[30px] border border-[#061C03] bg-black z-50">
                    <div className="w-fit h-4 mx-auto">
                      <button
                        className="hover:underline"
                        onClick={() => dispatch(setIsLoggedIn(false))}
                      >
                        Reset App State
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="w-[15%] h-full bg-black text-slate-200 border border-[#061C03] overflow-y-auto">
            <SideBar />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
