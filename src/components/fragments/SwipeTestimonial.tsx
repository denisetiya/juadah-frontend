import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CardTestimonial } from '../widgets/Card';
import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react';

const SwipeTestimonial = () => {
    const testimonial = [
        { name: "user1", email: "user@gmail.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi." },
        { name: "user2", email: "user@gmail.com!", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi." },
        { name: "user3", email: "user@gmail.com!", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi." },
        { name: "user4", email: "user@gmail.com!", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi." },
        { name: "user5", email: "user@gmail.com!", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi." },
        { name: "user6", email: "user@gmail.com!", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi." },
    ];

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center relative'>
            <div className='text-2xl font-normal text-poppins mb-2'>
                Testimonials
            </div>

            <div className='text-2xl text-wrap md:text-4xl font-bold mb-10'>
                What’s our customer says?
            </div>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={20}  // Add space between slides
                breakpoints={{
                    // Define different settings for different screen sizes
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                grabCursor={true}
                pagination={{
                    dynamicBullets: true,
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className='max-w-screen-xl h-[27rem] px-10 pb-10'
            >
                {testimonial.map((slide, index) => (
                    <SwiperSlide key={index} className='flex justify-center'>
                        <div className='p-6 pb-4'>
                            <CardTestimonial
                                desc={slide.description}
                                name={slide.name}
                                email={slide.email}
                            />
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation Buttons */}
                <div >
                    <ArrowCircleRight size={52} className='swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-slate-400' />
                </div>
                <div >
                    <ArrowCircleLeft size={52} className='swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-400' />
                </div>
            </Swiper>
        </div>
    );
};

export default SwipeTestimonial;
