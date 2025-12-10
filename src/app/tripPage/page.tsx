import HeroSection from "./components/HeroSection";
import DetailedItineraryCard from "@/app/tripPage/components/DetailedItineraryCard";
import JoinTripCard from "./components/JoinTripCard";
import SafetyInfoCard from "./components/SafetyInfoCard"
import CancellationCard from "./components/CancellationCard";
import TripLeaderCard from "./components/TripLeaderCard";
import TripHighlightsCard from "./components/TripHighlightsCard";
import TravelerCard from "./components/TravelerCard";
import TripOverview from "./components/TripOverviewCard"
import TripRoadmapCard from "./components/TripRoadmapCard";
import trip from "./data/trip"

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
        </div>
        <div className="flex flex-col w-[30%] gap-8 items-center">
          <JoinTripCard />
          <TripLeaderCard />
          <TravelerCard />
          <TripRoadmapCard />
        </div>
      </div>
    
    </section>
  )

}
