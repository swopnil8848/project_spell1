import React from 'react'
import Blog1 from '/Blog1.png'
import Blog2 from '/Blog2.png'
import Blog3 from '/Blog3.png'
import Up_Icon from '/Up_Icon.png'


const Home9 = () => {
  return (
    <div className='m-14 '>
        <div>
            <div><h1 className='text-gray-900 font-semibold text-2xl'>Our Latest News, Blogs & More..</h1></div>


            <div className='lg:flex justify-evenly'>


                <div className='mx-auto'>
                    <div className='w-fit mx-auto mt-5'><img src={Blog1} alt="" /></div>
                    <div className='w-fit md:mx-10 mt-4'>
                        <div><h1 className='text-gray-900 font-semibold tracking-wide text-xl'>Travel law passed this year.</h1></div>
                        <div><h1 className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.</h1></div>
                        <div className='flex'><div className='text-[#19A948] text-lg font-semibold'>Read post</div><div className='my-auto px-2'> <img src={Up_Icon} alt="" /></div></div>
                    </div>
                </div>


                <div className='md:flex lg:block'>

                    <div className='md:block lg:flex justify-around items-center lg:mt-0 m-4'>
                        <div><img src={Blog2} alt="" /></div>
                        <div className='w-fit p-4'>
                            <div><h1 className='text-gray-900 font-semibold tracking-wide text-xl'>Visit Nepal 2022</h1></div>
                            <div><h1 className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque</h1></div>
                            <div className='flex'><div className='text-[#19A948] text-lg font-semibold'>Read post</div><div className='my-auto px-2'> <img src={Up_Icon} alt="" /></div></div>
                        </div>
                    </div>

                    <div className='block lg:flex justify-around items-center m-4'>
                        <div><img src={Blog3} alt="" /></div>
                        <div className='w-fit p-4'>
                            <div><h1 className='text-gray-900 font-semibold tracking-wide text-xl'>Visit Nepal 2022</h1></div>
                            <div><h1 className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque</h1></div>
                            <div className='flex'><div className='text-[#19A948] text-lg font-semibold'>Read post</div><div className='my-auto px-2'> <img src={Up_Icon} alt="" /></div></div>
                        </div>
                    </div>

                </div>


            </div>

            <div className='flex justify-center mt-5'>
                <div className='flex'><div className='text-[#19A948] text-lg font-semibold'>Read all blogs</div><div className='my-auto px-2'> <img src={Up_Icon} alt="" /></div></div>  
            </div>

        </div>
    </div>
  )
}

export default Home9