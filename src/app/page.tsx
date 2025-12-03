import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center">

      
      <div className="w-full max-w-6xl bg-white rounded-lg shadow  p-8 flex flex-col gap-4 relative">

        
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4">
            Featured Travel Agencies
          </h4>
        </div>

        <div className="flex gap-4">

        
          <div className="w-1/4 h-96">
            <img
              src="https://th.bing.com/th/id/R.f15778f5631bd17ccb031a2e60e262a1?rik=sefvPz%2fQGzGuGg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-c4Py2wzt7U8%2fUixwB4-og5I%2fAAAAAAAAPGo%2fdSmkEuAWonE%2fs1600%2fburj-al-arab-1.jpg&ehk=ORN%2bnqDi0bIeEwa%2f2rV%2bNNq5h21lYsRrSYZyu2vuu%2fo%3d&risl=&pid=ImgRaw&r=0"
              alt="agency"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

    
          <div className="w-1/2 flex flex-col gap-3">

            <h1 className="text-xl font-bold">Wanderlust Adventures</h1>

            <p className="text-gray-600">
              Discover extraordinary travel experiences with us! We specialise in
              curated adventure tours across breathtaking destinations.
            </p>

            <div className="flex gap-2 mt-2 flex-wrap">
              {["Adventure Travel", "Cultural Tour", "Sustainable Travel"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="mt-3 text-gray-800 space-y-1">
              <div>  <img src="currency.png"  alt="verified" className="w-4 h-4 inline-block"/>500+ travelers enrolled</div>
              <div> <img src="currency.png"  alt="verified" className="w-4 h-4 inline-block"/> 150+ trips completed</div>
              <div>  <img src="currency.png"  alt="verified" className="w-4 h-4 inline-block"/>8+ years in business</div>
            </div>

            <div className="border-t pt-3">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  SJ
                </div>

                <div>
                 <div className="font-medium flex items-center gap-1">
  <span>Sarah Johnson, 26</span>
  <img 
    src="tickmarks.png" 
    alt="verified" 
    className="w-4 h-4 inline-block"
  />
</div>

                  <div className="text-sm text-gray-600">
                    Goa, India • ⭐ 4.8
                  </div>

                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                     <img src="join_trips.png"  alt="verified" className="w-4 h-4 inline-block"/> Featured Trip Agency
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                      88% Safe
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-90 right-0.5 flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
               <img src="join_trips.png"  alt="verified" className="w-4 h-4 inline-block"/> Browse Trips
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
               <img src="view_profile.png"  alt="verified" className="w-4 h-4 inline-block"/> View Profile
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-24 right-4 flex gap-2">
          <span className="px-3 py-1 text-white rounded-full text-sm">
          <img src="Verfied Badge.png" alt="" />
          </span>
          <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
            2 spots left
          </span>
        </div>

      </div>
    </div>
  );
};

export default Page;
