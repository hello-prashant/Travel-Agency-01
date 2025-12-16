import HeroSection from "./components/HeroSection"
import AboutAgency from "./components/AboutAgencyCard"
import StatsCard from "./components/StatsCard"
import TrustSafetyCard from "./components/TrustSafetyCard"
import TabNavigation from "./components/TabNavigation"
import UpcomingTrips from "./components/UpcomingTrips";
import PastTrips from "./components/PastTrips";
import ContactInfoCard from "./components/ContactInfoCard"
import ReviwCardContainer from "./components/ReviewCardContainer"
import TravelPhotosCard from "./components/TravelPhotosCard"
import FeaturedAgencyContainer from './components/FeaturedAgency';

export default function TripAgency(){
  return (
    <section
    className="w-full min-h-svh flex flex-col gap-4 pb-5">
      <HeroSection />
      <div className="w-full flex flex-row gap-6 p-6">
        <div className="w-[70%] flex flex-col gap-6 ">
          <StatsCard />
          <AboutAgency />
          <TabNavigation children={[
            <UpcomingTrips key={0}/>, 
            <PastTrips key={1}/>,
            <ReviwCardContainer key={2}/>,
            <TravelPhotosCard key={3}/>  
          ]}/>
          
        </div>
        <div className="w-[30%] flex flex-col gap-4">
          <ContactInfoCard />
          <TrustSafetyCard />
        </div>
      </div>
      <div className="-mt-2.5">
        <FeaturedAgencyContainer />
      </div>
    </section>
  )
}

