// app/JoinedTravelers/page.tsx
import React from "react";
import TravelerCard from "./components/TravelerCard";

export default function JoinedTravelersPage() {
  return (
      <div className="max-w-6xl mx-auto">
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              </div>

              {/* Traveler card */}
              <TravelerCard />
            </div>
          </div>
                </div>
              </div>
  );
}
