import ling from '../assets/ling.png'
import Navbar from '../components/Navbar'
import Metode from '../components/Metode'

function Ml() {
  return (
    <div>
      <Navbar />
      <div className="mt-10 flex flex-row items-center gap-5">
        <img src={ling} className="ml-[3cm] mt-[-21cm] mr-14 items-center h-[530px]" />
        <div className='flex-col items-center gap-2'>
          <div>
            <h1 className="mb-2 text-2xl font-bold text-blue-500">Masukkan User ID :</h1>
            <input className="mb-4 px-4 text-gray-600 h-9 w-[13cm] ring-2 ring-blue-500 rounded-md"
              placeholder='Masukkan User ID'
              style={{ textAlign: "center" }} />
            <div className='mb-6'>
            <input className="px-4 text-gray-600 h-9 w-[13cm] ring-2 ring-blue-500 rounded-md"
              placeholder='(                                Zone ID                             )'
              style={{ textAlign: "center" }} />
            </div>
          </div>
          <div className=''>
            <h1 className="mb-3 text-2xl font-bold text-blue-500">Pilih Nominal Top-Up</h1>
            <form action="list" className='px-2 text-blue-600 h-[150mm] w-[20cm] ring-2 ring-blue-500 rounded-md grow'>
            </form>
            <br/>
            <Metode/>
            <br/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Ml;