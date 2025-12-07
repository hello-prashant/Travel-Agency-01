export default function StatsCard(){
  return (
    <div className="w-full min-h-50 p-6 flex lex-row gap-6 ">
      <div className="w-full flex flex-col shadow justify-center items-center text-5xl text-cyan-900 font-bold border border-gray-50">
        450+
        <span className="text-base text-gray-500 font-normal">
          Toral Trips
        </span>
      </div>

      <div className="w-full flex flex-col shadow justify-center items-center text-5xl text-cyan-900 font-bold border border-gray-50">
        4450+
        <span className="text-base text-gray-500 font-normal">
          Happy Travellers
        </span>
      </div>

      <div className="w-full flex flex-col shadow justify-center items-center text-5xl text-cyan-900 font-bold border border-gray-50">
        4.9
        <span className="text-base text-gray-500 font-normal">
          Average Rating
        </span>
      </div>
    </div>
  )
}