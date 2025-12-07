import HeroSection from "./components/HeroSection";
import DetailedItineraryCard from "@/app/tripPage/components/DetailedItineraryCard";
import JoinTripCard from "./components/JoinTripCard";

export default function TripPage(){
  return (
    <section
    className="w-full min-h-svh flex flex-col gap-4">
      <HeroSection />
      <div className="flex flex-row w-full gap-4 px-20 py-10">
        <div className="flex flex-col w-[70%]">

        <DetailedItineraryCard />
        </div>
        <div className="flex flex-col w-[30%]">
          <JoinTripCard />
        </div>
      </div>
    </section>
  )
}