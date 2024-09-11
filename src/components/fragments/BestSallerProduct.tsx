import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react"
import { CardProduct } from "../widgets/Card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function BestSallerProduct() {

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
    },
    {
        url: "https://via.placeholder.com/255x188",
        title: "Product 4",
        desc: "This is a description for product 4.",
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
        <div>
            <div className="relative">

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    // centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className='max-w-screen-lg pt-16 pb-10 '
                >
                    {product.map((item, index) => (
                        <SwiperSlide key={index} className="">
                            <CardProduct key={item.title} {...item} />
                        </SwiperSlide>
                    ))}


                    <div className="text-start font-poppins text-xl md:text-2xl font-bold top-0  w-full md:w-auto md:left-0 absolute">
                        Best Saller Products
                    </div>
                    <div className="absolute flex gap-2 bottom-3 right-9">
                        <ArrowCircleRight size={60} className='swiper-button-prev   text-slate-400' />
                        <ArrowCircleLeft size={60} className='swiper-button-next  text-slate-400' />
                    </div>

                </Swiper>
            </div>

            <div className="flex gap-3">

            </div>
        </div>
    )
}

export default BestSallerProduct