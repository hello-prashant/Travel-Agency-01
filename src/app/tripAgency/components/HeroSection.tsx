// import { StarIcon, StarHalfIcon, CheckIcon, MapPin, ShieldHalfIcon } from 'react-icons/lu'
import { FaStar, FaCheck, FaStarHalfAlt, FaCheckCircle, FaMapMarkerAlt, FaShieldAlt, FaHeart  } from "react-icons/fa";

import { MdPersonAddAlt1 ,MdChat } from "react-icons/md";
import { TbLuggage } from "react-icons/tb";

export default function HeroSection(){
  return (
    <div className="w-full h-1/2">
      <div className="w-full h-65">        
        <img src="/hero-cover-img.jpg" alt="Cover Picture" 
        className="object-cover w-full h-full "/>
      </div>
      <div className="w-full p-6 flex flex-row">
        <div className="w-70 h-60  -translate-y-28">
          <img src="/hero-profile-pic.jpg" alt="" 
          className="object-fill w-full h-full"/>
        </div>

        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col gap-4 pl-6">
            <div className="flex flex-row gap-3">
              <h2 className='text-xl font-bold '>Wanderlust Adventures</h2> 
              <div className="px-2.5 py-1 text-sm font-semibold text-gray-200 rounded-full bg-green-500 inline-flex gap-1">
                <span className='w-5 h-5 rounded-full bg-green-600 text-gray-200 flex justify-center items-center'>
                  <FaCheck height={14}/>
                </span>
                Verified Traveler
              </div>
            </div>
          
            <div className="inline-flex gap-2 items-center">
              <FaMapMarkerAlt fill='black' className='text-white'/>
              <p className='text-gray-400'> Bali, Indonesia</p>
            </div>
            <div className="inline-flex gap-1 items-center">
              <FaStar fill="yellow" strokeWidth={0} height={20} />
              <FaStar fill="yellow" strokeWidth={0} height={20} />
              <FaStar fill="yellow" strokeWidth={0} height={20} />
              <FaStar fill="yellow" strokeWidth={0} height={20} />
              <FaStarHalfAlt fill="yellow" strokeWidth={0} height={20} />

              <span className='text-sm text-gray-400'>4.5 (202 reviews)</span>
              <span className='inline-flex items-center bg-amber-500/20 rounded-full py-1 px-2 text-sm text-amber-600'>
                <FaShieldAlt height={16} />
                70% safe
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-4 pl-6">
            <div className=" text-white py-2 px-4 bg-blue-950 h-10 inline-flex justify-center items-center gap-3">
              <MdPersonAddAlt1 className="scale-125"/>
              <span className="text-base">Follow</span> 
            </div>

            <div className=" text-white py-2 px-4 bg-blue-950 h-10 inline-flex justify-center items-center gap-3">
              <TbLuggage className="scale-125"/>
              <span className="text-base">Join Trip</span> 
            </div>
          
            <div className="bg-blue-950 h-10 flex justify-center items-center text-white rounded-full w-10 ">
              <MdChat className="scale-125"/>
            </div>

            <div className="bg-blue-950 h-10 flex justify-center items-center text-white rounded-full w-10 ">
              <FaHeart className="scale-125"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}