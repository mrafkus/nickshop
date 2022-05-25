import dana from '../assets/dana.png';
import gopay from '../assets/gopay.png';
import linkaja from '../assets/linkaja.png';
import ovo from '../assets/ovo.png';
import telkom from '../assets/telkom.png';

function Metode() {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="mb-[-10px] text-2xl font-bold text-blue-500">Pilih Metode Pembayaran :</h1>
            <div className='flex justify-center items-center h-[150mm] w-[110mm] ring-2 ring-blue-500 rounded-md grow'>
                <div className='mt-8 p-4'>
                    <div className='mb-6 flex p-6 justify-center ring-2 ring-blue-200 bg-blue-100 rounded-2xl hover:bg-blue-200'>
                        <button>
                            <img src={gopay} className=" w-100" />
                        </button>
                    </div>
                    <div className='mb-6 flex p-4 justify-center ring-2 ring-blue-200 bg-blue-100 rounded-2xl hover:bg-blue-200'>
                        <button>
                            <img src={dana} className="w-100" />
                        </button>
                    </div>
                    <div className='mb-6 flex p-4 justify-center ring-2 ring-blue-200 bg-blue-100 rounded-2xl hover:bg-blue-200'>
                        <button>
                            <img src={ovo} className="w-100" />
                        </button>
                    </div>
                    <div className='mb-6 flex p-4 justify-center ring-2 ring-blue-200 bg-blue-100 rounded-2xl hover:bg-blue-200'>
                        <button>
                            <img src={telkom} className="w-100" />
                        </button>
                    </div>
                    <div className='mb-6 flex p-4 justify-center ring-2 ring-blue-200 bg-blue-100 rounded-2xl hover:bg-blue-200'>
                        <button>
                            <img src={linkaja} className="w-100" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Metode;