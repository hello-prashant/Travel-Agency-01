export default function AboutAgency(){
  return (
    <div className="w-full min-h-80 border border-gray-200 shadow p-4">
      <div className="w-full p-4 flex flex-col gap-3 ">
        <h2 className="text-xl font-bold">About Wanderlust Adventures</h2>
        <p className="text-gray-500">Wanderlust Adventures is your trusted travel partner offering unique experiences across the world. We believe in responsible tourism, cultural exploration, and creating unforgettable memories for out travelers.
        </p>
      </div>

      <div className="w-full p-4 flex flex-col gap-3 ">
        <h3 className="text-lg font-bold">Specialities</h3>
        <div className="inline-flex gap-2 ">
          <span className="rounded-full border border-black px-2 py-0.5 text-sm text-gray-500">Adventure Tours</span>
          <span className="rounded-full border border-black px-2 py-0.5 text-sm text-gray-500">Cultural Tours </span>
          <span className="rounded-full border border-black  px-2 py-0.5 text-sm text-gray-500">Sustainable Tourism </span>
          <span className="rounded-full border border-black px-2 py-0.5 text-sm text-gray-500">Small Groups</span>
        </div>
      </div>

      <div className="w-full p-4 flex flex-col gap-3 ">
        <h3 className="text-lg font-bold">Certifications & Awards</h3>

        <div className="inline-flex gap-2 ">
          <span className="rounded-full border border-black  px-2 py-0.5 text-sm text-gray-500">
            ISO 9001 
          </span>
          <span className="rounded-full border border-black px-2 py-0.5 text-sm text-gray-500">
            ASTA Verified
          </span>
        </div>
      </div>
    </div>
  )
}

// Todo: implement motion animation with active tab indicator