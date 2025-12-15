export default function TripRoadmapCard({ imgSrc = '/map-preview-v3.png', height = 260 }) {
  return (
    <div className="bg-white border-2 border-gray-300 shadow p-4 flex flex-col gap-4 max-h-80">
      <h2 className="font-bold text-lg ">Trip Roadmap</h2>
      <div className="w-full overflow-hidden border border-gray-300">
        <img
          src={imgSrc}
          alt="Trip Route Map"
          className="w-full object-cover"
          style={{ height: height }}
        />
      </div>
      
    </div>
  )
}
