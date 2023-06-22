import React from 'react'
import Line from '/Line.png'
import swambhu from '/swambhu.png'
import pokhara from '/pokhara.png'
import Bandipur from '/Bandipur.png'
import Chitwan from '/Chitwan.png'
import Manang from '/Manang.png'
import Janakpur from '/Janakpur.png'

const Home4 = () => {
  return (
    <div className=' md:h-screen h-fit'>
     {/* <div className='h-screen w-screen bg-cover bg-no-repeat bg-opacity-10' style={{ backgroundImage: `url(/swambhu.png)`}}> */}
    <div className='md:h-screen h-fit w-full '>

        <div className='absolute w-full opacity-95 h-full -Z-10 '>
            <img src={swambhu} className="h-full w-full -Z-10"/> 
        </div>


        <div className='z-20 relative md:h-screen h-fit overflow-x-hidden lg:flex justify-around my-auto items-center xxsm:mt-10 xsm-mt-7 md:mt-5'>

            <div className='lg:w-1/2 md:px-28 mx-2 xxsm:mt-10 xsm-mt-7 md:mt-5 '>
                <h1 className='flex overflow-x-clip'>
                    <span className='my-auto overflow-x-clip'><img src={Line} alt="" /></span>
                    <span className='text-white font-semibold pl-1 text-sm md:text-md'> TOP DESTINATION</span>
                </h1>
                <h1 className='font-bold md:text-5xl text-3xl tracking-wider text-white '>
                    Kathmandu
                </h1>
                <h1 className='text-white md:text-md text-sm'>
                    Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Baghmati  at an elevation of 4,344 feet.
                </h1>
                <button className='bg-green-600 p-3 rounded-xl text-white my-5'>View details</button>
            </div>

            <div className='flex lg:w-2/3 justify-around -mr-20  overflow-x-hidden mx-2'>
                <div className=''><img src={pokhara} alt="" /></div>
                <div className=''><img src={Bandipur} alt="" /></div>
                <div className=''><img src={Chitwan} alt="" /></div>
                <div className='hidden mid:block'><img src={Manang} alt="" /></div>
                <div className=''><img src={Janakpur} className='w-' alt="" /></div>
                <div className=''><button></button></div>
            </div>


        </div>
    </div>
    </div>


    // </div>
  )
}

export default Home4