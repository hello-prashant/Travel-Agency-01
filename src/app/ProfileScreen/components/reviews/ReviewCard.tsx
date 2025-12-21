import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  tripType: string;
  comment: string;
  tags: string[];
  date: string;
  rating: number;
}

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-start gap-4 ">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-600">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.tripType}</p>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-gray-700 mt-2">{review.comment}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {review.tags.map(tag => (
              <span key={tag} className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">{review.date}</p>
        </div>
      </div>
    </div>
  );
}