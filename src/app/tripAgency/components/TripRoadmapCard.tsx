export default function TripRoadmapCard({ imgSrc = '/map-preview-v3.png', height = 260 }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Trip Roadmap</h3>
      <div className="w-full rounded-lg overflow-hidden border border-gray-300">
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
