import { ArrowLeft, MapPin, Star, Shield, UserPlus, Calendar, MessageSquare, Heart } from 'lucide-react'

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

interface ProfileHeaderProps {
  travelerData: TravelerData
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ travelerData }) => {
  return (
    <div>
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

        <div className="absolute ml-20 left-4 md:left-8 -bottom-16 md:-bottom-44">
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
          <div className="flex flex-col items-center justify-center px-6 py-4  bg-gray-200">
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              {travelerData.stats.followers.toLocaleString()}
            </span>
            <span className="text-xs text-gray-600 mt-1">Followers</span>
          </div>

          <div className="flex flex-col items-center justify-center px-6 py-4  bg-gray-200">
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              {travelerData.stats.following.toLocaleString()}
            </span>
            <span className="text-xs text-gray-600 mt-1">Following</span>
          </div>

          <div className="flex flex-col items-center justify-center px-6 py-4  bg-gray-200">
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              {travelerData.stats.tripsCompleted}
            </span>
            <span className="text-xs text-gray-600 mt-1">Trips Completed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader;
