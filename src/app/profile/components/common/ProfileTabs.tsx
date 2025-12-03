'use client'

import { useState } from 'react'
import TripCard from '@/app/profile/components/cards/TripCard'
import ReviewCard from '@/app/profile/components/common/ReviewCard'

interface TravelerStats {
  followers: number
  following: number
  tripsCompleted: number
}

interface TravelerData {
  name: string
  isVerified: boolean
  location: string
  rating: number
  reviewCount: number
  safetyPercentage: number
  stats: TravelerStats
  profileImage: string
  coverImage: string
}

interface TripData {
  id: number
  title: string
  location: string
  dates: string
  travelers: number
  image: string
  isPastTrip?: boolean
}

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcomingTrips: TripData[] = [
    {
      id: 1,
      title: "Bali Beach & Culture Adventure",
      location: "Bali, Indonesia",
      dates: "Nov 3 - Nov 10, 2024",
      travelers: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2Aars9hQ-7OU0lq69k1C5nAmsZjlLv5CPM47ZvDcHwJK6MzroN_Wqx2dzwycktGJKrU&usqp=CAU"
    },
    {
      id: 2,
      title: "Tokyo City Lights & Temples",
      location: "Tokyo, Japan",
      dates: "Dec 15 - Dec 22, 2024",
      travelers: 2,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9reW98ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      title: "Swiss Alps Mountain Expedition",
      location: "Interlaken, Switzerland",
      dates: "Jan 8 - Jan 15, 2025",
      travelers: 4,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?fm=jpg&q=60&w=3000"
    },
    {
      id: 4,
      title: "Santorini Sunset & Wine Tour",
      location: "Santorini, Greece",
      dates: "Feb 14 - Feb 21, 2025",
      travelers: 5,
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?fm=jpg&q=60&w=3000"
    },
    {
      id: 5,
      title: "Dubai Luxury Experience",
      location: "Dubai, UAE",
      dates: "Mar 10 - Mar 17, 2025",
      travelers: 6,
      image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?fm=jpg&q=60&w=3000"
    },
    {
      id: 6,
      title: "Morocco Desert Safari",
      location: "Marrakech, Morocco",
      dates: "Apr 5 - Apr 12, 2025",
      travelers: 4,
      image: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?fm=jpg&q=60&w=3000"
    },
    {
      id: 7,
      title: "Norway Fjord Discovery",
      location: "Bergen, Norway",
      dates: "May 20 - May 27, 2025",
      travelers: 3,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?fm=jpg&q=60&w=3000"
    }
  ]

  const pastTrips: TripData[] = [
    {
      id: 1,
      title: "Paris Romance & Art Tour",
      location: "Paris, France",
      dates: "Jun 10 - Jun 17, 2024",
      travelers: 2,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fm=jpg&q=60&w=3000",
      isPastTrip: true
    },
    {
      id: 2,
      title: "Iceland Northern Lights Adventure",
      location: "Reykjavik, Iceland",
      dates: "Mar 5 - Mar 12, 2024",
      travelers: 4,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?fm=jpg&q=60&w=3000",
      isPastTrip: true
    },
    {
      id: 3,
      title: "Maldives Paradise Escape",
      location: "Male, Maldives",
      dates: "Jan 15 - Jan 22, 2024",
      travelers: 3,
      image: "https://images.unsplash.com/photo-1540202404-1b8bfce978d6?fm=jpg&q=60&w=3000",
      isPastTrip: true
    },
    {
      id: 4,
      title: "Egypt Ancient Wonders",
      location: "Cairo, Egypt",
      dates: "Oct 20 - Oct 27, 2023",
      travelers: 5,
      image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?fm=jpg&q=60&w=3000",
      isPastTrip: true
    },
    {
      id: 5,
      title: "New York City Explorer",
      location: "New York, USA",
      dates: "Aug 8 - Aug 15, 2023",
      travelers: 6,
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0b62fb1b?fm=jpg&q=60&w=3000",
      isPastTrip: true
    },
    {
      id: 6,
      title: "Amazon Rainforest Trek",
      location: "Manaus, Brazil",
      dates: "May 12 - May 19, 2023",
      travelers: 4,
      image: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?fm=jpg&q=60&w=3000",
      isPastTrip: true
    },
    {
      id: 7,
      title: "Rome Historical Journey",
      location: "Rome, Italy",
      dates: "Feb 14 - Feb 21, 2023",
      travelers: 3,
      image: "https://images.unsplash.com/photo-1515542622106-c78bde8abc0e?fm=jpg&q=60&w=3000",
      isPastTrip: true
    }
  ]

  return (
    <div className="bg-white shadow-sm text-black dark:text-black">
      <div className="border-b border-gray-200">
        <div className="flex space-x-8 px-6 bg-gray-300 p-2">
          <button 
            className={`py-2 font-medium ${activeTab === 'upcoming' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Trips
          </button>
          <button 
            className={`py-2 font-medium ${activeTab === 'past' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('past')}
          >
            Past Trips
          </button>
          <button 
            className={`py-2 font-medium ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
          <button 
            className={`py-2 font-medium ${activeTab === 'photos' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('photos')}
          >
            Travel Photos
          </button>
        </div>
      </div>
      
      <div className="p-4 max-h-108 overflow-y-auto">
        {activeTab === 'upcoming' && (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {upcomingTrips.map((trip) => (
              <TripCard key={trip.id} {...trip} />
            ))}
          </div>
        )}
        
        {activeTab === 'past' && (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {pastTrips.map((trip) => (
              <TripCard key={trip.id} {...trip} />
            ))}
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <ReviewCard
              reviewerName="Sarah Johnson"
              date="2023-11-15"
              rating={3}
              comment="Absolutely loved the trip! The beaches were stunning and the culture was rich. Highly recommend!"
              isVerified={true}
            />
            
            <ReviewCard
              reviewerName="Mike Chen"
              date="2023-10-28"
              rating={4}
              comment="Great experience overall. The guide was knowledgeable and the itinerary was well-planned."
              isVerified={true}
            />
            
            <ReviewCard
              reviewerName="Emma Wilson"
              date="2023-09-12"
              rating={5}
              comment="Amazing adventure! Exceeded all expectations. Will definitely book again."
              isVerified={true}
            />
          </div>
        )}
        
        {activeTab === 'photos' && (
          <div className='grid grid-cols-3 gap-1'>
            <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg" alt="Forest" />
            <img src="https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg" alt="Rainbow" />
            <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg" alt="Forest" />
            <img src="https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg" alt="Rainbow" />
            <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg" alt="Forest" />
            <img src="https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg" alt="Rainbow" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileTabs
