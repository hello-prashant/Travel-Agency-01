import { BsPeopleFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

export default function TripCard({trip}:any) {
  return (
    <div className="w-full h-50 md:h-60 border border-gray-100 shadow p-4 md:gap-6 flex flex-row gap-4">
      <div className="w-1/3 md:w-1/4 h-full">
        <img src={trip.imageUrl} alt={trip.title} 
        className='object-cover h-full w-full'/>
      </div>

      <div className="flex flex-col gap-3 md:gap-4 w-full">
        <h2 className='text-xl font-bold'>{trip.title}</h2>

        <div className="flex flex-row gap-4 text-sm text-gray-600">
          <span className="inline-flex items-center gap-1"> <FaMapMarkerAlt fill='black'/> {trip.destination}</span>
          <span className="inline-flex items-center gap-1"> <MdDateRange fill="black"/> {trip.date}</span>
          <span className="inline-flex items-center gap-1"> <BsPeopleFill fill="black"/> {trip.joined}/{trip.groupSize} joined</span>
        </div>

        <div className="flex flwx-row items-center relative w-full h-8 md:h-10">
          {Array.isArray(trip.memberImgUrl) && trip.memberImgUrl.length > 0?
            trip.memberImgUrl.map((src: string, idx: number)=>(
            <img key={idx} src={src} alt="Traveler image" 
              loading="lazy"
              className={`w-8 md:w-10 h-full object-cover rounded-full border-2 border-white -translate-x-${idx*2}`}
            />
          )) :
            <></>
          }

          <span className="inline-flex items-center gap-1 text-gray-600 text-sm"> {trip.joined}/{trip.groupSize} joined</span>
        </div>

        <div className="w-full inline-flex items-center gap-4 ">
          <button className="px-4 py-1.5 md:py-2 bg-cyan-800 text-white ">
            Join Trip
          </button>

          <button className="px-4 py-1.5 md:py-2 text-cyan-800 border border-cyan-800">
            View trip details
          </button>
        </div>
      </div>
    </div>
  )
}