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
import { Card } from "@/components/ui/card";
import { Skeleton } from "antd";

const FeaturedProductsSection = () => {
  const { data, isSuccess, isLoading } = useGetProductsQuery({
    limit: 6,
    page: 1,
    fields: "-description",
  });
  const products: IProduct[] = isSuccess && data.data;
  return (
    <section className="overflow-hidden h-[3200px] md:h-[1240px] lg:h-[1165px] relative">
      <div className="section-bg-image h-full relative overflow-hidden ">
        <img src={sectionBg} alt="" className="w-full h-full object-left" />
      </div>
      <div className="section-contents w-full text-center absolute p-8 md:p-20 top-1">
        <SectionHeading
          text={"Top Picks for Enthusiasts"}
          mode="light"
          hideInSm="both"
          animateFrom="right"
        ></SectionHeading>
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="font-[500] text-white text-lg mb-10"
        >
          Explore our top-selling keyboards that customers love.
        </p>
        <div className="hidden md:grid-cols-2 md:grid lg:hidden gap-6">
          {products.length &&
            products.slice(0, 4).map((product) => (
              <ProductCard
                data={product}
                key={product._id}
                variant="md"
              ></ProductCard>
            ))}
          {isLoading &&
            Array(4).map(() => (
              <Card>
                <Skeleton active></Skeleton>
              </Card>
            ))}
        </div> 
        <div className="grid lg:grid-cols-3 md:hidden lg:grid grid-cols-1 gap-6">
          {products.length &&
            products.map((product) => (
              <ProductCard
                data={product}
                key={product._id}
                variant="md"
              ></ProductCard>
            ))}
          {isLoading &&
            Array(6).map(() => (
              <Card>
                <Skeleton active></Skeleton>
              </Card>
            ))}
        </div>

        <div className="overlay absolute bottom-0 left-0 w-full md:h-1/3 bg-gradient-to-t from-custom-primary to-transparent"></div>
        <Link to="/products">
          <CustomButton text={"Browse All Products"}></CustomButton>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
