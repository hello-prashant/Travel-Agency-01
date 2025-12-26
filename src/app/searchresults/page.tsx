"use client";

import { useTripFilters } from "./hooks/useTripFilters";
import { categories } from "./data/constants";
import Filter from "./components/Filter";
import BestMatchCard from "./components/BeastMatchCard";
import AgencyCard from "./components/AgencyCard";
import TripLeaderCard from "./components/TripLeaderCard";
import { SimilarTripCard } from "./components/SimilarTripCard";

export default function SearchResultsPage() {
  const {
    destination,
    setDestination,
    travelScope,
    setTravelScope,
    selectedLanguages,
    setSelectedLanguages,
    selectedInterests,
    setSelectedInterests,
    rating,
    setRating,
    compatibility,
    setCompatibility,
    safeScore,
    setSafeScore,
    selectedTripTypes,
    setSelectedTripTypes,
    selectedFood,
    setSelectedFood,
    durationMax,
    setDurationMax,
    setIsDurationActive,
    agePreference,
    setAgePreference,
    setIsAgeActive,
    budget,
    setBudget,
    setIsBudgetActive,
    activeCategory,
    setActiveCategory,
    filteredTrips,
    handleClearFilters,
  } = useTripFilters();

  return (
    <div className=" bg-gray-50 p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        <Filter
          destination={destination}
          setDestination={setDestination}
          travelScope={travelScope}
          setTravelScope={setTravelScope}
          selectedLanguages={selectedLanguages}
          setSelectedLanguages={setSelectedLanguages}
          selectedInterests={selectedInterests}
          setSelectedInterests={setSelectedInterests}
          rating={rating}
          setRating={setRating}
          compatibility={compatibility}
          setCompatibility={setCompatibility}
          safeScore={safeScore}
          setSafeScore={setSafeScore}
          selectedTripTypes={selectedTripTypes}
          setSelectedTripTypes={setSelectedTripTypes}
          selectedFood={selectedFood}
          setSelectedFood={setSelectedFood}
          durationMax={durationMax}
          setDurationMax={setDurationMax}
          setIsDurationActive={setIsDurationActive}
          agePreference={agePreference}
          setAgePreference={setAgePreference}
          setIsAgeActive={setIsAgeActive}
          budget={budget}
          setBudget={setBudget}
          setIsBudgetActive={setIsBudgetActive}
          handleClearFilters={handleClearFilters}
        />

        <main className="flex-1">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  activeCategory === category
                    ? "bg-teal-900 text-white"
                    : category === "Trending"
                    ? "bg-orange-50 text-orange-600"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <h1 className="mt-6 text-2xl font-bold text-gray-700">
            {activeCategory === "Featured Trip Agency"
              ? "Featured Travel Agencies"
              : ""}
            {activeCategory === "Featured Trip Leader"
              ? "Featured Trip Leaders"
              : ""}
            {activeCategory === "Similar Trips" ? "Similar Trips" : ""}
            {activeCategory === "Trending" ? "Trending" : ""}
            {activeCategory === "Best Match" ? "Best Match" : ""}
            {activeCategory === "All" ? "All" : ""}
          </h1>

          <div className="mt-6 space-y-6">
            {activeCategory === "Featured Trip Agency" ? (
              <AgencyCard />
            ) : activeCategory === "Featured Trip Leader" ? (
              <div className="space-y-6">
                {filteredTrips.map((trip, index) => (
                  <TripLeaderCard
                    key={index}
                    id={`leader-${index}`}
                    title={trip.information.heading}
                    description={trip.information.description}
                    tags={trip.information.activities}
                    locations={[
                      trip.information.fromLocation,
                      trip.information.toLocation,
                    ]}
                    location1={trip.information.fromLocation}
                    location2={trip.information.toLocation}
                    dates={trip.information.date}
                    price={
                      parseInt(
                        trip.information.pricePerPerson.replace(/,/g, "")
                      ) || 0
                    }
                    tripsCompleted={trip.information.count}
                    matchPercentage={trip.information.matchPercentage}
                    spotsLeft={trip.information.spotsAvailable}
                    leaderName="Sarah Johnson"
                    leaderAge={26}
                    leaderLocation="Goa, India"
                    leaderRating={4.8}
                    leaderImage="/Burj_Al_Arab_Dubai.jpg"
                    salePercentage={88}
                  />
                ))}
                {filteredTrips.length === 0 && (
                  <p className=" bg-white p-6 text-center text-gray-500 shadow-sm">
                    No trip leaders match the selected filters.
                  </p>
                )}
              </div>
            ) : activeCategory === "Similar Trips" ? (
              <div className="space-y-6">
                {filteredTrips.map((trip, index) => (
                  <SimilarTripCard
                    key={index}
                    image={trip.imageSrc}
                    title={trip.information.heading}
                    description={trip.information.description}
                    tags={trip.information.activities}
                    origin={trip.information.fromLocation}
                    destination={trip.information.toLocation}
                    dates={trip.information.date}
                    price={trip.information.pricePerPerson}
                    tripsCompleted={trip.information.count}
                    matchPercent={trip.information.matchPercentage}
                    spotsLeft={trip.information.spotsAvailable}
                    host={{
                      name: "Sarah Johnson",
                      age: 26,
                      initials: "SJ",
                      location: "Goa, India",
                      rating: 4.8,
                      badge: "Travel Enthusiast",
                      safetyScore: 90,
                      verified: true,
                    }}
                  />
                ))}
                {filteredTrips.length === 0 && (
                  <p className=" bg-white p-6 text-center text-gray-500 shadow-sm">
                    No similar trips match the selected filters.
                  </p>
                )}
              </div>
            ) : (
              <>
                {filteredTrips.length === 0 && (
                  <p className=" bg-white p-6 text-center text-gray-500 shadow-sm">
                    No trips match the selected filters. Try adjusting your
                    criteria.
                  </p>
                )}

                {filteredTrips.map((trip, index) => (
                  <BestMatchCard key={index} trip={trip} />
                ))}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
