import SectionHeading from "@/components/shared/SectionHeading";
import reviews from "../../../../public/reviews.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Rate } from "antd";
import { useEffect, useState } from "react";

const ReviewsSection = () => {
    const [slidesPerView, setSlidesPerView] = useState(3)
    useEffect(()=>{
        function handleResize(){
            if(window.innerWidth > 320){
                setSlidesPerView(3)
            }else{
                setSlidesPerView(1)
            }
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])
  return (
    <section className="md:p-20 p-8">
      <SectionHeading
        text={"What Our Customers Say"}
        mode="dark"
        hideInSm="both"
        center={true}
      ></SectionHeading>
      <p className="text-zinc-700 font-[500] max-w-[32rem] mx-auto mb-8 text-center">Read genuine feedback from our satisfied customers who found their ideal mechanical keyboards and exceptional service with us.</p>
      <Swiper
        spaceBetween={24}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log("slide change")}
        pagination={true}
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={true}
        className="w-full px-10"
      >
        {reviews.length &&
          reviews.map((reviews, index) => (
            <SwiperSlide>
              <div className="flex text-center flex-col items-center border-[1px] border-zinc-300 md:h-[23rem] rounded-md p-4 mb-16 shadow-sm">
                <img src={reviews.image} alt="" className="w-16 rounded-full h-16 aspect-square object-cover object-center"/>
                <span  className="font-[600]">{reviews.name}</span>
                <p className="text-zinc-500 mb-6">{reviews.email}</p>
                <Rate className="my-2" disabled defaultValue={reviews.rating} allowHalf allowClear></Rate>
                <h4 className="font-[600] mt-4">{reviews.title}</h4>
                <p className="text-zinc-500 mb-6">{reviews.description}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default ReviewsSection;
