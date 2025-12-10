//src/app/JoinedTravelers/components/TravelerCard.tsx
"use client";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";

// Simple traveler list
const travelers = [
  {
    id: "1",
    name: "Annette Block",
    rating: 4.1,
    bb: "88",
    avatar: "/images/annette.jpg",
    verified: true,
  },
  {
    id: "2",
    name: "Kathryn Murphy",
    rating: 4.1,
    bb: "88",
    avatar: "/images/kathryn.jpg",
    verified: true,
  },
  {
    id: "3",
    name: "Devon Lane",
    rating: 4.1,
    bb: "88",
    avatar: "/images/devon.jpg",
    verified: true,
  },
];

export default function TravelerCard() {
  return (
    <div className="bg-white border rounded-lg w-full max-w-md mx-auto shadow-sm">
      
      {/* Title */}
      <div className="px-5 py-4 border-b">
        <h3 className="text-sm font-semibold text-black">
          Joined Travelers ({travelers.length})
        </h3>
      </div>

      {/* List */}
      <div>
        {travelers.map((t) => (
          <div
            key={t.id}
            className="px-5 py-4 flex items-center justify-between border-b last:border-none"
          >
            <div className="flex items-center gap-4">
              
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name + verified + stats */}
              <div>
                {/* Name + Tick */}
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-black">{t.name}</p>

                  {t.verified && (
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  )}
                </div>

                {/* Rating + BB% */}
                <div className="flex items-center gap-4 mt-1 text-xs text-black">
                  <div className="flex items-center gap-1">
                    <AiFillStar className="text-yellow-400" />
                    <span>{t.rating}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <BsShieldFillCheck className="text-gray-500" />
                    <span>{t.bb}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* View Button */}
            <button className="px-4 py-2 bg-black text-white  text-sm">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
