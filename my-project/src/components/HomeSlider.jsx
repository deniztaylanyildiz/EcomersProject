import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeSlider = () => {
  const slides = [
    { id: 1, text: "NEW COLLECTION", title: "Summer Sale", img: "https://picsum.photos/1920/900?random=1" },
    { id: 2, text: "BEST SELLERS", title: "Winter Essentials", img: "https://picsum.photos/1920/900?random=2" }
  ];

  return (
    <section className="w-full h-[600px] md:h-[900px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id} className="relative">
            <img src={slide.img} className="w-full h-full object-cover" alt={slide.title} />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center p-4">
              <h5 className="font-bold mb-4">{slide.text}</h5>
              <h1 className="text-4xl md:text-6xl font-bold mb-8">{slide.title}</h1>
              <button className="bg-[#23A6F0] px-10 py-4 rounded-md font-bold hover:bg-blue-600 transition-all">
                SHOP NOW
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSlider;