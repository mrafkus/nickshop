import login from "../assets/login.png";
import nick from '../assets/nick.svg';

function Login() {
  return (
    <div className="z-10 h-24 shrink-0">
      <button>
        <a href="/">
          <img src={nick} className="h-[46px] relative bottom-1" />
        </a>
      </button>
      <div className="flex justify-center flex-col items-center gap-5">
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
        <button className="px-2 mt-1 text-xl font-bold text-white bg-blue-400 h-8 w-96 ring-2 rounded-md grow">
          Submit
        </button>
      </div>
    </div>
  )
}
export default Login;