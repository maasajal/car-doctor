import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar";
// Make the App as Layout component
function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
