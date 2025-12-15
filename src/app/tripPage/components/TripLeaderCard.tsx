import { FaCheckCircle, FaStar } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
export default function TripLeaderCard(){
  return (
    <div className="min-w-[320px] w-90 min-h-50 border-2 border-gray-300 h-58 p-4">
      <h2 className="font-bold text-lg ">Trip Leader</h2>
      <div className="flex flex-row gap-4 mt-4">
        <img 
          src={'/person-img.jpg'}
          alt={''}
          className="rounded-full w-20 h-20"
        />

        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2">
            <h3 className="font-semibold text-base">Courtney Henry</h3>
            <FaCheckCircle 
              className="text-white fill-green-500 scale-125"
            />
          </div>
          
          <div className="inline-flex gap-2 items-center text-sm">
            <FaStar 
            className="text-yellow-300 fill-yellow-300 w-5"
            />
            <span className="text-gray-500">4.1</span>

            <LuShieldCheck
              className="text-white fill-gray-600 scale-130"
            />
            <span className="text-gray-500">88%</span>
          </div>
          
          <p className="text-sm">
            Adventure seeker and culture enthusiast. Love exploring off-the-beaten-path destinations and meeting fellow travelers.
          </p>
        </div>
      </div>
    </div>
  )
}