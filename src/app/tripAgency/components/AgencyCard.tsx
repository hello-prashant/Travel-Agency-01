'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { LuShieldCheck, LuEye, LuStar, LuHeart, LuCircleCheck, LuUserPlus, } from "react-icons/lu";
import { CiWarning } from "react-icons/ci";
import { FaBriefcase, FaWallet, FaFlag, FaCalendar, FaUser,} from "react-icons/fa";
import { SlBadge } from "react-icons/sl";

type Props = {
  agency: any;
  index: number;
}
export default function FeaturedAgencyCard({ agency, index }: Props) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState([false, false, false]);

  const handleLikeToggle = (index: number) => {
    const newLiked = [...isLiked];
    newLiked[index] = !newLiked[index];
    setIsLiked(newLiked);
  };

  const getColor = (safetyPercentage: string) => {
    const percentage = parseInt(safetyPercentage.replace('% Safe', ''));
    if (percentage <= 50) {
      return 'bg-red-50 text-red-600 border-red-200';
    } else if (percentage <= 80) {
      return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    } else {
      return 'bg-green-100 text-green-600 border-green-300';
    }
  };

  const getmatchColor = (match: string) => {
    const percentage = parseInt(match.replace('% Safe', ''));
    if (percentage <= 50 || !percentage) {
      return 'bg-red-500 text-red-600 border-red-100';
    } else if (percentage <= 70) {
      return 'bg-yellow-400 text-yellow-700 border-yellow-100';
    } else {
      return 'bg-green-500 text-green-600 border-green-100';
    }
  };

  const getNameInitials = (name: string) => {
    if (!name || name === '') return 'NA';
    const names = name.split(' ');
    const initials = names.map((n) => n.charAt(0).toUpperCase()).join('');
    return initials;
  }

  const handleViewTrip = (tripId: string) => {
    router.push(`/trips/${tripId}`);
  };

  const handleJoinTrip = () => {
    alert('Join trip functionality would be implemented here');
  };

  return (
    <div key={agency.tripId} className="w-full shrink-0">
      <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="relative w-full lg:w-[350px] h-64 lg:h-auto shrink-0">
          <img
            src={agency.imgUrl}
            alt={agency.agencyTitle}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => handleLikeToggle(index)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors cursor-pointer"
          >
            <LuHeart className={`w-5 h-5 ${isLiked[index] ? 'text-red-500 fill-red-500' : 'text-white fill-white'}`} />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-2">
              <div className="space-y-1">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                  {agency.agencyTitle}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                  {agency.description}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`border text-white text-xs font-bold px-3 py-1 ${getmatchColor(agency.match || '')}`}>
                  {agency.match} Match
                </span>
                <span className={`bg-red-500 text-white text-xs font-bold px-3 py-1 flex flex-row items-center gap-1`}>
                  <CiWarning className="size-3.5 text-white animate-pulse" strokeWidth={2} />
                  {agency.spotsLeft} spots left
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {agency.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative pl-5 ml-0.5 border-l-2 border-dotted border-gray-300 py-1">
              <span className="absolute -left-1.5 top-1 w-2.5 h-2.5 border-2 border-gray-400 bg-white rounded-full"></span>
              <span className="absolute -left-1.5 bottom-1 w-2.5 h-2.5 bg-gray-900 rounded-full"></span>
              <p className="text-[13px] text-gray-600 leading-none mb-1">
                {agency.locations[0]}
              </p>
              <p className="text-[13px] font-semibold text-gray-900 leading-none">
                {agency.locations[1]}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-y-3 gap-x-8 pt-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaCalendar className="w-4 h-4 text-gray-900 fill-gray-600" />
                <span className="font-medium text-gray-600">{agency.dateRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWallet className="w-4 h-4 text-gray-900 fill-gray-600" />
                <span className="font-medium text-gray-600">{agency.budget}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaFlag className="w-4 h-4 text-gray-900 fill-gray-600" />
                <span className="font-medium text-gray-600">{agency.tripsCompleted}</span>
              </div>
            </div>
          </div>

          <hr className="my-5 border-gray-900" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-amber-600/90 flex items-center justify-center text-white rounded-full font-bold text-lg shrink-0 relative">
                {getNameInitials(agency.featuredBy.name)}
                <span className="absolute -right-1.5 -bottom-2 size-5 rounded-full bg-white flex items-center justify-center shadow-md"> 
                  <SlBadge className="fill-amber-600 size-3.5 font-extrabold" strokeWidth={4}/>
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">{agency.featuredBy.name}, {agency.featuredBy.age}</span>
                  <LuCircleCheck className="size-5 fill-green-500 text-white" />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{agency.featuredBy.location}</span>
                  <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                  <div className="flex items-center">
                    <LuStar className="size-3.5 fill-current mr-0.5 text-yellow-500" />
                    <span className=" text-gray-500 text-xs">
                      {agency.featuredBy.rating}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 bg-amber-200 text-orange-800 rounded-full">
                    <FaUser className="size-3 fill-orange-800"/>
                    Featured Trip Agency
                  </div>
                  <div className={`flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 border rounded-full ${getColor(agency.featuredBy.safetyRate)}`}>
                    <LuShieldCheck className="size-3" strokeWidth={3}/>
                    {agency.featuredBy.safetyRate} Safe
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2 lg:mt-0">
              <Link href={'/tripPage/'}
                className="bg-[#1d4350] hover:bg-cyan-800 text-white h-8 px-3 text-xs font-medium flex items-center transition-colors cursor-pointer"
              >
                <FaBriefcase className="size-3 mr-1" />
                View Trip
              </Link>
              <Link href={'/tripPage/'}
                className="bg-[#1d4350] hover:bg-cyan-800 text-white h-8 px-3 text-xs font-medium flex items-center transition-colors cursor-pointer"
              >
                <LuUserPlus className="size-3.5 mr-1" strokeWidth={2} />
                Join Trip
              </Link>
              <Link href="/profile" className="bg-[#1d4350] hover:bg-cyan-800 text-white h-8 px-3 text-xs font-medium flex items-center transition-colors cursor-pointer">
                <LuEye className="size-4 mr-1" strokeWidth={2} />
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
