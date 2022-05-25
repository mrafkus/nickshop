import Metode from '../components/Metode';
import Navbar from '../components/Navbar';
import ff from '../assets/ff.png';


function Bff() {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center flex-row items-center gap-5">
            <img src={ff} className="mt-[-2cm] items-center h-[420px]" />
            <Metode />
            </div>
        </div>
    )
}
export default Bff;