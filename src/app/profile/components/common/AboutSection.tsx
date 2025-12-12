const AboutSection = () => {
  return (
    <div className="bg-white shadow-sm p-6 text-black dark:text-black">
      <h2 className="text-xl font-semibold mb-6 bg-gray-300 p-2">About Me</h2>
      
      {/* About */}
      <div className="mb-6">
        <p className="text-gray-800">Wildlife photographer and nature lover. Eco-conscious traveler.</p>
      </div>
      
      {/* Languages */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-600 mb-2">Languages</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">English</span>
          <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Hindi</span>
          <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Hinghlish</span>
        </div>
      </div>
      
      {/* Travel Style */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-600 mb-2">Travel Style</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Adventure</span>
          <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Cultural</span>
          <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Budget-friendly</span>
        </div>
      </div>
      
      
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">Interests</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Hiking</span>
          <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Photography</span>
          <span className="px-3 py-1 rounded-full border border-gray-300 text-sm">Local cuisine</span>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
