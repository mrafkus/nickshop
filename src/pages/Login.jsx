import login from "../assets/login.png";

import Navbar from "../components/Navbar"

export default function Login() {
    return (
        <div>
            <Navbar login={false} />
            <div className="flex justify-center">
                <img src={login} className="items-center h-[420px]" />
            </div>
            <div className="flex flex-col items-center m-8">
                <h3 className="text-xl font-bold text-gray-800">Username</h3>
                <input
                    className="h-7 w-96 px-2 text-gray-700 ring-2 ring-blue-400 rounded-md grow"
                />
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-800">Password</h3>
                <div>
                    <input
                        className="h-7 w-96 px-2 text-gray-700 ring-2 ring-blue-400 rounded-md grow"
                    />
                </div>
            </div>
            <button className="fixed bottom-10 right-10 bg-blue-400 h-[50px] w-[50px] rounded-md text-3xl font-extrabold text-white">
                <i class="ri-arrow-right-line"></i>
            </button>
        </div>

    )
}