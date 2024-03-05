import React from 'react'
import dollar from '/dollar.png'
import location2 from '/location2.png'
import mark from '/mark.png'

const Home2 = () => {
  return (
    <div className='md:mt-24 mt-28'>
      <div className='md:flex justify-evenly mx-14'>


        <div className='bg-blue-200 md:w-1/4 w-full rounded-xl h-fit py-2 flex'>
          <div className='md:p-2 p-0 mx-2'> 
            <img src={dollar} alt="" />
          </div>
          <div className=''>
            <h1 className='text-gray-900 font-semibold text-lg'>Stay Flexible</h1>
            <h1 className='my-1 text-gray-500'>Flexible cancelation opotion on all venus</h1>
          </div>
        </div>


        <div className='bg-blue-200 md:w-1/4 w-full my-5 md:my-1 rounded-xl h-fit py-2 flex'>
          <div className='p-2 mx-1'> 
            <img src={location2} alt="" />
          </div>
          <div>
            <h1 className='text-gray-900 font-semibold text-lg'>Stay Flexible</h1>
            <h1 className='my-1 text-gray-500'>Flexible cancelation opotion on all venus</h1>
          </div>
        </div>

       
        <div className='bg-blue-200 md:w-1/4 rounded-xl h-fit py-2 flex'>
          <div className='p-2 mx-1'> 
            <img src={mark} alt="" />
          </div>
          <div>
            <h1 className='text-gray-900 font-semibold text-lg'>Stay Flexible</h1>
            <h1 className='my-1 text-gray-500'>Flexible cancelation opotion on all venus</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home2