import DetailedItineraryCard from "@/components/DetailedItineraryCard";
import SafetyCard from "@/components/SafetyCard";
import CancellationCard from "@/components/CancellationCard";

export default function TripPage(){
  return (
    <section
    className="w-full min-h-svh p-6 flex flex-col gap-4">
      <DetailedItineraryCard />
      <SafetyCard />
      <CancellationCard />
    </section>
  )
}