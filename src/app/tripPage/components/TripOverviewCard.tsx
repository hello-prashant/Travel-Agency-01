
// components/TripOverview.jsx
'use client'
import { FaMapMarkerAlt, FaCalendarAlt, FaWallet, FaUserFriends, FaCarSide, FaGlobe, FaUtensils, FaUserAlt } from 'react-icons/fa'
import { FaTransgender } from "react-icons/fa6";
import { MdRoute, MdNoMeals } from "react-icons/md";
import { BsPeopleFill, BsGlobe } from "react-icons/bs";

export default function TripOverview({ trip }: { trip: any }) {
  const t = trip || {}

  return (
    <section className="bg-white rounded-lg shadow border border-gray-300 p-6 pb-0">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-black">Trip Overview</h2>
        <p className="text-sm text-gray-500 mt-2 max-w-3xl">{t.description}</p>
      </div>

      {/* Top cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 p-4 h-25 flex flex-col justify-between ">
          <div className="flex items-center gap-2">
            <MdRoute className="text-gray-700 text-lg" />
            <span className="text-xs font-semibold text-gray-600">Route</span>
          </div>
          <div className="text-sm font-medium text-gray-800 leading-tight">{t.route}</div>
        </div>

        <div className="bg-gray-50 p-4 h-25 flex flex-col justify-between ">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-700 text-lg" />
            <span className="text-xs font-semibold text-gray-600">Dates</span>
          </div>
          <div className="text-sm font-medium text-gray-800">{t.dates}</div>
        </div>

        <div className="bg-gray-50 p-4 h-25 flex flex-col justify-between ">
          <div className="flex items-center gap-2">
            <FaWallet className="text-gray-700 text-lg" />
            <span className="text-xs font-semibold text-gray-600">Budget</span>
          </div>
          <div className="text-sm font-medium text-gray-800">{t.budget}</div>
        </div>

        <div className="bg-gray-50 p-4 h-25 flex flex-col justify-between ">
          <div className="flex items-center gap-2">
            <BsPeopleFill className="text-gray-700 text-lg" />
            <span className="text-xs font-semibold text-gray-600">Travelers</span>
          </div>
          <div className="text-sm font-medium text-gray-800">{t.travelers}</div>
        </div>
      </div>

      {/* Rectangle Details Grid (Merged & Fixed) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left Column */}
        <div className="space-y-6">

          {/* Group Size */}
          <div className="borderrounded-lg p-4 flex items-center gap-4">
            <BsPeopleFill className="text-2xl text-gray-800" />
            <div>
              <div className="text-xs text-gray-500">Group Size</div>
              <div className="text-lg font-semibold text-gray-900">{t.groupSize}</div>
            </div>
          </div>

          {/* Travel Style */}
          <div className="borderrounded-lg p-4 flex items-center gap-4">
            <FaCarSide className="text-2xl text-gray-800" />
            <div>
              <div className="text-xs text-gray-500">Travel Style</div>
              <div className="text-lg font-semibold text-gray-900">{t.travelStyle}</div>
            </div>
          </div>

          {/* Language */}
          <div className="borderrounded-lg p-4 flex items-center gap-4">
            <BsGlobe className="text-2xl text-gray-800" />
            <div>
              <div className="text-xs text-gray-500">Language</div>
              <div className="text-lg font-semibold text-gray-900">{t.language}</div>
            </div>
          </div>

          {/* Looking For */}
          <div className="borderrounded-lg p-4 flex items-center gap-4">
            <FaTransgender className="text-2xl text-gray-800" />
            <div>
              <div className="text-xs text-gray-500">Looking For</div>
              <div className="text-lg font-semibold text-gray-900">{t.lookingFor}</div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-6">

          {/* Trip Style */}
          <div className="borderrounded-lg p-4 flex items-center gap-4">
            <FaCarSide className="text-2xl text-gray-800" />
            <div>
              <div className="text-xs text-gray-500">Trip Style</div>
              <div className="text-lg font-semibold text-gray-900">{t.tripStyle}</div>
            </div>
          </div>

          {/* Duration */}
          <div className="borderrounded-lg p-4 flex items-center gap-4">
            <FaCalendarAlt className="text-2xl text-gray-800" />
            <div>
              <div className="text-xs text-gray-500">Duration</div>
              <div className="text-lg font-semibold text-gray-900">{t.duration}</div>
            </div>
          </div>
            
          {/* Split Costs */}
          <div className="borderrounded-lg p-4 flex items-center gap-4">
            <FaWallet className="text-2xl text-gray-800" />
            <div>
              <div className="text-xs text-gray-500">Split Costs</div>
              <div className="text-lg font-semibold text-gray-900">{t.splitCosts}</div>
            </div>
          </div>

          {/* Food Preference */}
          <div className="borderrounded-lg p-4 flex items-center gap-4">
            <MdNoMeals className="text-2xl text-gray-800" />
            <div>
              <div className="text-xs text-gray-500">Food Preference</div>
              <div className="text-lg font-semibold text-gray-900">{t.foodPref}</div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}