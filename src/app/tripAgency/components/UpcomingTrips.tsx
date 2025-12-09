import TripCard from './TripCard';

import trips from "../data";

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


