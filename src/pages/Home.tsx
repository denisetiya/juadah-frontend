import TitleDiscover from "../components/fragments/TitleDiscover"
import SwipePreview from "../components/fragments/SwipePreview"
import PopularCake from "../components/fragments/PopularCake"
import VideoPreview from "../components/fragments/VideoPreview"
import SwipeTestimonial from "../components/fragments/SwipeTestimonial"

function Home() {
  return (
    <div className="flex flex-col items-center font-bold ">
      <div className="bg-[#F4F5F6] w-full px-5 2xl:px-52 flex items-center">
        <TitleDiscover /> 
      </div>
      <div className="mx-4 mb-10 lg:mb-0 lg:mx-0">
        <SwipePreview />
      </div>
      
      <div className="max-w-full overflow-hidden">
        <PopularCake />
      </div>

      <div>
        <VideoPreview />
      </div>

      <div className="max-w-full overflow-hidden">
        <SwipeTestimonial />
      </div>
    </div>
  )
}

export default Home
