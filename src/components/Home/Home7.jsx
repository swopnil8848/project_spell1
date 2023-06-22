import React from 'react'
import mountain from '/mountain.png'

const Home7 = () => {
  return (
    <div className='mt-20'>
        <div className='relative flex items-center'>
            
            
            <div className='w-full'>
                <img src={mountain} className="mx-auto" />
            </div>


            <div className='text-white absolute z-10 lg:top-32 lg:left-32 xlg:left-40 '>
                <div>
                    <div className='lg:text-4xl md:text-2xl sm:text-xl text-lg font-semibold md:my-4 my-1'>Get out there !!!</div>
                    <div className='lg:text-lg md:text-md text-sm  md:my-5 my-2'>Book your custom packages all according to your wish</div>
                    <div><button className='lg:p-3 md:p-2 p-1 bg-green-700 rounded-xl lg:text-lg md:text-md text-sm'>Plan your trip now</button></div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Home7