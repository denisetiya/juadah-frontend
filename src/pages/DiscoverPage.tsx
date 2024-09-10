import DiscoverBar from "../components/fragments/DiscoverBar"
import SwipePreview from "../components/fragments/SwipePreview"
import { CardProduct } from "../components/widgets/Card"

function DiscoverPage() {
    return (
        <div className="flex flex-col justify-center items-center pb-20">
            <div className="relative">
                <div className="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-[1000px] ">
                    <DiscoverBar />
                </div>
                <SwipePreview />
            </div>

            <div>
                <CardProduct price="$99" url="https://via.placeholder.com/255x188" title="Product 1" star={5} userRev={100} />
            </div>
        </div>
    )
}

export default DiscoverPage