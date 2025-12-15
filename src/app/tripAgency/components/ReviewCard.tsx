import { LuUsers } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
type Props = {
  review: any;
}

export default function ReviwCard({ review }: Props) {
  return (
    <div className="w-full h-40 border border-gray-100 shadow p-4 md:gap-4 flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <LuUsers className="w-10 h-10 text-gray-600 rounded-full bg-gray-200 p-1.5"/>
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg">{review.reviewer}</h3>
          <span className="text-sm text-gray-500">{review.createdAt}</span>
        </div>
        <span className="px-2 py-1 text-sm bg-red-100 text-red-400 rounded-md -translate-y-2" >
          {review.isVerified?"Verified User":""}
        </span>
      </div>
      <div className="inline-flex gap-1.5 items-center">
        {Array.from({ length: 5}).map((_, index) => (
          index <= Math.floor(review.rating) - 1 ?
          <FaStar key={index} 
          fill="yellow"
          strokeWidth={0} width={24} height={24} 
          className="w-5.5 h-5.5"/>
          : 
          <FaRegStar key={index} width={24} height={24} 
          className="text-gray-400 w-5.5 h-5.5"/>
        ))}
      </div>
      <p>{review.comment}</p>
    </div>
  )
}