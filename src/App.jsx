import {Outlet} from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col items-stretch min-h-screen md:flex-row bg-stone-100">
      <Navbar />
      <div className="flex flex-wrap items-stretch grow">
        <Outlet />
      </div>
    </div>
  )
}

export default App

