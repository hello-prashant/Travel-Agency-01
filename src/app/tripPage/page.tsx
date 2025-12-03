import CencellationCard from "@/components/CancellationCard";
import DetailedItineraryCard from "@/components/DetailedItineraryCard";
import SafetyCard from "@/components/SafetyCard";

export default function TripPage(){
  return(
    <section id="trip-page"
    className="w-full min-h-svh flex flex-col gap-4 p-6">
      {/* place `Trip overview` here */}
      <DetailedItineraryCard />
      <SafetyCard />
      <CencellationCard />
      {/* Place `Similar trips` cards here */}
    </section>
  )
}