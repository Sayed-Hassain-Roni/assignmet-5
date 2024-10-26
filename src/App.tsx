import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Mainlayout from "./components/layout/Mainlayout";

function App() {
  return (
    <>
      <ToastContainer />
      <Mainlayout />
    </>
  );
}

export default App;
