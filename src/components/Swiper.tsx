import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { testimonial } from "./Databse";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiTwotoneStar } from "react-icons/ai";
import { EffectCoverflow, Navigation } from "swiper";

interface swiperType {
  id: number;
  desc: string;
  src: string;
  alt: string;
  name: string;
  city: string;
}

export default function App() {
  return (
    // <div c>
    <div className="comp1">
      <div className=" bg-[#F9F9F9]">
        <h2 className="font-bold text-center text-3xl pt-9">
          Don&apos;t take our word for it
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          // centerInsufficientSlides={true}
          slidesPerView={"auto"}
          navigation={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Navigation]}
          className="swiper"
        >
          {testimonial.map((elem: swiperType) => (
            <SwiperSlide key={elem.id}>
              <div className="flex justify-center space-x-1">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </div>
              <h1>{elem.desc}</h1>
              <div className=" w-14 mx-auto">
                <img src={elem.src} alt={elem.alt} className=" rounded-full" />
              </div>
              <h1 className=" text-lg font-bold">{elem.name}</h1>
              <h1>{elem.city}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    // </div>
  );
}
