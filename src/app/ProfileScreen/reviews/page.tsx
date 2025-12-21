"use client";
import { Star } from 'lucide-react';
import { useState } from 'react';
import ReviewCard from '@/app/ProfileScreen/components/reviews/ReviewCard';
import reviews from '@/app/ProfileScreen/data/types/review';

export default function ReviewsPage() {
  
  const [visibleCount, setVisibleCount] = useState(5);

  const visibleReviews = reviews.slice(0, visibleCount);
  const loadMore = () => {setVisibleCount(prev => prev + 5);}

  const allLoaded = visibleCount >= reviews.length;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-600">Reviews from Trip Mates</h2>
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        <span className="text-xl font-semibold text-gray-600">4.8</span>
        <span className="text-gray-500">Based on 24 reviews</span>
      </div>

      <div className="space-y-6 mb-5">
        {visibleReviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {!allLoaded && (
        <div className="text-center">
        <button
          onClick={loadMore}
          className="px-10 mt-6  border bg-[#1d4350] text-white hover:bg-[#1d4357] py-2 rounded-lg font-medium"
        >
          Load More Reviews
        </button>
        </div>
      )}
    </div>
  );
}