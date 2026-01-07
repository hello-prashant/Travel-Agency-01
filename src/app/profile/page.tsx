'use client'
import ProfileHeader from '@/app/profile/components/common/ProfileHeader'
import AboutSection from '@/app/profile/components/common/AboutSection'
import ProfileTabs from '@/app/profile/components/common/ProfileTabs'
import { TravelerData } from '@/types/profile'
import SimilarTravelers from '@/app/profile/components/cards/SimilarTravelers'
import ROUTES from "../../../lib/routes"
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
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader travelerData={travelerData} />
      
      <div className="p-2">
        <div className="max-w-l mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <AboutSection />
            </div>
            
            <div className="lg:col-span-2">
              <ProfileTabs />
            </div>
            <div className="lg:col-span-1 w-7xl">
              <SimilarTravelers />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}