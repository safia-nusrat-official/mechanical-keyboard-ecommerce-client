import "./featuredBrands.css";
import brands from "../../../../public/brands.json";
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
      {/* <div className="scrolling-text overflow-hidden flex whitespace-nowrap">
        <div className="text">
          {brands?.length &&
            brands
              .slice(0, 5)
              .map((brand) => (
                <img src={brand.logo} alt="" />
              ))}
        </div>
      </div> */}

      <div className="slider">
        <div className="slide-track">
          {brands?.length &&
            brands.map((brand) => (
              <div className="slide">
                <img
                  className="logo min-h-[150px] min-w-[400px] object-fill"
                  src={brand.logo}
                  alt=""
                />
              </div>
            ))}
          {brands?.length &&
            brands.map((brand) => (
              <div className="slide">
                <img
                  className="logo min-h-[50px] min-w-[75px] md:min-h-[150px] md:min-w-[400px] object-fill"
                  src={brand.logo}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
      <Divider className="bg-zinc-300 mt-8"></Divider>
    </section>
  );
};

export default FeaturedBrandsSection;
