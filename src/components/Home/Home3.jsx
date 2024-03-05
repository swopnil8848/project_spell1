import React from 'react'
import trek1 from '/trek1.png'
import trek2 from '/trek2.png'
import trek3 from '/trek3.png'
import love_icon from '/love_icon.png'
import Star_yellow from '/Star_yellow.png'

const Home3 = () => {
  return (
    <div className='mt-10 md:mx-20'>
        <div>


            <div className='py-5'>
                <h1 className='text-2xl font-bold'>Packages in Demand</h1>
                <h1 className='text-gray-600 py-2'>These are the packages that has won the heart of many trekkers</h1>
            </div>


            <div className='md:flex md:justify-aorund lg:justify-between justify-center '>

                <div className='mx-auto sm:mx-8 mid:flex justify-center md:block my-7 border border-gray-300 rounded-xl '>
                    <div className='relative p-1' >
                        <div><img className='rounded-xl' src={trek1} alt="" /></div>
                        <div className='cursor-pointer absolute left-[18rem] top-[1rem] z-10 bg-opacity-30 bg-white rounded-full'><img src={love_icon} alt="" /></div> 
                        <div className='absolute -bottom-2 left-5 w-fit'><h1 className='text-white rounded-md bg-gray-700   lg:p-2'>ADVENTURE & NATURE</h1></div>
                    </div>

                    <div className='m-4 md:mx-5 my-auto'>
                        <h1 className=' text-gray-900 font-bold my-1 text-lg'>Kalinchowk - 2 Days 1 Night</h1>
                        <ul className='flex my-1'>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='text-gray-500 '>(50 reviews)</li>
                        </ul>
                        <h1 className='text-lg font-bold text-gray-800'>Rs.8,000 <span className='text-gray-600 text-sm font-light'>/Person</span></h1>
                    </div>   
                </div>
                
                
                <div className='x-auto sm:mx-8 mid:flex justify-center md:block my-7 border border-gray-300 rounded-xl'>
                    <div className='relative p-1'>
                        <div><img className='rounded-xl' src={trek2} alt="" /></div>
                        <div className='cursor-pointer absolute left-[18rem] top-[1rem] z-10 bg-opacity-30 bg-white rounded-full'><img src={love_icon} alt="" /></div> 
                        <div className='absolute -bottom-2 left-5 w-fit'><h1 className='text-white rounded-md bg-gray-700 lg:p-2'>Family Tour</h1></div>
                    </div>

                    <div className='md:m-4 md:mx-5'>
                        <h1 className=' text-gray-900 font-bold my-1 text-lg'>Pokhara tour - 2 Days 1 Night</h1>
                        <ul className='flex my-1'>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='text-gray-500 '>(50 reviews)</li>
                        </ul>
                        <h1 className='text-lg font-bold text-gray-800'>Rs.10,000 <span className='text-gray-600 text-sm font-light'>/Person</span></h1>
                    </div>   
                </div>
                
                
                <div className='x-auto sm:mx-8 mid:flex justify-center md:hidden lg:block my-7 border border-gray-300 rounded-xl'>
                    <div className='relative p-1'>
                        <div><img className='rounded-xl' src={trek3} alt="" /></div>
                        <div className='cursor-pointer absolute left-[18rem] top-[1rem] z-10 bg-opacity-30 bg-white rounded-full'><img src={love_icon} alt="" /></div> 
                        <div className='absolute -bottom-2 left-5 w-fit'><h1 className='text-white rounded-md bg-gray-700 lg:p-2'>ADVENTURE & NATURE</h1></div>
                    </div>

                    <div className='md:m-4 md:mx-5'>
                        <h1 className=' text-gray-900 font-bold my-1 text-lg'>Everest Base Treck - 11 Days</h1>
                        <ul className='flex my-1'>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='m-1'><img src={Star_yellow} alt="" /></li>
                            <li className='text-gray-500 '>(50 reviews)</li>
                        </ul>
                        <h1 className='text-lg font-bold text-gray-800'>Rs.20,000 <span className='text-gray-600 text-sm font-light'>/Person</span></h1>
                    </div>   
                </div>

            </div>


        </div>
    </div>
  )
}

export default Home3