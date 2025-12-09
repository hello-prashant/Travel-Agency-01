import HeroSection from "./components/HeroSection"
import AboutAgency from "./components/AboutAgencyCard"
import StatsCard from "./components/StatsCard"
import TrustSafetyCard from "./components/TrustSafetyCard"
import TabNavigation from "./components/TabNavigation"
import UpcomingTrips from "./components/UpcomingTrips";
import PastTrips from "./components/PastTrips";

export default function TripAgency(){
  return (
    <section
    className="w-full min-h-svh flex flex-col gap-4 p-6">
      <HeroSection />
      <div className="w-full flex flex-row gap-6 pt-6">
        <div className="w-[70%] flex flex-col gap-4 ">
          <StatsCard />
          <AboutAgency />
          <TabNavigation children={[
            <UpcomingTrips key={0}/>, 
            <PastTrips key={1}/>,
          ]}/>
          
        </div>
        <div className="w-[30%] relative">
          <TrustSafetyCard />
        </div>
      </div>
    </section>
  )
}

