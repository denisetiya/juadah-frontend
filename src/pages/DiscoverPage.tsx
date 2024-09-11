import { ArrowArcLeft } from "@phosphor-icons/react"
import DiscoverBar from "../components/fragments/DiscoverBar"
import SwipePreview from "../components/fragments/SwipePreview"
import { CardProduct } from "../components/widgets/Card"
import RecommendedProduct from "../components/fragments/RecommendedProduct"
import BestSallerProduct from "../components/fragments/BestSallerProduct"
function DiscoverPage() {

    const product = [{
        url: "https://via.placeholder.com/255x188",
        title: "Product 1",
        desc: "This is a description for product 1.",
        price: "$99",
        star: 5,
        userRev: 100
    },
    {
        url: "https://via.placeholder.com/255x188",
        title: "Product 2",
        desc: "This is a description for product 2.",
        price: "$99",
        star: 5,
        userRev: 100
    },
    {
        url: "https://via.placeholder.com/255x188",
        title: "Product 3",
        desc: "This is a description for product 3.",
        price: "$99",
        star: 5,
        userRev: 100
    },
    {
        url: "https://via.placeholder.com/255x188",
        title: "Product 4",
        desc: "This is a description for product 4.",
        price: "$99",
        star: 5,
        userRev: 100
    }
    ]
    return (
        <div className="flex flex-col justify-center items-center pb-20">
            <div className="relative">
                <div className="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-[1000px] ">
                    <DiscoverBar />
                </div>
                <SwipePreview />
            </div>

            <div className="px-5 2xl:px-72">

                <RecommendedProduct />
                <div className="my-10">
                    <BestSallerProduct />
                </div>

                <div className="flex  my-10 justify-between w-full">
                    <div className="text-start font-poppins text-2xl font-bold">
                        All Product
                    </div>

                    <div>
                        <ArrowArcLeft size={32} />
                    </div>
                </div>

                <div className="flex gap-3">
                    {product.map((item) => <CardProduct key={item.title} {...item} />)}

                </div>

                <div className="flex justify-center my-24">
                    <button className="px-20 py-1 rounded-3xl border border-slate-300 "> Load More 100+</button>
                </div>
            </div>
        </div>
    )
}

export default DiscoverPage