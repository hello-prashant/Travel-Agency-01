import { Star, Users, MoreVertical } from 'lucide-react'

interface ReviewCardProps {
  reviewerName: string
  date: string
  rating: number
  comment: string
  isVerified: boolean
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewerName, date, rating, comment, isVerified }) => {
  return (
    <div className="border p-4 border-gray-100 pb-6">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
            <Users size={20} />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-bold">{reviewerName}</h4>
              {isVerified && (
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs">Verified User</span>
              )}
            </div>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={20} />
        </button>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  )
}

export default ReviewCard;
