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

export default TripCard;
