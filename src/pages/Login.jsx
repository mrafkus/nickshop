import login from "../assets/login.png";
import nick from '../assets/nick.svg';

import {api} from "../axiosConfig.js";
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const result = await api.post("/login", {username, password});

    if (result.status === 200) {
      alert("Login successful");
      localStorage.setItem("authorization-token", result.data.token);
      navigate("/");
    } else {
      alert("Login failed, check your username and password again");
    }
  }

  return (
    <div className="z-10 h-24 shrink-0">
      <button>
        <a href="/">
          <img src={nick} className="h-[46px] relative bottom-1" />
        </a>
      </button>
      <form className="flex flex-col items-center justify-center gap-5" onSubmit={onSubmit}>
        <br />
        <img src={login} className="items-center h-[420px] rounded-3xl" />
        <div className="flex flex-col items-center gap-2">
          <label htmlFor="username-input" className="text-xl font-bold leading-none text-gray-600">Username</label>
          <input
            id="username-input"
            type="text"
            name="username"
            className="px-2 text-blue-600 h-7 w-96 ring-2 ring-blue-500 rounded-md grow"
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
        <button className="h-8 px-2 mt-1 text-xl font-bold text-white bg-blue-400 w-96 ring-2 rounded-md grow">
          Submit
        </button>
      </form>
    </div>
  )
}
export default Login;
