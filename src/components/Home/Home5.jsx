import React from 'react'
import {useState} from 'react'
import right_arrow from '/right_arrow.png'

const Home5 = () => {
    const [active,setActive] = useState(1)
    // const [first, setfirst] = useState(second)

  return (
    <div className='lg:m-14 md:m-10 sm:m-5 xxsm:mt-28 sm:mt-28'>
        <div>
            <div>
                <h1 className='text-gray-800 font-semibold text-3xl m-4'>Things to Do</h1>
            </div>


            <div className='flex justify-between'>
                <div className='flex cursor-pointer'>
                    <h1 className={`text-sm md:text-md border m-1 p-1 md:p-2 md:m-2 border-gray-400 rounded-lg w-fit ${active===1?"bg-green-500 text-white":"text-gray-700 bg-white"}`} onClick={c=>setActive(1)}>Family tour</h1>
                    <h1 className={`text-sm md:text-md border m-1 p-1 md:p-2 md:m-2 border-gray-400 rounded-lg w-fit ${active===2?"bg-green-500 text-white":"text-gray-700 bg-white"}`} onClick={c=>setActive(2)}>Cultural tour</h1>
                    <h1 className={`hidden md:block text-sm md:text-md md:p-2 md:m-2 border border-gray-400 rounded-lg w-fit ${active===3?"bg-green-500 text-white":"text-gray-700 bg-white"}`} onClick={c=>setActive(3)}>Outdoor Activities</h1>
                    <h1 className={`hidden md:block text-sm md:text-md m-1 p-1 md:p-2 md:m-2 border border-gray-400 rounded-lg w-fit ${active===4?"bg-green-500 text-white":"text-gray-700 bg-white"}`} onClick={c=>setActive(4)}>Adventure & Nature</h1>
                    <h1 className={`hidden md:block text-sm md:text-md m-1 p-1 md:p-2 md:m-2 border border-gray-400 rounded-lg w-fit ${active===5?"bg-green-500 text-white":"text-gray-700 bg-white"}`} onClick={c=>setActive(5)}>City tour</h1>
                    <h1 className={`hidden md:block text-sm md:text-md m-1 p-1 md:p-2 md:m-2 border border-gray-400 rounded-lg w-fit ${active===6?"bg-green-500 text-white":"text-gray-700 bg-white"}`} onClick={c=>setActive(6)}>Luxury tour</h1>
                </div>
                <div className='flex cursor-pointer border border-green-500 rounded-lg h-fit p-1 md:p-2 my-auto w-fit'>
                    <div className='text-green-500 px-2'><h1>View all </h1></div>
                    <div className='my-auto'><h1><img src={right_arrow} alt="" /></h1></div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Home5