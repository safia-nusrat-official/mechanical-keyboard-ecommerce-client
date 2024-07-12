import { useGetProductsQuery } from "../../../redux/api/productApi";
import { IProduct } from "../../../types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./featuredProducts.css";

import sectionBg from "../../../assets/images/featuredProductsSectionBg.jpg";
import SectionHeading from "@/components/shared/SectionHeading";
import ProductCard from "../../products/ProductCard";
import CustomButton from "@/components/shared/CustomButton";
import { Link } from "react-router-dom";

const FeaturedProductsSection = () => {
  const { data, isSuccess } = useGetProductsQuery(
    "limit=6&page=1&fields=-description"
  );
  const products: IProduct[] = isSuccess && data.data;
  return (
    <section className="overflow:hidden bg-red-400  h-[2390px] md:h-[1000px] relative">
      <div className="section-bg-image h-full relative overflow:hidden ">
        <img src={sectionBg} alt="" className="w-full h-full" />
      </div>
      <div className="section-contents w-full text-center absolute p-8 md:p-20 top-1">
        <SectionHeading
          text={"Top Picks for Enthusiasts"}
          mode="light"
          hideInSm={false}
          animateFrom="right"
        ></SectionHeading>
        <p
        data-aos="fade-right"
        data-aos-delay="200"
        className="font-[500] text-white text-lg mb-10">
          Explore our top-selling keyboards that customers love.
        </p>
        {/* <Swiper
          spaceBetween={14}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          pagination={true}
          modules={[Navigation, Pagination]}
          navigation={true}
          className="w-full px-10"
        >
          {products.length &&
            products.map((product, index) => (
              <SwiperSlide
                key={product._id}
                // className={index === 0 ? "ml-14" : ""}
              >
                <ProductCard data={product}></ProductCard>
              </SwiperSlide>
            ))}
        </Swiper> */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {products.length &&
            products.map((product) => (
              <ProductCard data={product} key={product._id}></ProductCard>
            ))}
        </div>
        <div className="overlay absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-custom-primary to-transparent"></div>
        <Link to="/products">
          <CustomButton text={"Browse All Products"}></CustomButton>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
