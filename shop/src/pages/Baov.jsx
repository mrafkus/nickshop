import Metode from '../components/Metode';
import Navbar from '../components/Navbar';
import aov from '../assets/aov.png';


function Baov() {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center flex-row items-center gap-5">
            <img src={aov} className="mt-[-2cm] items-center h-[420px]" />
            <Metode />
            </div>
        </div>
    )
}
export default Baov;