import ProductComponent from "../../components/ProductComponent/ProductComponent";
import OrderPad from "../../components/OrderPad/OrderPad";
import SideBar from "../../components/SideBar/SideBar";
import NumberPad from "../../components/NumberPad/NumberPad";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, resetAccess } from "../../state/login/loginSlice";

export default function Main() {
  const dispatch = useDispatch();

  // return to login page - for testing purposes
  function backToLogin() {
    dispatch(setIsLoggedIn(false));
    dispatch(resetAccess());
  }

  return (
    <div className="w-full h-full flex bg-black border border-[#061C03]">
      {/* Main content area (left + center) */}
      <div className="w-[85%] h-full flex flex-col">
        {/* Top function bar */}
        <section className="w-full h-[30px] border border-background-primary">
          <div className="w-fit h-content m-auto">Top function bar</div>
        </section>
        <div className="flex flex-1 h-full">
          <section className="w-[23.5%] h-full bg-black flex-none text-slate-200 border border-background-primary flex flex-col">
            {/* Number pad display */}
            <div className="w-full h-[60%] bg-black border border-background-primary">
              <OrderPad />
            </div>
            <div className="w-full h-[40%] bg-black border border-background-primary">
              <NumberPad />
            </div>
          </section>
          {/* Main section */}
          <section className="w-[76.5%] h-full bg-black flex-none text-slate-200 border border-background-primary">
            <div className="w-full h-full border border-background-primary relative">
              <ProductComponent />
              <div className="absolute bottom-0 left-0 w-full h-[30px]">
                <div className="w-fit h-4 mx-auto">
                  <button
                    className="hover:underline"
                    onClick={() => backToLogin()}
                  >
                    Reset App State
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Sidebar */}
      <div className="w-[15%] h-full bg-black text-slate-200 border border-[#061C03] overflow-y-auto">
        <SideBar />
      </div>
    </div>
  );
}
