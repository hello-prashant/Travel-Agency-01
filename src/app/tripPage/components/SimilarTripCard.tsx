import { FaMapMarkerAlt, } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoMdAirplane } from "react-icons/io";

type Props = {
  trip: any;
} 

export default function SimilarTripCard({ trip }: Props) {
  return (
    <div className='w-sm md:w-75 h-100 flex flex-col justify-center items-center border border-gray-400 rounded-lg overflow-hidden'>
      <div className="h-1/2 w-full">
        <img src={trip.tripImage} alt={trip.locations[1]} 
        className="w-full h-full object-cover"/>
      </div>
      <div className="h-1/2 w-full flex flex-col gap-2.5 p-2">
        <div className="relative w-full inline-flex items-center gap-4">
          <img src={trip.organizerImage} alt={trip.organizer}  
          className="absolute -top-5 left-0 w-14 h-14 rounded"/>
          <h2 className="ml-16 text-lg text-black">Organizer: {trip.organizer}</h2>
        </div>
        
        <p className="inline-flex items-center gap-1.5 text-base">
          <MdDateRange />
          {trip.dateRange}
        </p>
        <p className="inline-flex items-center gap-1.5 text-base">
          <FaMapMarkerAlt />
          {trip.locations[0]}
        </p>
        <p className="inline-flex items-center gap-1.5 text-base">
          <IoMdAirplane />
          {trip.locations[1]}
        </p>
        
        <button className="w-full px-4 py-2 bg-red-400 text-white rounded">
          View Trip
        </button>
      </div>
    </div>
  )
}

