import { CardExclusive } from "../widgets/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react';

const cardData = [
  {
    url: "https://via.placeholder.com/372x372",
    title: "Exclusive Product 1",
    desc: "This is a description for product 1.",
    price: "$29.99"
  },
  {
    url: "https://via.placeholder.com/372x372",
    title: "Exclusive Product 2",
    desc: "This is a description for product 2.",
    price: "$39.99"
  },
  {
    url: "https://via.placeholder.com/372x372",
    title: "Exclusive Product 3",
    desc: "This is a description for product 3.",
    price: "$49.99"
  },
  {
    url: "https://via.placeholder.com/372x372",
    title: "Exclusive Product 3",
    desc: "This is a description for product 3.",
    price: "$49.99"
  },
  {
    url: "https://via.placeholder.com/372x372",
    title: "Exclusive Product 3",
    desc: "This is a description for product 3.",
    price: "$49.99"
  },
  {
    url: "https://via.placeholder.com/372x372",
    title: "Exclusive Product 3",
    desc: "This is a description for product 3.",
    price: "$49.99"
  },

  // More data here...
]

const PopularCake = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen">
      <div className="flex flex-col items-center my-5 md:my-10">
        <div className="text-lg font-light text-gray-700 md:text-2xl">Most Popular</div>
        <div className="mt-2 text-xl font-semibold text-gray-900 md:text-4xl md:my-5">Our Exclusive Cakes</div>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
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
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
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
          className='max-w-screen-lg pt-8 pb-10 mx-auto'
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <CardExclusive
                url={item.url}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            </SwiperSlide>
          ))}


          <div className="absolute flex gap-2 top-4 right-9">
            <ArrowCircleRight size={60} className='swiper-button-prev text-slate-400' />
            <ArrowCircleLeft size={60} className='swiper-button-next text-slate-400' />
          </div>

        </Swiper>
      </div>
    </div>
  )
}

export default PopularCake;
