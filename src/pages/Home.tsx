import TitleDiscover from "../components/fragments/TitleDiscover"
import SwipePreview from "../components/fragments/SwipePreview"
import PopularCake from "../components/fragments/PopularCake"
import VideoPreview from "../components/fragments/VideoPreview"
import SwipeTestimonial from "../components/fragments/SwipeTestimonial"

function Home() {
  return (
    <div className="font-bold flex flex-col h-full items-center">
      <div className="bg-[#F4F5F6] h-screen w-full px-52 flex items-center">
        <TitleDiscover /> 
      </div>
      <div>
        <SwipePreview />
      </div>

      <div>
        <PopularCake />
      </div>

      <div>
        <VideoPreview />
      </div>

      <div>
        <SwipeTestimonial />
      </div>
    </div>
  )
}

export default Home
