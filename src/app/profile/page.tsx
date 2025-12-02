// npm install react-icons
 // lucide-react install kiye h icons k liye
 //'/images/background.jpg'
 //'/images/profile.jpg''
'use client'
import { useState } from 'react'
import { ArrowLeft, MapPin, Star, Shield, UserPlus, Calendar, MessageSquare, Heart, MoreVertical, Users } from 'lucide-react'

// TripCard component
interface TripData {
  id: number
  title: string
  location: string
  dates: string
  travelers: number
  image: string
  isPastTrip?: boolean
}

const TripCard: React.FC<TripData> = ({ title, location, dates, travelers, image, isPastTrip = false }) => (
  <div className="bg-white shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow mb-2">
    <div className="flex flex-col sm:flex-row">
      {/* Image Section */}
      <div className="m-2 w-full sm:w-1/3 h-36 sm:h-40 relative flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{location}  |</span>
         
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">{dates}</span>
          </div>
          
          {/* Travelers */}
          <div className="flex items-center mb-4">
            <div className="flex -space-x-2 mr-3">
              {[...Array(Math.min(travelers, 3))].map((_, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                    {String.fromCharCode(65 + index)}
                  </div>
                </div>
              ))}
              {travelers > 3 && (
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 text-xs font-semibold">
                  +{travelers - 3}
                </div>
              )}
            </div>
            <span className="text-sm text-gray-600">
              {isPastTrip ? `${travelers} joined` : `${travelers}/6 joined`}
            </span>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-2">
          {!isPastTrip && (
            <button className="px-4 py-1.5 bg-[#1D4350] text-white hover:bg-teal-700 transition-colors font-medium text-sm">
              Join Trip
            </button>
          )}
          <button className="px-4 py-1.5 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm">
            View trip details
          </button>
        </div>
      </div>
    </div>
  </div>
)


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

const travelerData: TravelerData = {
  name: 'Jane Cooper',
  isVerified: true,
  location: 'Kiev, Ukraine',
  rating: 4.1,
  reviewCount: 410,
  safetyPercentage: 88,
  stats: {
    followers: 1234,
    following: 567,
    tripsCompleted: 15,
  },
  profileImage: 'https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*',
  coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D',
}



export default function TravelerProfile() {
  const [activeTab, setActiveTab] = useState('upcoming')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div className="h-48 md:h-64 w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${travelerData.coverImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-transparent to-cyan-500/30" />

          <button className="absolute top-4 left-4 flex items-center gap-2 text-white hover:text-gray-200 transition-colors z-10">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>

        <div className="absolute left-4 md:left-8 -bottom-16 md:-bottom-44">
          <div className="w-40 h-48 md:w-72 md:h-80 p-1 shadow-lg">
            <div
              className="w-full h-full bg-gray-300 bg-cover bg-center"
              style={{
                backgroundImage: `url('${travelerData.profileImage}')`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="pt-20 md:pt-4 pb-8 px-4 md:px-6 max-w-6xl ml-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="md:ml-48 lg:ml-40">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {travelerData.name}
              </h1>
              {travelerData.isVerified && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verified Traveler
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 text-gray-600 mb-3">
              <MapPin className="w-4 h-4 text-black" strokeWidth={3} />
              <span className="text-sm">{travelerData.location}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium text-gray-700">
                  {travelerData.rating}
                </span>
                <span className="text-sm text-gray-500">
                  ({travelerData.reviewCount} reviews)
                </span>
              </div>

              <div className="flex items-center gap-1 bg-green-200 rounded-full font-styles-bold px-3 py-1">
                <Shield className="w-4 h-4 text-emerald-500 " />
                <span className="text-sm  font-medium text-emerald-700">
                  {travelerData.safetyPercentage}% Safe
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center gap-2 md:gap-4">
            <button className="flex items-center  gap-2 px-4 py-2  bg-[#1D4350] text-white text-sm font-medium  hover:bg-teal-700 transition-colors">
              <UserPlus className="w-5 h-7" />
              Follow
            </button>
            <button className="flex items-center gap-2 px-4 py-2  bg-[#1D4350] text-white text-sm font-medium  hover:bg-teal-700 transition-colors">
              <Calendar className=" w-5 h-7 " />
              Join Trip
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-[#1D4350] text-white rounded-full hover:bg-teal-700 transition-colors">
              <MessageSquare className="w-5 h-5" />
            </button>

            <button className="w-12 h-12 flex items-center justify-center bg-[#1D4350] text-white rounded-full hover:bg-teal-700 transition-colors">
              <Heart className="w-5 h-5" />
            </button>

          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 md:ml-44 lg:ml-40">
          <div className="flex flex-col items-center justify-center px-6 py-4 border bg-gray-200">
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              {travelerData.stats.followers.toLocaleString()}
            </span>
            <span className="text-xs text-gray-600 mt-1">Followers</span>
          </div>

          <div className="flex flex-col items-center justify-center px-6 py-4 border bg-gray-200">
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              {travelerData.stats.following.toLocaleString()}
            </span>
            <span className="text-xs text-gray-600 mt-1">Following</span>
          </div>

          <div className="flex flex-col items-center justify-center px-6 py-4 border bg-gray-200">
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              {travelerData.stats.tripsCompleted}
            </span>
            <span className="text-xs text-gray-600 mt-1">Trips Completed</span>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="max-w-l mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-1">
              <div className="bg-white shadow-sm p-6 text-black dark:text-black">
                <h2 className="text-xl font-semibold mb-6 bg-gray-300 p-2">About Me</h2>
                
                {/* About */}
                <div className="mb-6">
                  <p className="text-gray-800">Wildlife photographer and nature lover. Eco-conscious traveler.</p>
                </div>
                
                {/* Languages */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">English</span>
                    <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Hindi</span>
                    <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Hinghlish</span>
                  </div>
                </div>
                
                {/* Travel Style */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Travel Style</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Adventure</span>
                    <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Cultural</span>
                    <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Budget-friendly</span>
                  </div>
                </div>
                
                
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Hiking</span>
                    <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Photography</span>
                    <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Local cuisine</span>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div className="lg:col-span-2">
              <div className="bg-white shadow-sm text-black dark:text-black ">
                
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
                      <TripCard 
                        id={1}
                        title="Bali Beach & Culture Adventure"
                        location="Bali, Indonesia"
                        dates="Nov 3 - Nov 10, 2024"
                        travelers={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2Aars9hQ-7OU0lq69k1C5nAmsZjlLv5CPM47ZvDcHwJK6MzroN_Wqx2dzwycktGJKrU&usqp=CAU"
                      />
                      <TripCard 
                        id={2}
                        title="Tokyo City Lights & Temples"
                        location="Tokyo, Japan"
                        dates="Dec 15 - Dec 22, 2024"
                        travelers={2}
                        image="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9reW98ZW58MHx8MHx8fDA%3D"
                      />
                      <TripCard 
                        id={3}
                        title="Swiss Alps Mountain Expedition"
                        location="Interlaken, Switzerland"
                        dates="Jan 8 - Jan 15, 2025"
                        travelers={4}
                        image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?fm=jpg&q=60&w=3000"
                      />
                      <TripCard 
                        id={4}
                        title="Santorini Sunset & Wine Tour"
                        location="Santorini, Greece"
                        dates="Feb 14 - Feb 21, 2025"
                        travelers={5}
                        image="https://images.unsplash.com/photo-1533105079780-92b9be482077?fm=jpg&q=60&w=3000"
                      />
                      <TripCard 
                        id={5}
                        title="Dubai Luxury Experience"
                        location="Dubai, UAE"
                        dates="Mar 10 - Mar 17, 2025"
                        travelers={6}
                        image="https://images.unsplash.com/photo-1580837119756-563d608dd119?fm=jpg&q=60&w=3000"
                      />
                      <TripCard 
                        id={6}
                        title="Morocco Desert Safari"
                        location="Marrakech, Morocco"
                        dates="Apr 5 - Apr 12, 2025"
                        travelers={4}
                        image="https://images.unsplash.com/photo-1541480601022-2308c0f02487?fm=jpg&q=60&w=3000"
                      />
                      <TripCard 
                        id={7}
                        title="Norway Fjord Discovery"
                        location="Bergen, Norway"
                        dates="May 20 - May 27, 2025"
                        travelers={3}
                        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?fm=jpg&q=60&w=3000"
                      />
                    </div>
                  )}
                  
                  {activeTab === 'past' && (
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                      <TripCard 
                        id={1}
                        title="Paris Romance & Art Tour"
                        location="Paris, France"
                        dates="Jun 10 - Jun 17, 2024"
                        travelers={2}
                        image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fm=jpg&q=60&w=3000"
                        isPastTrip={true}
                      />
                      <TripCard 
                        id={2}
                        title="Iceland Northern Lights Adventure"
                        location="Reykjavik, Iceland"
                        dates="Mar 5 - Mar 12, 2024"
                        travelers={4}
                        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?fm=jpg&q=60&w=3000"
                        isPastTrip={true}
                      />
                      <TripCard 
                        id={3}
                        title="Maldives Paradise Escape"
                        location="Male, Maldives"
                        dates="Jan 15 - Jan 22, 2024"
                        travelers={3}
                        image="https://images.unsplash.com/photo-1540202404-1b8bfce978d6?fm=jpg&q=60&w=3000"
                        isPastTrip={true}
                      />
                      <TripCard 
                        id={4}
                        title="Egypt Ancient Wonders"
                        location="Cairo, Egypt"
                        dates="Oct 20 - Oct 27, 2023"
                        travelers={5}
                        image="https://images.unsplash.com/photo-1542051841857-5f90071e7989?fm=jpg&q=60&w=3000"
                        isPastTrip={true}
                      />
                      <TripCard 
                        id={5}
                        title="New York City Explorer"
                        location="New York, USA"
                        dates="Aug 8 - Aug 15, 2023"
                        travelers={6}
                        image="https://images.unsplash.com/photo-1496442226666-8d4d0b62fb1b?fm=jpg&q=60&w=3000"
                        isPastTrip={true}
                      />
                      <TripCard 
                        id={6}
                        title="Amazon Rainforest Trek"
                        location="Manaus, Brazil"
                        dates="May 12 - May 19, 2023"
                        travelers={4}
                        image="https://images.unsplash.com/photo-1541480601022-2308c0f02487?fm=jpg&q=60&w=3000"
                        isPastTrip={true}
                      />
                      <TripCard 
                        id={7}
                        title="Rome Historical Journey"
                        location="Rome, Italy"
                        dates="Feb 14 - Feb 21, 2023"
                        travelers={3}
                        image="https://images.unsplash.com/photo-1515542622106-c78bde8abc0e?fm=jpg&q=60&w=3000"
                        isPastTrip={true}
                      />
                    </div>
                  )}
                  
                  {activeTab === 'reviews' && (
                    <div className="space-y-6">
                      {/* Review 1 */}
                      <div className="border p-4 border-gray-100 pb-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                              <Users size={20} />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h4 className="font-bold">Sarah Johnson</h4>
                                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs">Verified User</span>
                              </div>
                              <p className="text-sm text-gray-500">2023-11-15</p>
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical size={20} />
                          </button>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(3)].map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700">Absolutely loved the trip! The beaches were stunning and the culture was rich. Highly recommend!</p>
                      </div>
                      
                      {/* Review 2 */}
                      <div className="border p-4 border-gray-100 pb-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                              <Users size={20} />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h4 className="font-bold">Mike Chen</h4>
                                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs ">Verified User</span>
                              </div>
                              <p className="text-sm text-gray-500">2023-10-28</p>
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical size={20} />
                          </button>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} size={16} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                          ))}
                        </div>
                        <p className="text-gray-700">Great experience overall. The guide was knowledgeable and the itinerary was well-planned.</p>
                      </div>
                      
                      {/* Review 3 */}
                      <div  className="border p-4 border-gray-100 pb-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                              <Users size={20} className="mx-auto" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h4 className="font-bold">Emma Wilson</h4>
                                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs">Verified User</span>
                              </div>
                              <p className="text-sm text-gray-500">2023-09-12</p>
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical size={20} />
                          </button>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700">Amazing adventure! Exceeded all expectations. Will definitely book again.</p>
                      </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}