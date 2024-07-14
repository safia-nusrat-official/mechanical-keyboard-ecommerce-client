import "swiper/css";
import "./products.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import {
  useGetProductsQuery,
  useGetSingleProductQuery,
} from "@/redux/api/productApi";
import { IProduct } from "@/types";
import { Card } from "antd";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id)
  const { data, isSuccess } = useGetSingleProductQuery(id as string);

  const { data: otherProducts } = useGetProductsQuery({
    limit: 5,
    page: 1,
  });
  const product = (isSuccess && data.data) as IProduct;
  const { image, description } = product;
  const productImages: string[] = [image];

  return (
    <section className="md:p-14 p-6 font-Untitled-Sans">
      <div className="md:grid flex flex-col gap-6 md:grid-cols-2">
        {/* will be a swiper */}
        <div className="relative">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            pagination={true}
            modules={[Navigation, Pagination]}
            navigation={true}
            className="product-swiper"
          >
            {productImages.length &&
              productImages.map((productImage) => (
                <SwiperSlide>
                  <img src={productImage} alt="" className="bg-red-400" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <ProductCard data={product} variant="lg"></ProductCard>
        <Card className="font-Untitled-Sans font-medium">{description}</Card>

        <div className="relative">
          <h4 className="mb-2 text-xl font-semibold">You May Also Like</h4>
          <div className="relative">
            <div className="grid gap-4 md:grid-cols-2">
              {otherProducts?.data?.length &&
                otherProducts?.data
                  ?.slice(0, 2)
                  .map((product: IProduct) => (
                    <ProductCard variant={"sm"} data={product}></ProductCard>
                  ))}
            </div>
            <div className="absolute md:h-full md:top-0 left-0 md:left-auto md:right-0 md:bg-gradient-to-l to-transparent from-white md:w-1/2 w-full h-1/2 bottom-0 bg-gradient-to-t"></div>
          </div>
          <NavLink to="/products">
            <Button className="shadow-2xl md:w-fit absolute hover:bg-blue-600 bg-blue-500 md:right-5 md:top-1/2 z-[3] md:left-auto bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0">
              See More <IoChevronForwardOutline />
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
