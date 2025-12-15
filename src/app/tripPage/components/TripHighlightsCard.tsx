import { LuCircleCheck } from "react-icons/lu"
export default function TripHighlightsCard() {
  return (
    <div className="w-full flex flex-col gap-6 border border-gray-300 p-6">
      <h2 className="text-xl font-bold">Trip Highlights</h2>
      <div className="w-full flex flex-row justify-around">
        <div className="inline-flex items-center gap-2" >
          <LuCircleCheck className="fill-black text-white w-6 h-6 " />
          <span className="text-base">
            Beach activities
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <LuCircleCheck className="fill-black text-white w-6 h-6 " />
          <span className="text-base">
            Local cuisine
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
            <LuCircleCheck className="fill-black text-white w-6 h-6 " />
            <span className="text-base">
              Temple visits
            </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <LuCircleCheck className="fill-black text-white w-6 h-6" />
          <span className="text-base">
            Yoga sessions
          </span>
        </div>
      </div>
    </div>
  )
}
