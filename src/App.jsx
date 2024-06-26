import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
// Make the App as Layout component
function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="max-w-7xl mx-auto px-3 md:px-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
