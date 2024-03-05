import React from 'react'
import footer_bg from '/footer_bg.png'
import Association1 from '/Association1.png'
import Association2 from '/Association2.png'
import Association3 from '/Association3.png'
import Association4 from '/Association4.png'
import Association5 from '/Association5.png'
import Association6 from '/Association6.png'
import Vector from '/Vector.png'
import spell from '/spell.png'
import {TfiFacebook} from 'react-icons/Tfi'
import {FaInstagramSquare} from 'react-icons/Fa'
import {FaTwitter} from 'react-icons/Fa'
import {FaYoutube} from 'react-icons/Fa'

const Footer = () => {
  return (
    <div className='bg-gray-400'>
        <div className='relative w-full '>

            <div className='absolute opacity-80'>
                <img src={footer_bg} alt="" />
            </div>

            <div>.</div>
            <div className='text-lg flex justify-center text-gray-500 mt-12'>Our Association</div>

            <div className='flex justify-center my-6'>
                <div className='m-4 mt-5'><img src={Association1} alt="" /></div>
                <div className='m-4 mt-5'><img src={Association2} alt="" /></div>
                <div className='m-4 mt-5'><img src={Association3} alt="" /></div>
                <div className='m-4 mt-5'><img src={Association4} alt="" /></div>
                <div className='m-4 mt-5'><img src={Association5} alt="" /></div>
                <div className='m-4 mt-5'><img src={Association6} alt="" /></div>
            </div>


            <div className='lg:flex mx-10'>

                <div className='lg:w-1/2 mx-3 '>
                    <div className='flex '>
                        <div className='my-auto'><img src={Vector} alt="" /></div>
                        <div className='my-auto pl-1'><img src={spell} alt="" /></div>
                    </div>
                    <div className='text-gray-600 my-5 leading-8'>
                    Spell travels is established in 1998 by an Act of Parliament in the form of partnership between the Government of Nepal and private sector tourism industry to develop and market Nepal as an attractive tourist destination. 
                    </div>
                    <div className='text-gray-700'>
                    © 2019 Spell travels. All Rights Reserved.
                    </div>
                </div>

                <div className='lg:w-1/2'>

                    <div  className='flex justify-evenly'>

                        <div className='mx-2'>
                            <div className='text-gray-800 my-5  text-xl font-semibold '>Find us on</div>
                            <div className='text-gray-500 flex my-5'><div className='my-auto px-2'><TfiFacebook/></div><div>Facebook</div></div>
                            <div className='text-gray-500 flex my-4'><div className='my-auto px-2'><FaInstagramSquare/></div><div>Instagram</div></div>
                            <div className='text-gray-500 flex my-4'><div className='my-auto px-2'><FaTwitter/></div>Twitter<div>Twitter</div></div>
                            <div className='text-gray-500 flex my-4'><div className='my-auto px-2'><FaYoutube/></div><div>Youtube</div></div>
                        </div>

                        <div className='hidden sm:block'>
                            <div className='text-gray-800 my-5  text-xl font-semibold '>Quick links</div>
                            <div className='text-gray-600 my-4'>Things to do</div>
                            <div className='text-gray-600 my-4'>Destination</div>
                            <div className='text-gray-600 my-4'>Write review</div>
                            <div className='text-gray-600 my-4'>Blogs</div>
                        </div>

                        <div className='mx-2'>
                            <div className='text-gray-800 text-xl font-semibold my-5'>About</div>
                            <div className='text-gray-600 my-4'>About us</div>
                            <div className='text-gray-600 my-4'>Contact us</div>
                            <div className='text-gray-600 my-4'>Site Map</div>
                            <div className='text-gray-600 my-4'>Term & Condition</div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    </div>
  )
}

export default Footer