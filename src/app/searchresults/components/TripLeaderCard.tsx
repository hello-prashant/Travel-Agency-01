"use client";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {
  FaHeart,
  FaStar,
  FaFlag,
  FaCalendarAlt,
  FaWallet,
  FaBriefcase,
  FaUserPlus,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";
import { LuView } from "react-icons/lu";
import { IoWarning } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { TripLeaderCardProps } from "../types";
import ROUTES from "../../../../lib/routes";

const TripLeaderCard: React.FC<TripLeaderCardProps> = ({
  title,
  description,
  tags,
  location1,
  location2,
  dates,
  price,
  tripsCompleted,
  matchPercentage,
  spotsLeft,
  leaderName,
  leaderAge,
  leaderLocation,
  leaderRating,
  leaderImage,
  salePercentage = 88,
}) => {
  const router = useRouter();
  return (
    <div className="w-full border border-gray-200 bg-white shadow-sm transition hover:shadow-xl">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden md:h-auto md:w-48 shrink-0">
          <Image
            src={leaderImage}
            alt={leaderName}
            fill
            className="object-cover"
          />
          <div className="absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors">
            <FaHeart className="text-white text-sm" />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 px-4 py-3">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-600">{title}</h3>
              <p className="mt-1 text-xs text-gray-800 leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex gap-2 shrink-0 items-start">
              <span className="flex justify-center items-center rounded-3xl bg-green-500 px-3 py-1 text-xs font-bold text-white whitespace-nowrap">
                {matchPercentage}% Match
              </span>
              <span className="flex gap-1 justify-center items-center rounded-3xl bg-red-500 px-3 py-1 text-xs font-bold text-white whitespace-nowrap">
                <IoWarning className="text-sm" />
                {spotsLeft} Spots left
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-blue-500">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-md bg-blue-100 px-2 py-0.5 text-xs"
              >
                {tag}
              </span>
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
                {location1}
              </p>
              <p className="text-sm text-gray-600">{location2}</p>
            </div>
          </div>

          <div className="mt-3 flex gap-4 text-xs text-gray-800 flex-wrap">
            <div className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-gray-500 text-sm" />
              <p className="whitespace-nowrap">{dates}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <FaWallet className="text-gray-500 text-sm" />
              <p className="whitespace-nowrap">
                ₹{price.toLocaleString("en-IN")} / person
              </p>
            </div>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <FaFlag className="text-gray-500 text-sm" />
              <p>{tripsCompleted} Trips Completed</p>
            </div>
          </div>

          <hr className="my-3 border-gray-200" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-lg">
                SJ
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-600 whitespace-nowrap">
                    {leaderName}, {leaderAge}
                  </span>
                  <Image
                    src="/tickmarks.png"
                    alt="tickPng"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-800">
                  <span>{leaderLocation}</span>
                  <span className="text-gray-300">•</span>
                  <span className="flex items-center gap-1 font-semibold">
                    <Image
                      src="/rating.png"
                      alt="starPng"
                      width={16}
                      height={16}
                    />{" "}
                    {leaderRating}
                  </span>
                </div>
                <div className="mt-1.5 flex gap-2 flex-wrap">
                  <span className="rounded bg-yellow-100 text-yellow-600 px-2 text-xs py-0.5 border  flex items-center gap-1 whitespace-nowrap">
                    <FaUserFriends className="text-xs" /> Featured Trip Leader
                  </span>
                  <span className="rounded border-2 border-green-300 bg-green-100 px-2 text-green-600 text-xs py-0.5 flex items-center gap-1 whitespace-nowrap">
                    <FaShieldAlt className="text-xs" /> {salePercentage}% Safe
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
};

export default TripLeaderCard;
