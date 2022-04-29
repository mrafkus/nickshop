import {Outlet} from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-100">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App

