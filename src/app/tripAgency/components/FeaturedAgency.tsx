'use client'
import { useState } from "react";
import { LuChevronLeft, LuChevronRight,} from "react-icons/lu";

import FeaturedAgencyCard from "./AgencyCard";
import agencies from "../data/agencies";

export default function FeaturedAgencyContainer() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  const handlePrevCard = () => {
    setCurrentCardIndex((prev) => (prev === 0 ? agencies.length - 1 : prev - 1));
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => (prev === agencies.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full px-4 font-sans">
      <div className="w-full mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Featured Travel Agency</h1>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out "
              style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
            >
              {agencies.map((agency, index) => (
                <FeaturedAgencyCard key={index} agency={agency} index={index} />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevCard}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
            aria-label="Previous card"
          >
            <LuChevronLeft className="size-6" />
          </button>
          <button
            onClick={handleNextCard}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
            aria-label="Next card"
          >
            <LuChevronRight className="size-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {agencies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCardIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentCardIndex
                    ? 'bg-gray-800 w-8'
                    : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}