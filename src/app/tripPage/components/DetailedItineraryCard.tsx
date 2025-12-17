export default function DetailedItineraryCard(){
  return (
    <div className="w-full p-6 border border-gray-300 flex flex-col">
      <h4 className="text-sm font-semibold" >Detailed Itinerary</h4>

      <div id='item' className="item flex flex-col flex-wrap relative mt-2">
        <div id='line' className="absolute w-0.5 h-[125px] left-3 bg-gray-500"></div>
        <div id='dot' className="h-7 w-7 flex justify-center items-center bg-[#1d4350] absolute left-0 top-10px rounded-full text-center text-white text-sm">1</div>
        <div id='content' className="ml-12">
          <h3 className='font-bold ' >Arrival in Seminyak</h3>
          <ul className='text-sm text-gray-600 list-disc pl-4 '>
            <li>Airport pickup</li>
            <li>Beach sunset welcome dinner</li>
            <li>Hotel check-in</li>
          </ul>
        </div>
      </div>
      <div id='item' className="flex flex-col flex-wrap relative mt-10">
        <div id='line' className="absolute w-0.5 h-[125px] left-3 bg-gray-500"></div>
        <div id='dot' className="h-7 w-7 flex justify-center items-center bg-[#1d4350] absolute left-0 top-10px rounded-full text-center text-white text-sm">2</div>
        <div id='content' className="ml-12 ">
          <h3 className='font-bold ' >Arrival in Seminyak</h3>
          <ul className='text-sm text-gray-600 list-disc pl-4'>
            <li>Airport pickup</li>
            <li>Beach sunset wlcome dinner</li>
            <li>Hotel check-in</li>
          </ul>
        </div>
      </div>
      <div id='item' className="flex flex-col flex-wrap relative mt-10">
        {/* <div id='line' className="absolute w-[5px] h-[100px] left-2.5 bg-red-400"></div> */}
        <div id='dot' className="h-7 w-7 flex justify-center items-center bg-[#1d4350] absolute left-0 top-10px rounded-full text-center text-white text-sm">2</div>
        <div id='content' className="ml-12 ">
          <h3 className='font-bold ' >Arrival in Seminyak</h3>
          <ul className='text-sm text-gray-600 list-disc pl-4'>
            <li>Airport pickup</li>
            <li>Beach sunset wlcome dinner</li>
            <li>Hotel check-in</li>
          </ul>
        </div>
      </div>
    </div>
  )
}