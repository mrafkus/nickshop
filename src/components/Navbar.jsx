import {Link} from "react-router-dom";

import logo from "../assets/logo.svg";

export default function Navbar({isLoggedIn, forceHideDecorations, hideSearchBar, username}) {
  console.log(JSON.stringify(isLoggedIn));
  return (
    <div className="z-10 h-24 shrink-0">
      <div className="fixed flex items-center justify-between w-screen h-24 px-10 bg-white border-r shadow gap-6 border-stone-50 leading-3">
        <div className="flex items-center space-x-12 grow-[0.5]">
          <img src={logo} className="h-[32px] relative bottom-1" />
          {!forceHideDecorations && !hideSearchBar && (
            <input
              className="h-6 px-2 text-gray-700 bg-gray-200 ring-2 ring-blue-400 rounded-md grow" placeholder="Search"
            />
          )}
        </div>
        {!forceHideDecorations && !isLoggedIn && (
          <div className="flex items-center gap-5">
            <Link to="/login" className="text-2xl font-bold leading-none text-blue-400">
                Login
            </Link>
            <Link to="/register" className="p-2 text-2xl font-bold leading-none text-white bg-blue-400 rounded-xl">
                Sign In
            </Link>
          </div>
        )}
        {!forceHideDecorations && isLoggedIn && (
          <p>Hello <b>{username}</b>! Welcome to Nickshop</p>
        )}
      </div>
    </div>
  );
}
