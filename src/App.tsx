import "./index.css";
import "./App.css";
import EditModal from "./components/EditModal/EditModal";

// import LoginPage from "./pages/login/LoginPage";
// import { useSelector } from "react-redux";
// import { RootState } from "./state/store";
// import Main from "./pages/mainPage/Main";

function App() {
  // const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  return (
    <div className="w-full h-screen bg-black text-slate-200 border border-background-primary overflow-hidden">
      {/* {!isLoggedIn ? <LoginPage /> : <Main />} */}
      <EditModal />
      {/* <Main /> */}
    </div>
  );
}

export default App;
