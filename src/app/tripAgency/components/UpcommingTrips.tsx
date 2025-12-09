import { BsPeopleFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

type Props = {
  trips: any[]
}

export default function UpcommingTrips() {
  return (
    <div className='w-full min-h-[80svh] flex flex-col justify-center items-center gap-6 overflow-x-hidden overflow-y-scroll'>
      
      {trips.map((trip, index) => (
        <TripCard key={index} trip={trip} />
      ))}
      
    </div>
  )
}


function TripCard({trip}:any) {
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
          <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" alt="Traveler image" 
          loading="lazy"
          className="w-8 md:w-10 h-full object-cover rounded-full border-2 border-white "
          />

          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="Traveler image" 
          loading="lazy"
          className="w-8 md:w-10 h-full object-cover rounded-full border-2 border-white -translate-x-2"
          />

          <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww" alt="Traveler image" 
          loading="lazy"
          className="w-8 md:w-10 h-full object-cover rounded-full border-2 border-white -translate-x-4"
          />

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

var trips = [
  {
    title: 'Bali Beach & Culture Adventure',
    imageUrl: '/bali-beach-img.jpg',
    destination: 'Bali, Indonesia',
    date: 'Nov 3 - Nov 10, 2025',
    groupSize: '6',
    joined: '3',
  },
  {
    title: 'Northern Lights in Iceland',
    imageUrl: '/northern-lights-img.jpg',
    destination: 'Reykjavik, Iceland',
    date: 'Jan 15 - Jan 22, 2026',
    groupSize: '6',
    joined: '3',
  },
  {
    title: 'Bali Beach & Culture Adventure',
    imageUrl: '/bali-beach-img.jpg',
    destination: 'Bali, Indonesia',
    date: 'Nov 3 - Nov 10, 2025',
    groupSize: '6',
    joined: '3',
  },
]