import React, { useState } from "react";
import boudha from "/boudha.jpg";
import location from "/location.png";
import running from "/running.png";
import time from "/time.png";
import { FaRegCircle, FaCircle } from "react-icons/Fa";
import { BsCamera } from "react-icons/Bs";

const Home1 = (props) => {
  const [count, setCount] = useState(0);
  // class="bg-hero bg-no-repeat bg-cover bg-center bg-fixed"
  return (
    // <div className='mt-2 h-[468px] bg-no-repeat bg-contain bg-center' style={{ backgroundImage: "url(/boudha.jpg)" }}>
    <div className="mt-2 h-1/2 ">
      <div className="h-1/2 lg:mx-14 md:mx-8 mx-2 pl-5 relative rounded-3xl opacity-95">
        <img
          src={props.Images[count].ImageSrc}
          className="h-fit w-full rounded-3xl -z-10"
        />

        <div className="text-white absolute lg:bottom-20 md:bottom-14 bottom-10 z-50 md:ml-[28%] sm:mx[10%] mid:ml-[32%]  ml-[25%] ">
          <div className="xlg:text-3xl lg:text-2xl md:text-xl xsm:text-md sm:text-lg xxsm:text-sm  z-50 mx-auto flex items-center justify-center ">
            <div>
              <BsCamera />
            </div>
            <div className="px-4 flex lg:font-bold font-semibold text-white">
              <h1>{props.Images[count].imageName}</h1><span className="hidden md:block">,{props.Images[count].district}</span>
            </div>
          </div>
          <ul className="text-white flex  text-sm text-center mx-5 md:mx-24 lg:mx-36 items-center align-middle absolute cursor-pointer z-50">
            <li className="pt-2 px-1" onClick={(c) => setCount(0)}>
              {props.Images[count].imageNo == 0 ? (
                <FaCircle />
              ) : (
                <FaRegCircle />
              )}
            </li>
            <li className="pt-2 px-1" onClick={(c) => setCount(1)}>
              {props.Images[count].imageNo == 1 ? (
                <FaCircle />
              ) : (
                <FaRegCircle />
              )}
            </li>
            <li className="pt-2 px-1" onClick={(c) => setCount(2)}>
              {props.Images[count].imageNo == 2 ? (
                <FaCircle />
              ) : (
                <FaRegCircle />
              )}
            </li>
            <li className="pt-2 px-1" onClick={(c) => setCount(3)}>
              {props.Images[count].imageNo == 3 ? (
                <FaCircle />
              ) : (
                <FaRegCircle />
              )}
            </li>
          </ul>
        </div>

        
       
       <div className='w-fit md:w-fit lg:w-1/2 drop-shadow-lg h-fit border flex lg:justify-evenly rounded-xl text-center items-center absolute -mt-2 md:-bottom-14 justify-center bg-white  shadow-2xl shadow-black  z-50 -py-1 md:px-5 lg:py-1 -ml-2 xsm:ml-[5%] sm:ml-[12%] mid:ml-[20%] '>
                <div className='z-50'>
                    <div className="flex mx-2">
                        <div className="m-2"><img src={location} className="mx-auto" /></div>
                        <h1 className='text-sm sm:text-md md:text-lg font-semibold '>Where</h1>
                    </div>
                    <div className='text-gray-600'>
                        <h1 className="text-xs md:text-lg">Search destination</h1>
                    </div>
                </div>

                <div className='my-auto px-1'>
                    <h1 className='text-gray-400 text-3xl'>|</h1>
                </div>

                <div>
                    <div className="flex mx-2">
                        <div className="m-2"><img src={running} className="mx-auto" /></div>
                        <h1 className='text-sm sm:text-md md:text-lg font-semibold'>Activity</h1>
                    </div>
                    <div className='text-gray-600'>
                        <h1 className="text-xs md:text-lg">Search activity</h1>
                    </div>
                </div>

                <div className="my-auto px-1 ">
                    <h1 className='text-gray-400 text-3xl'>|</h1>
                </div>

                <div className="py-3">
                    <div className=" mx-2 flex">
                        <div className="my-auto -ml-1"><img src={time} className="m-2" /></div>
                        <h1 className='text-sm font-semibold sm:text-md md:text-lg'>Duration</h1>
                    </div>
                    <div className='text-gray-600 text-xs md:lg'>
                        <h1 className="text-xs md:text-lg">Select duration</h1>
                    </div>
                </div>

            </div> 
      </div>
    </div>
  );
};

export default Home1;

{
  /* <div className='w-1/2 h-fit border flex justify-between mx-auto bg-green-900  z-50 border-black px-5 py-1'>
                <div className='z-50'>
                    <div>
                        <img src={location} alt="" />
                        <h1 className='text-xl'>Where</h1>
                    </div>
                    <div className='text-gray-600'>
                        <h1>Search destination</h1>
                    </div>
                </div>

                <div className='my-auto'>
                    <h1 className='text-gray-400 text-3xl'>|</h1>
                </div>

                <div>
                    <div>
                        <img src={running} alt="" />
                        <h1 className='text-xl'>Activity</h1>
                    </div>
                    <div className='text-gray-600'>
                        <h1>Search activity</h1>
                    </div>
                </div>

                <div>
                    <h1 className='text-gray-700 text-2xl'>|</h1>
                </div>

                <div>
                    <div>
                        <img src={time} alt="" />
                        <h1 className='text-xl'>Duration</h1>
                    </div>
                    <div className='text-gray-600'>
                        <h1>Select duration</h1>
                    </div>
                </div>

            </div> */
}
