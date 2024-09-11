import DiscoverBar from "../components/fragments/DiscoverBar";
import SwipePreview from "../components/fragments/SwipePreview";
import { CardProduct } from "../components/widgets/Card";
import RecommendedProduct from "../components/fragments/RecommendedProduct";
import BestSallerProduct from "../components/fragments/BestSallerProduct";

function DiscoverPage() {
    const products = [
        {
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
    ];

    return (
        <div className="flex flex-col items-center w-full">
            <div className="relative w-full">
                <div className="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 z-10">
                    <DiscoverBar />
                </div>
                <div className="mt-20 md:mt-32 lg:mt-0">
                    <SwipePreview />
                </div>
            </div>

            <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-16">
                <section className="mb-16">
                    <RecommendedProduct />
                </section>

                <section className="mb-16">
                    <BestSallerProduct />
                </section>

                <section className="mb-16 xl:mx-16 2xl:mx-24">
                    <h2 className="text-2xl font-bold mb-6">All Products</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 ">
                        {products.map((item, index) => (
                            <CardProduct key={index} {...item} />
                        ))}
                    </div>
                </section>

                <div className="flex justify-center my-16">
                    <button className="px-8 py-2 rounded-full border border-slate-300 hover:bg-slate-100 transition-colors">
                        Load More 100+
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DiscoverPage;