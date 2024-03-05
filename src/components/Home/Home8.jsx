import React from 'react'
import emoji from '/emoji.png'
import semiColon from '/semiColon.png'
import Star_group from '/Star_group.png'


const Home8 = () => {
  return (
    <div className='overflow-x-hidden overflow-y-hidden mt-16'>
        <div className='h-[460px] bg-[#E8FBF1] w-screen'>
            <div className='md:flex justify-center pt-16'>
                <div><img src={emoji} alt="" /></div>
                <div><h1 className='text-gray-900 font-semibold text-2xl px-4 my-auto'>What People Say About Our Service</h1></div>
            </div>

            <div className='mt-20 md:flex overflow-x-hidden overflow-y-hidden justify-evenly w-screen lg:-ml-14'>

                <div className='md:w-[463px] resize-x-none md:h-[220px] h-[250px] mx-7'>
                <div className='md:w-[463px] resize-x-none  md:h-[220px] h-[250px] rounded-xl bg-white relative my-auto mx-10'>
                    <div className='p-4 absolute'><img src={semiColon} alt="" /></div>
                    <div className='italic text-gray-700 relative p-5 py-8 '><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.</h1></div>
                    <div className='px-4'><img src={Star_group} alt="" /></div>
                    <div className='flex p-4 justify-between'>
                        <div className='font-semibold text-gray-900'>Ranjit Shrestha</div>
                        <div className='text-gray-700 italic'>Pokhara tour</div>
                    </div>
                </div>
                </div>

                <div className='md:w-[463px] resize-x-none md:h-[220px] h-[250px] mx-7'>
                <div className='md:w-[463px] resize-x-none  md:h-[220px] h-[250px] rounded-xl bg-white relative my-auto mx-10'>
                    <div className='p-4 absolute'><img src={semiColon} alt="" /></div>
                    <div className='italic text-gray-700 relative p-5 py-8 '><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.</h1></div>
                    <div className='px-4'><img src={Star_group} alt="" /></div>
                    <div className='flex p-4 justify-between'>
                        <div className='font-semibold text-gray-900'>Ranjit Shrestha</div>
                        <div className='text-gray-700 italic'>Pokhara tour</div>
                    </div>
                </div>
                </div>

                <div className='md:w-[463px] resize-x-none md:h-[220px] h-[250px] mx-7'>
                <div className='md:w-[463px] resize-x-none  md:h-[220px] h-[250px] rounded-xl bg-white relative my-auto mx-10'>
                    <div className='p-4 absolute'><img src={semiColon} alt="" /></div>
                    <div className='italic text-gray-700 relative p-5 py-8 '><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.</h1></div>
                    <div className='px-4'><img src={Star_group} alt="" /></div>
                    <div className='flex p-4 justify-between'>
                        <div className='font-semibold text-gray-900'>Ranjit Shrestha</div>
                        <div className='text-gray-700 italic'>Pokhara tour</div>
                    </div>
                </div>
                </div>

                <div className='md:w-[463px] resize-x-none md:h-[220px] h-[250px]'>
                <div className='md:w-[463px] resize-x-none  md:h-[220px] h-[250px] rounded-xl bg-white relative my-auto mx-10'>
                    <div className='p-4 absolute'><img src={semiColon} alt="" /></div>
                    <div className='italic text-gray-700 relative p-5 py-8 '><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.</h1></div>
                    <div className='px-4'><img src={Star_group} alt="" /></div>
                    <div className='flex p-4 justify-between'>
                        <div className='font-semibold text-gray-900'>Ranjit Shrestha</div>
                        <div className='text-gray-700 italic'>Pokhara tour</div>
                    </div>
                </div>
                </div>                
                
                
            </div>
        </div>
    </div>
  )
}

export default Home8