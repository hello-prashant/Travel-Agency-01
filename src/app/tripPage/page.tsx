import ShareTripCard from "./components/SharetripCard"

export default function TripAgencyPage()
{
  return (
    <section id="trip-agency"
    className="w-full min-h-svh flex flex-row p-6 gap-4"
    > 
      <div className="w-1/2">
        <ShareTripCard />
      </div>
    </section>
  )
}
