import "./index.css";
import "./App.css";

import LoginPage from "./pages/login/LoginPage";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import Main from "./pages/mainPage/Main";

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  return (
    <div className="w-full h-screen bg-black text-slate-200 border border-[#061C03] overflow-hidden">
      {!isLoggedIn ? <LoginPage /> : <Main />}
    </div>
  );
}

export default App;
