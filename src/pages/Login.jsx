import hero from "../assets/login.png";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../states/auth/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    axios.post("http://0.0.0.0:8080/login", {
      username,
      password
    }).then(response => {
      if (response.status == 200) {
        console.log("Login successful");
        dispatch(login({ token: response.data.token, username }));
        navigate("/");
      } else if (response.status == 500) {
        window.alert("Can't login, internal server error");
      } else {
        window.alert("Can't login, unknown error");
      }
    }).catch(err => {
      console.error(JSON.stringify(err));
    })
  }

  return (
    <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center gap-5">
          <img src={hero} className="w-full h-full rounded-3xl" />
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="username-input" className="text-xl font-bold leading-none text-gray-600">Username</label>
            <input
              id="username-input"
              type="text"
              name="username"
              className="px-2 text-gray-700 h-7 w-96 ring-2 ring-blue-400 rounded-md grow"
              autoComplete="currentPassword"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="password-input" className="text-xl font-bold leading-none text-gray-600">Password</label>
            <input
              id="password-input"
              type="password"
              name="password"
              className="px-2 text-gray-700 h-7 w-96 ring-2 ring-blue-400 rounded-md grow"
              autoComplete="currentPassword"
            />
          </div>
          <input
            type="submit"
            className="px-2 mt-1 text-xl font-bold text-white bg-blue-400 h-7 w-96 ring-2 rounded-md grow"
          />
        </div>
    </form>
  )
}
