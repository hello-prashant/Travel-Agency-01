'use client'
import { FaStar, FaCheck, FaStarHalfAlt, FaCheckCircle, FaMapMarkerAlt, FaShieldAlt, FaHeart  } from "react-icons/fa";

import { MdPersonAddAlt1 ,MdChat } from "react-icons/md";
import { TbLuggage } from "react-icons/tb";
import ROUTES from "../../../../lib/routes"

import { useRouter } from "next/navigation";


export default function HeroSection(){
  const router = useRouter();
  const goBack = ()=> router.back();
    
  return (
    <div className="w-full h-1/2 shadow ">
      {/* Back button */}
      <button onClick={goBack}
      className="absolute top-6 left-6 flex items-center gap-2 text-gray-500 text-base font-medium cursor-pointer bg-white/30 px-2 rounded-full hover:shadow shadow-2xl hover:text-gray-600">
        <span className="">&#8592;</span>
        <span>Back</span>
      </button>

      <div className="w-full h-65 ">        
        <img src="/hero-cover-img.jpg" alt="Cover Picture" 
        className="object-cover w-full h-full bg-gray-300"/>
      </div>
      <div className="w-full p-6 min-h-45 flex flex-row relative">
        <div className="w-70 h-65 absolute -top-28 ">
          <img src="/hero-profile-pic.jpg" alt="" 
          className="object-fill w-full h-full shadow-lg bg-gray-300"/>
        </div>

        <div className="w-full flex flex-row justify-between ml-70" >
          <div className="flex flex-col gap-4 pl-6">
            <div className="flex flex-row gap-3">
              <h2 className='text-xl font-bold '>Wanderlust Adventures</h2> 
              <div className="px-2 py-1 text-sm font-semibold text-gray-200 rounded-full bg-green-500 inline-flex gap-1">
                <span className='w-5 h-5 rounded-full bg-green-600 text-gray-200 flex justify-center items-center'>
                  <FaCheck height={14}/>
                </span>
                Verified Traveler
              </div>
            </div>
          
            <div className="inline-flex gap-2 items-center">
              <FaMapMarkerAlt fill='black' className='text-white'/>
              <p className='text-gray-500'> Bali, Indonesia</p>
            </div>
            <div className="inline-flex gap-4 items-center">
              <div className="inline-flex gap-1.5 items-center">
                <FaStar fill="yellow" strokeWidth={0} height={20} />
                <FaStar fill="yellow" strokeWidth={0} height={20} />
                <FaStar fill="yellow" strokeWidth={0} height={20} />
                <FaStar fill="yellow" strokeWidth={0} height={20} />
                <FaStarHalfAlt fill="yellow" strokeWidth={0} height={20} />
              </div>

              <span className='text-sm text-gray-500'>4.5 (202 reviews)</span>
              <span className='inline-flex items-center bg-amber-500/20 rounded-full py-1 px-2 text-sm text-amber-600'>
                <FaShieldAlt height={16} />
                70% safe
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-4 pl-6">
            <div className=" text-white py-2 px-4 bg-[#1d4350] hover:bg-cyan-800 h-10 inline-flex justify-center items-center gap-3 cursor-pointer transition-colors duration-300"  >
              <MdPersonAddAlt1 className="scale-125"/>
              <span className="text-base">Follow</span> 
            </div>

            <button
            
             onClick={()=>router.push(ROUTES.TRIPPAGE)}
             className=" text-white py-2 px-4 bg-[#1d4350] hover:bg-cyan-800 h-10 inline-flex justify-center items-center gap-3 cursor-pointer transition-colors duration-300">
              <TbLuggage className="scale-125"/>
              <span className="text-base">
               Join Trip
                </span> 
            </button>
          
            <div className="bg-[#1d4350] hover:bg-cyan-800 h-10 flex justify-center items-center text-white rounded-full w-10 cursor-pointer transition-colors duration-300">
              <MdChat className="scale-125"/>
            </div>

            <div className="bg-[#1d4350] hover:bg-cyan-800 h-10 flex justify-center items-center text-white rounded-full w-10 cursor-pointer transition-colors duration-300">
              <FaHeart className="scale-125"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}