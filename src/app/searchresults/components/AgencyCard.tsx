"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaHeart,
  FaUserFriends,
  FaFlag,
  FaBriefcase,
  FaShieldAlt,
} from "react-icons/fa";
import { LuView } from "react-icons/lu";
import { IoWarning } from "react-icons/io5";
import ROUTES from "../../../../lib/routes";

export default function AgencyCard() {
  const router = useRouter();
  return (
    <div className="w-full border border-gray-200 bg-white shadow-sm transition hover:shadow-xl">
      <div className="flex flex-col md:flex-row">
        {/* Left Image Section */}
        <div className="relative h-48 w-full overflow-hidden md:h-auto md:w-48 shrink-0">
          <Image
            src="/Burj_Al_Arab_Dubai.jpg"
            alt="Agency Image"
            fill
            className="object-cover"
          />
          <div className="absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors">
            <FaHeart className="text-white text-sm" />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex-1 px-4 py-3">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-600">
                Wanderlust Adventures
              </h2>
              <p className="mt-1 text-xs text-gray-800 leading-relaxed">
                Discover extraordinary travel experiences with us! We specialize
                in curated adventure tours across breathtaking destinations.
              </p>
            </div>
            <div className="flex gap-2 shrink-0 items-start">
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
                Verified
              </span>
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
                <IoWarning className="text-sm" /> 2 spots left
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {["Adventure Travel", "Cultural Tours", "Sustainable Travel"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-500 text-xs font-medium px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* Stats */}
          <div className="mt-3 space-y-1.5 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <FaUserFriends className="text-gray-500 text-sm" /> 500+ travelers
              enrolled
            </div>
            <div className="flex items-center gap-2">
              <FaFlag className="text-gray-500 text-sm" /> 150+ trips completed
            </div>
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-gray-500 text-sm" /> 8+ years in
              business
            </div>
          </div>

          <hr className="my-3 border-gray-200" />

          {/* Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                SJ
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                  Sarah Johnson, 26
                  <Image
                    src="/tickmarks.png"
                    alt="verified"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-800 mt-0.5">
                  <span>Goa, India</span>
                  <span className="text-gray-300">•</span>
                  <span className="flex items-center gap-1 font-semibold">
                    <Image
                      src="/rating.png"
                      alt="rating"
                      width={16}
                      height={16}
                    />{" "}
                    4.8
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded flex items-center gap-1 font-medium whitespace-nowrap">
                    <FaUserFriends className="text-xs" /> Featured Trip Agency
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded flex items-center gap-1 border border-green-300 font-medium whitespace-nowrap">
                    <FaShieldAlt className="text-xs" /> 88% Safe
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={()=>router.push(ROUTES.TRIPPAGE)}
               className="bg-[#1D4350] text-white text-xs px-3 py-1.5 font-semibold hover:bg-[#15323b] transition-colors flex items-center gap-1.5">
                <FaBriefcase className="text-xs" /> Browse Trips
              </button>
              <button 
                onClick={()=>router.push(ROUTES.TRIPAGENCY)}
               className="bg-[#1D4350] text-white text-xs px-3 py-1.5 font-semibold hover:bg-[#15323b] transition-colors flex items-center gap-1.5">
                <LuView className="text-xs" /> View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
