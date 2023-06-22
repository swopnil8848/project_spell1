import React from 'react'
import vector from '/Vector.png'
import spell from '/spell.png'
import Hamburgger from '/Hamburgger.png'
import personIcon from '/personIcon.png'

const Navbar = () => {
  return (
    <div className=' py-2 flex justify-between mt-2'>
        <div className='flex w-1/4 justify-center'>
            <div className='my-auto'><img src={vector} alt="" /></div>
            <div className='my-auto pl-1'><img src={spell} alt="" /></div>
        </div>
        <div className='lg:flex hidden justify-around w-1/2 mr-24 '>
            <div className='text-gray-600 my-auto cursor-pointer px-2'><h1>Things to do</h1></div>
            <div className='text-gray-600 my-auto cursor-pointer px-2'><h1>Destination</h1></div>
            <div className='text-gray-600 my-auto cursor-pointer px-2'><h1>Plan your trip</h1></div>
            <div className='text-gray-600 my-auto cursor-pointer px-2'><h1>Reviews</h1></div>
            <div className='text-gray-600 my-auto cursor-pointer px-2'><h1>Contact</h1></div>
            <div></div>
            <div className='flex w-fit justify-evenly border border-blue-100 rounded-xl -py-2'>
                <div className='my-auto mx-2 cursor-pointer'><img src={Hamburgger} /></div>
                <div className='my-auto mx-2 bg-blue-100 rounded-xl p-1 cursor-pointer'><img src={personIcon} alt="" /></div>
            </div>
        </div>
        <div className='flex lg:hidden w-fit justify-evenly border border-blue-100 rounded-xl -py-2'>
                <div className='my-auto mx-2 cursor-pointer'><img src={Hamburgger} /></div>
                <div className='my-auto mx-2 bg-blue-100 rounded-xl p-1 cursor-pointer'><img src={personIcon} alt="" /></div>
          </div>
    </div>
  )
}

export default Navbar