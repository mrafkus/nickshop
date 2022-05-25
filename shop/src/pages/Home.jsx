import promo from '../assets/promo.png'
import ml from '../assets/ml.svg'
import pubg from '../assets/pubg.svg'
import ff from '../assets/ff.svg'
import aov from '../assets/aov.svg'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center">
                <img src={promo} className="items-center h-[320px] w-[23cm] rounded-xl" />
                <h1 className="mt-3 mb-2 text-5xl font-bold">Populer</h1>
                <div className='ml-[90px] flex justify-center'>
                    <button>
                        <a href="/ml">
                            <img src={ml} className="mt-4 mr-28 items-center h-[230px] rounded-2xl" />
                        </a>
                    </button>
                    <button>
                        <a href="/pubg">
                            <img src={pubg} className="mt-4 mr-28 items-center h-[230px] rounded-2xl" />
                        </a>
                    </button>
                    <button>
                        <a href="/ff">
                            <img src={ff} className="mt-4 mr-28 items-center h-[230px] rounded-2xl" />
                        </a>
                    </button>
                    <button>
                        <a href="/aov">
                            <img src={aov} className="mt-4 mr-28 items-center h-[230px] rounded-2xl" />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home;