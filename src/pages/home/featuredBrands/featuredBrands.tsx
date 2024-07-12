import "./featuredBrands.css";
import brands from "../../../../public/brands.json";
import SectionHeading from "@/components/shared/SectionHeading";
import { Divider } from "antd";

const FeaturedBrandsSection = () => {
  return (
    <section className="md:p-20 mt-6 p-8 flex flex-col justify-center">
      {/* <Swiper
        spaceBetween={4}
        slidesPerView={6}
        autoplay={{
            delay:20,
            disableOnInteraction:true
        }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        className="w-full px-10 scrolling-text-container"
      >
        {brands?.length &&
          brands.map((brand) => (
            <SwiperSlide>
              <span className="cursor-pointer select-none">{brand?.name}</span>
            </SwiperSlide>
          ))} {brands?.length &&
          brands.map((brand) => (
            <SwiperSlide>
              <span className="cursor-pointer select-none scrolling-text">{brand?.name}</span>
            </SwiperSlide>
          ))}
      </Swiper> */}
      {/* <SectionHeading
        text={"Featured Brands"}
        mode="dark"
        center={true}
        hideInSm="both"
      ></SectionHeading> */}
      <div className="scrolling-text overflow-hidden flex whitespace-nowrap">
        <div className="text">
          {brands?.length &&
            brands.slice(0, 5).map((brand) => (
              <span className="cursor-pointer mr-20 font-semibold uppercase text-custom-primary text-4xl select-none">
                {brand?.name}
              </span>
            ))}
        </div>
        <div className="text">
          {brands?.length &&
            brands.slice(0, 5).map((brand) => (
              <span className="cursor-pointer mr-20 font-semibold uppercase text-custom-primary text-4xl select-none">
                {brand?.name}
              </span>
            ))}
        </div>
      </div>

      <div className="scrolling-text mt-6 w-1/2 self-center  overflow-hidden flex whitespace-nowrap">
        <div className="text">
          {brands?.length &&
            brands.slice(6,).map((brand) => (
              <span className="cursor-pointer mr-20 font-semibold uppercase text-custom-primary text-4xl select-none">
                {brand?.name}
              </span>
            ))}
        </div>
        <div className="text">
          {brands?.length &&
            brands.slice(6, ).map((brand) => (
              <span className="cursor-pointer mr-20 font-semibold uppercase text-custom-primary text-4xl select-none">
                {brand?.name}
              </span>
            ))}
        </div>
      </div>
      <Divider className="bg-zinc-300 mt-8"></Divider>
    </section>
  );
};

export default FeaturedBrandsSection;
