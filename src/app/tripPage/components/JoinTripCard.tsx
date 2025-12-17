export default function JoinTripCard() {
  return (
    <aside className="flex justify-center border-2 border-gray-300 ">
      <div className="min-w-[320px] w-90 p-5 md:p-6">
        <div className="flex flex-col mb-4">
          <span className="text-2xl font-semibold text-gray-900">1500</span>
          <span className="text-xs text-gray-500">per person</span>
        </div>
        <div className="space-y-3 text-sm text-gray-700 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Start Date</span>
            <span className="font-medium">Nov 15, 2025</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">End Date</span>
            <span className="font-medium">Nov 25, 2025</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Duration</span>
            <span className="font-medium">13 days</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Spots Available</span>
            <span className="font-medium text-emerald-500">3 remaining</span>
          </div>
        </div>
        <button className="w-full mb-3 px-4 py-2.5 bg-[#1d4350] text-white text-sm font-semibold cursor-pointer hover:bg-cyan-800 transition-colors duration-300">Join this trip</button>
        <button className="w-full mb-2 px-4 py-2.5 border-2 border-gray-400 text-sm font-medium text-gray-800 flex items-center justify-center gap-2 hover:bg-cyan-800 hover:border-cyan-800 hover:text-white transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Chat with Organizer</span>
        </button>
        <p className="text-[11px] text-gray-400 text-center mt-1">Free cancellation up to 48 hours before trip start.</p>
      </div>
    </aside>
  )
}
