"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaHeart,
  FaCalendarAlt,
  FaWallet,
  FaFlag,
  FaBriefcase,
  FaUserPlus,
 
  FaUserFriends,
  FaShieldAlt,
} from "react-icons/fa";
import { LuView } from "react-icons/lu";
import { IoWarning } from "react-icons/io5";
import { SimilarTripCardProps } from "../types";

export function SimilarTripCard({
  image,
  title,
  description,
  tags,
  origin,
  destination,
  dates,
  price,
  tripsCompleted,
  matchPercent,
  spotsLeft,
  host,
  isFavorite = false,
}: SimilarTripCardProps) {
  const [favorite, setFavorite] = useState(isFavorite);
  const capitalizedDestination = destination
    ? destination.charAt(0).toUpperCase() + destination.slice(1)
    : destination;
  return (
    <div className="w-full border border-gray-200 bg-white shadow-sm overflow-hidden transition hover:shadow-xl">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-48 h-48 md:h-auto flex shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <button
            aria-pressed={favorite}
            onClick={() => setFavorite((f) => !f)}
            className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            aria-label={favorite ? "Unfavorite trip" : "Favorite trip"}
          >
            <FaHeart
              className={`text-sm ${favorite ? "text-red-500" : "text-white"}`}
            />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 px-4 py-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-600 flex-1">{title}</h3>
            <div className="flex gap-2 shrink-0 items-start">
              <span className="flex justify-center items-center rounded-3xl bg-green-500 px-3 py-1 text-xs font-bold text-white whitespace-nowrap">
                {matchPercent}% Match
              </span>
              <span className="flex gap-1 justify-center items-center rounded-3xl bg-red-500 px-3 py-1 text-xs font-bold text-white whitespace-nowrap">
                <IoWarning className="text-sm" />
                {spotsLeft} spots left
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-800 mb-2 leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-blue-100 px-2 py-0.5 text-xs text-blue-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Location Info */}
          <div className="flex gap-2 mb-3 text-sm text-gray-600">
            <div>
              <p className="h-3 w-3 rounded-full border text-gray-700"></p>
              <p className="ml-1 h-3 border-l-2 border-dashed border-gray-800"></p>
              <p className="h-3 w-3 rounded-full border bg-black"></p>
            </div>
            <div>
              <p className="pb-0.5 text-sm font-medium">{origin}</p>
              <p className="text-sm">{capitalizedDestination}</p>
            </div>
          </div>

          {/* Trip Details */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-800 mb-3">
            <div className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-gray-500 text-sm" />
              <span>{dates}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaWallet className="text-gray-500 text-sm" />
              <span className="font-medium">₹{price} / person</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaFlag className="text-gray-500 text-sm" />
              <span>{tripsCompleted} Trips Completed</span>
            </div>
          </div>

          {/* Host Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-3 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {host.initials}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-gray-600">
                    {host.name}, {host.age}
                  </span>
                  {host.verified && (
                    <Image
                      src="/tickmarks.png"
                      alt="verified"
                      width={16}
                      height={16}
                    />
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-800">
                  <span>{host.location}</span>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-0.5 font-semibold">
                    <Image
                      src="/rating.png"
                      alt="rating"
                      width={16}
                      height={10}
                    />
                    <span>{host.rating}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className="bg-blue-100 text-blue-500 text-xs px-2 py-0.5 rounded flex items-center gap-1 whitespace-nowrap">
                    <FaUserFriends className="text-xs" /> {host.badge}
                  </span>
                  <span className="bg-green-100 text-green-600 border-2 border-green-300 text-xs px-2 py-0.5 rounded flex items-center gap-1 whitespace-nowrap">
                    <FaShieldAlt className="text-xs" /> {host.safetyScore}% Safe
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <button className="flex gap-1.5 bg-[#1D4350] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#15323b] transition-colors items-center">
                <FaBriefcase className="text-xs" />
                <span className="whitespace-nowrap">View Trip</span>
              </button>
              <button className="flex gap-1.5 bg-[#1D4350] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#15323b] transition-colors items-center">
                <FaUserPlus className="text-xs" />
                <span className="whitespace-nowrap">Join Trip</span>
              </button>
              <button className="flex gap-1.5 bg-[#1D4350] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#15323b] transition-colors items-center">
                <LuView className="text-xs" />
                <span className="whitespace-nowrap">View Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
