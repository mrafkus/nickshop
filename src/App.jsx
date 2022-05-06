import {Outlet} from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";

function App() {
  // app is logged in if token exists
  const authToken = useSelector(state => state.auth.token);
  const username = useSelector(state => state.auth.username);

  return (
    <div className="flex flex-col items-center min-h-screen bg-stone-100">
      <Navbar isLoggedIn={authToken != null} username={username} />
      <div className="w-full max-w-3xl my-6 xl:max-w-4xl">
        <Outlet />
      </div>
    </div>
  )
}

export default App

