import { Link, useNavigate } from "react-router-dom";

import nick from "../assets/nick.svg";

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function Navbar() {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("authorization-token");
  const userData = jwtToken ? parseJwt(jwtToken) : {};

  function logout() {
    localStorage.removeItem("authorization-token");
    navigate("/login");
  }

  return (
    <div className="z-10 h-24 shrink-0">
      <div className="flex items-center justify-between h-24 bg-white leading-3">
        <div className="flex items-center space-x-12 grow-[0.5]">
          <button>
            <a href="/">
              <img src={nick} className="h-[46px] relative bottom-1" />
            </a>
          </button>
          <input
            className="h-6 px-2 text-gray-700 bg-gray-200 ring-2 ring-blue-400 rounded-md grow"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-5">
          {jwtToken && (
            <>
              <p className="mr-4 text-lg font-bold">
                Welcome {userData.username}
              </p>
              <button className="text-2xl font-bold leading-none text-blue-400" onClick={logout}>
                Logout
              </button>
            </>
          )}
          {!jwtToken && (
            <>
              <Link
                to="/login"
                className="text-2xl font-bold leading-none text-blue-400"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="p-2 text-2xl font-bold leading-none text-white bg-blue-400 rounded-xl"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

