import Navbar from "../components/Navbar"

import aov from "../assets/aov.png";

export default function Aov() {
    return (
        <div>
            <Navbar login={true} />
            <div className="flex justify-center">
                <img src={aov} className="items-center h-[420px]" />
            </div>
            <div className="flex flex-col items-center m-8">
                <h3 className="text-xl font-bold text-blue-400">Masukkan Player ID : </h3>
                <input
                    className="h-7 w-96 px-2 text-gray-700 ring-2 ring-blue-400 rounded-md grow" placeholder="Masukkan User ID"
                />
            </div>
            <div className="flex flex-col items-center m-8">
                <h3 className="text-xl font-bold text-blue-400">Pilih Nominal Top-Up</h3>
            </div>
        </div>

    )
}