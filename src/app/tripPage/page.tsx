import HeroSection from "./components/HeroSection";
import DetailedItineraryCard from "./components/DetailedItineraryCard";
import JoinTripCard from "./components/JoinTripCard";
import SafetyInfoCard from "./components/SafetyInfoCard"
import CancellationCard from "./components/CancellationCard";
import TripLeaderCard from "./components/TripLeaderCard";
import TripHighlightsCard from "./components/TripHighlightsCard";
import TravelerCard from "./components/TravelerCard";
import TripOverview from "./components/TripOverviewCard"
import TripRoadmapCard from "./components/TripRoadmapCard";
import ShareTripCard from "./components/SharetripCard";
import trip from "./data/trip"
import SimilarTripCard from "./components/SimilarTripCard"

import similarTrips from "./data/similarTrips"; 

export default function TripPage(){
  return (
    <section
    className="w-full min-h-svh flex flex-col gap-4">
      <HeroSection />
      <div className="flex flex-row w-full gap-10 px-20 py-10">
        <div className="flex flex-col w-[70%] gap-8 items-center">
          <TripOverview trip={trip} />
          <TripHighlightsCard />
          <DetailedItineraryCard />
          <SafetyInfoCard />
          <CancellationCard />
          <div className="w-full flex flex-row items-start justify-start relative gap-4 pt-12">
            <h2 className="text-2xl font-semibold absolute top-0">Similar Trips</h2>
            {similarTrips.map((trip) => (
              <SimilarTripCard key={trip.id} trip={trip}/>
            ))}

          </div>
        </div>
        <div className="flex flex-col w-[30%] gap-7 items-center">
          <JoinTripCard />
          <TripLeaderCard />
          <TravelerCard />
          <TripRoadmapCard />
          <ShareTripCard />
        </div>
      </div>
    
    </section>
  )

}

