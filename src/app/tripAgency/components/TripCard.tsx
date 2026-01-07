import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import ROUTES from "../../../../lib/routes";

type Props = {
  trip: any,
  past?: boolean
}

export default function TripCard({trip, past}:Props) {

  const getNameInitials = (name: string) => {
    if (!name || name === '') return '';
    const names = name.split(' ');
    const initials = names.map((n) => n.charAt(0).toUpperCase()).join('');
    return initials;
  }

  return (
    <div className="w-full h-50 md:h-60 border border-gray-100 shadow p-4 md:gap-6 flex flex-row gap-4">
      <div className="w-1/3 md:w-[45%] h-full">
        <img src={trip.imageUrl} alt={trip.title} 
        className='object-cover h-full w-full bg-gray-300'/>
      </div>

      <div className="flex flex-col gap-3 md:gap-4 w-full">
        <h2 className='text-xl font-bold'>{trip.title}</h2>

        <div className="flex flex-row gap-4 text-sm text-gray-600">
          <span className="inline-flex items-center gap-1"> <FaMapMarkerAlt fill='black'/> {trip.destination}</span>
          <span className="inline-flex items-center gap-1"> <MdDateRange fill="black"/> {trip.date}</span>
          <span className="inline-flex items-center gap-1"> <BsPeopleFill fill="black"/>
           {trip.joined}/{trip.groupSize} joined
          </span>
        </div>

        <div className="flex flwx-row items-center gap-4 w-full h-8 md:h-10">
          <div className="inline-flex relative items-center h-full">
            {Array.isArray(trip.members) && trip.members.length > 0?
              trip.members.map((member: any, idx: number)=>(
                <img key={idx} src={member.imgUrl} alt={getNameInitials(member.name)} 
                  loading="lazy"
                  className="w-8 md:w-10 h-full object-cover rounded-full border-2 border-white bg-gray-300"
                  style={{transform: `translateX(-${idx * 8}px)`}}
                />
              )) :
              <></>
            }
          </div>
          
          <span className="text-gray-600 text-sm"> 
            {past ? `${trip.groupSize} travelers `: `${trip.joined}/${trip.groupSize} ` } 
            joined
          </span>
        </div>

        <div className="w-full inline-flex items-center gap-4 ">
          {!past &&
            <Link href={ROUTES.TRIPPAGE}
            className="px-4 py-1.5 md:py-2 bg-[#1d4350] hover:bg-cyan-800 text-white cursor-pointer transition-colors duration-300">
              Join Trip
            </Link>
          }

          <Link href={ROUTES.TRIPPAGE}
          className="px-4 py-1.5 md:py-2 text-cyan-800 border border-cyan-800 cyrsor-pointer hover:text-white hover:bg-cyan-800 transition-all duration-300">
            View trip details
          </Link>
        </div>
      </div>
    </div>
  )
}