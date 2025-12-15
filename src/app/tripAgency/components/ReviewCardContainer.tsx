import ReviwCard from "./ReviewCard"
import reviews from "../data/reviews"
export default function ReviewCardContainer() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 overflow-x-hidden overflow-y-scroll ">
      {reviews.map((review) => (
        <ReviwCard key={review.id} review={review}/>
      ))}
    </div>
  )
}