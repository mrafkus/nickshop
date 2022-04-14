import login from "../assets/login.png";

import Navbar from "../components/Navbar"

export default function Login() {
    return (
        <div>
            <Navbar login={false} />
            <div className="flex justify-center">
                <img src={login} className="items-center h-[420px]" />
            </div>
            <div className="flex flex-col items-center m-10">
                <h3 className="text-xl font-bold text-gray-600">Username</h3>
                    <input
                        className="h-7 w-96 px-2 text-gray-700 ring-2 ring-blue-400 rounded-md grow"
                    />
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-600">Password</h3>
                <div>
                    <input
                        className="h-7 w-96 px-2 text-gray-700 ring-2 ring-blue-400 rounded-md grow"
                    />
                </div>
            </div>
        </div>

    )
}