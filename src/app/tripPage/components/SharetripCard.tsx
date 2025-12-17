import { FaWhatsapp } from "react-icons/fa";
import { LuFacebook, LuTwitter,  } from "react-icons/lu";
export default function ShareTripCard(){
  return (
    <div className="min-w-[320px] w-full min-h-20 border-2 border-gray-300 h-32 p-4">
      <h2 className="font-bold text-lg ">Share this trip</h2>
      <div className="w-full flex flex-row gap-6 md:gap-10 mt-4">
        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer">
          <LuFacebook className="w-5 h-5 hover:scale-110"/>
        </a>
        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer">
          <LuTwitter className="w-5 h-5 hover:scale-110"/>
        </a>
        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer">
          <FaWhatsapp className="w-5 h-5 hover:scale-110"/>
        </a>
        <button className="px-4 py-1.5 bg-black text-white font-semibold cursor-pointer">
          Copy
        </button>
      </div>
    </div>
  )
}