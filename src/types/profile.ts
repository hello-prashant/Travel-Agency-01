export interface TravelerStats {
  followers: number
  following: number
  tripsCompleted: number
}

export interface TravelerData {
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

export interface TripData {
  id: number
  title: string
  location: string
  dates: string
  travelers: number
  image: string
  isPastTrip?: boolean
}

export interface ReviewData {
  reviewerName: string
  date: string
  rating: number
  comment: string
  isVerified: boolean
}
