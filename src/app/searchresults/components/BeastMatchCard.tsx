"use client";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {
  FaHeart,
  FaCalendarAlt,
  FaWallet,
  FaFlag,
  FaUserFriends,
  FaShieldAlt,
  FaBriefcase,
  FaUserPlus,
} from "react-icons/fa";
import { LuView } from "react-icons/lu";
import { IoWarning } from "react-icons/io5";
import { Trip } from "../types";
import ROUTES from "../../../../lib/routes";

export default function BestMatchCard({ trip }: { trip: Trip }) {
  const router = useRouter();
  return (
    <div className="w-full border border-gray-200 bg-white shadow-sm transition hover:shadow-xl">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 w-full overflow-hidden md:h-auto md:w-48 shrink-0">
          <Image
            src={trip.imageSrc}
            alt="Trip Image"
            fill
            className="object-cover"
          />
          <div className="absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors">
            <FaHeart className="text-white text-sm" />
          </div>
        </div>

        <div className="flex-1 px-4 py-3">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-lg font-bold text-gray-600">
                {trip.information.heading}
              </p>
              <p className="mt-1 text-xs text-gray-800 leading-relaxed">
                {trip.information.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-blue-500">
                {trip.information.activities.map((activity, activityIndex) => (
                  <p
                    key={activityIndex}
                    className="rounded-md bg-blue-100 px-2 py-0.5 text-xs"
                  >
                    {activity}
                  </p>
                ))}
              </div>

              <div className="mt-3 flex gap-2">
                <div>
                  <p className="h-3 w-3 rounded-full border text-gray-700"></p>
                  <p className="ml-1 h-3 border-l-2 border-dashed border-gray-800"></p>
                  <p className="h-3 w-3 rounded-full border bg-black"></p>
                </div>
                <div>
                  <p className="pb-0.5 text-sm font-medium text-gray-600">
                    {trip.information.fromLocation}
                  </p>
                  <p className="text-sm text-gray-600">
                    {trip.information.toLocation}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex gap-4 text-xs text-gray-800 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-gray-500 text-sm" />
                  <p className="whitespace-nowrap">{trip.information.date}</p>
                </div>

                <div className="flex items-center gap-1.5">
                  <FaWallet className="text-gray-500 text-sm" />
                  <p className="whitespace-nowrap">
                    &#8377;{trip.information.pricePerPerson} / person
                  </p>
                </div>

                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <FaFlag className="text-gray-500 text-sm" />
                  <p>{trip.information.count} Trips Completed</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 text-center">
              <p className="flex justify-center items-center rounded-3xl bg-green-500 px-3 py-1 text-xs font-bold text-white">
                <span className="whitespace-nowrap">
                  {trip.information.matchPercentage}% Match
                </span>
              </p>

              <p className="flex gap-1 justify-center items-center rounded-3xl bg-red-500 px-3 py-1 text-xs font-bold text-white">
                <IoWarning className="text-sm" />
                <span className="whitespace-nowrap">
                  {trip.information.spotsAvailable} Spots left
                </span>
              </p>
            </div>
          </div>

          <hr className="my-3 border-gray-200" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                SJ
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-gray-600 whitespace-nowrap">
                    Sarah Johnson,
                  </p>
                  <p className="text-sm font-bold text-gray-600">18</p>
                  <Image
                    src="/tickmarks.png"
                    alt="tickPng"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-800">
                  <div className="flex items-center gap-1">
                    <p>Goa,</p>
                    <p>India.</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/rating.png"
                      alt="starPng"
                      width={16}
                      height={16}
                    />
                    <p>2.8</p>
                  </div>
                </div>
                <div className="mt-1.5 flex gap-2 flex-wrap">
                  <span className="rounded bg-blue-100 px-2 text-blue-500 text-xs py-0.5 flex items-center gap-1 whitespace-nowrap">
                    <FaUserFriends className="text-xs" /> Travel Enthusiast
                  </span>
                  <span className="rounded border-2 border-green-300 bg-green-100 px-2 text-green-600 text-xs py-0.5 flex items-center gap-1 whitespace-nowrap">
                    <FaShieldAlt className="text-xs" /> 90% Safe
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
              onClick={()=>router.push(ROUTES.TRIPPAGE)}
              className="flex gap-1.5 bg-[#1D4350] px-3 py-1.5 text-xs font-semibold text-white cursor-pointer hover:bg-[#15323b] transition-colors items-center">
                <FaBriefcase className="text-xs" />
                <span className="whitespace-nowrap">View Trip</span>
              </button>
              <button
              onClick={()=>router.push(ROUTES.TRIPPAGE)}
              className="flex gap-1.5 bg-[#1D4350] px-3 py-1.5 text-xs font-semibold text-white cursor-pointer hover:bg-[#15323b] transition-colors items-center">
                <FaUserPlus className="text-xs" />
                <span className="whitespace-nowrap">Join Trip</span>
              </button>
              <button
              onClick={()=>router.push(ROUTES.PROFILE)}
              className="flex gap-1.5 bg-[#1D4350] px-3 py-1.5 text-xs font-semibold text-white cursor-pointer hover:bg-[#15323b] transition-colors items-center">
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
