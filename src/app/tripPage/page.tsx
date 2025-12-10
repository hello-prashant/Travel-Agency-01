// src/app/TripOverview/page.tsx
"use client"
import TripOverview from "./components/TripOverviewCard"
import trip from "./data/trip"

export default function TripOverviewPage() {
  return (
    <main className="min-h-screen py-10 flex justify-center bg-gray-50">
      <div className="w-full max-w-5xl px-6">
        <TripOverview trip={trip} />
      </div>
    </main>
  )
}
