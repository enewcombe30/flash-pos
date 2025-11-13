import "./index.css";
import "./App.css";
import EditModal from "./components/EditModal/ProductModal";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import Main from "./pages/mainPage/Main";

function App() {
  const modalOpen = useSelector((state: RootState) => state.modal.isOpen);
  console.log("App rendered, modalOpen:", modalOpen);

  return (
    <div className="w-full h-screen bg-black text-slate-200 border border-background-primary overflow-hidden">
      <Main />
      {modalOpen && <EditModal />}
    </div>
  );
}

export default App;
