import { Outlet } from "react-router-dom";
import "./App.css";
// Make the App as Layout component
function App() {
  return (
    <div className="font-inter">
      <Outlet />
    </div>
  );
}

export default App;
