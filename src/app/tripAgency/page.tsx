import FeaturedAgencyCard from './components/AgencyCard'
import featuredAgencies from "./data/agencies";
export default function page() {
  return (
    <div>
      <FeaturedAgencyCard agency={featuredAgencies[0]}/>
    </div>
  )
}
