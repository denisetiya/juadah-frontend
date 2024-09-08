
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Button from '../widgets/Button';

const SwipePreview = () => {
    const slides = [
        {
            image: "https://via.placeholder.com/372x372",
            title: "Bibendum et sit aliquam!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.",
        },
        {
            image: "https://via.placeholder.com/372x372",
            title: "Bibendum et sit aliquam #2!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.",
        },
        {
            image: "https://via.placeholder.com/372x372",
            title: "Bibendum et sit aliquam #3!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.",
        },
        {
            image: "https://via.placeholder.com/372x372",
            title: "Bibendum et sit aliquam #3!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.",
        },

    ];

    return (
        <Swiper
            modules={[ Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            grabCursor={true}
            autoplay={{ delay: 1000, }}
            pagination={{ clickable: true }}
            className="w-screen pb-32 py-44 md:h-screen"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-40 items-center w-full h-full px-4 md:px-52">
                        <div className=''>
                            <img src={slide.image} alt="Placeholder" className="rounded-3xl max-w-[400px] md:max-w-[372px]" />
                        </div>
                        <div className="max-w-[600px]">
                            <div className="text-2xl md:text-6xl font-bold text-[#1B6270]">
                                {slide.title}
                            </div>
                            <div className="text-sm md:text-normal text-slate-500 font-semibold mt-6 md:mt-12">
                                {slide.description}
                            </div>
                            {/* <div  className="max-w-[192px] mt-10 bg-[#DD9BA3] hover:bg-[#f3bfc5] rounded-full">
                                <Button name="Discover Menu" />
                            </div> */}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwipePreview;