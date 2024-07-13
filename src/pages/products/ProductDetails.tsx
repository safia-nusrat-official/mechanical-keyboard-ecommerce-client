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
import { Card, Rate } from "antd";
import { useParams } from "react-router-dom";

import { DollarSignIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft } from "react-icons/bs";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetSingleProductQuery(id as string);

  const { data: otherProducts } = useGetProductsQuery({
    limit: 5,
    page: 1,
  });
  const {
    _id,
    availableQuantity,
    brand,
    description,
    image,
    price,
    rating,
    title,
  } = (isSuccess && data.data) as IProduct;
  const [quantity, setQuantity] = useState(1);
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
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            className="-z-[2]"
          >
            {productImages.length &&
              productImages.map((productImage) => (
                <SwiperSlide>
                  <img src={productImage} alt="" className="" />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="custom-swiper-button-next absolute bottom-1/2 -translate-y-1/2 left-0 h-12 w-12 bg-[#cccccc4d] backdrop-blur-sm border-[1px] border-zinc-200 text-[#606060] rounded-full p-2 text-3xl z-[3]">
            <BsChevronLeft></BsChevronLeft>
          </div>
          <div className="custom-swiper-button-prev absolute bottom-1/2 -translate-y-1/2 right-0 h-12 w-12 bg-[#cccccc4d] backdrop-blur-sm border-[1px] border-zinc-200 text-zinc-50 rounded-full p-2 text-2xl  z-[3]">
            <IoChevronForwardOutline></IoChevronForwardOutline>
          </div>
        </div>

        <Card className="md:h-auto h-[400px]">
          <h1 className="text-zinc-800 font-[700] font-Untitled-Sans text-4xl">
            {title}
          </h1>
          <span className="font-[500] text-zinc-500 mt-2">{brand}</span>
          <div className="mt-2 flex items-center gap-2 font-[500]">
            {rating}{" "}
            <Rate allowHalf disabled defaultValue={rating > 5 ? 5 : rating} />
          </div>
          <div className="flex mb-4 justify-between  w-full">
            <div className="flex items-center gap-2 text-zinc-500 font-[500]">
              <span>In Stock</span>
              <span className="text-xl">{availableQuantity}</span>
            </div>
            <div className="flex items-center text-zinc-800 font-[500]">
              <DollarSignIcon></DollarSignIcon>
              <span className="text-xl">{price}</span>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 mt-2 h-10">
            <div className="grid w-full h-[2.5rem] grid-cols-3 font-semibold border-2 rounded-md border-zinc-900 items-center md:overflow-hidden">
              <Button
                className="rounded-none relative -top-[2px] font-[500] text-zinc-900 text-[1.5rem] border-r-2 bg-transparent border-zinc-900 hover:bg-zinc-900 hover:text-white transition:all"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
              <Button
                className="rounded-none relative bg-transparent text-zinc-800 -top-[1.5px] text-[20px]"
                disabled
              >
                {quantity}
              </Button>
              <Button
                className="rounded-none -top-[1.5px] relative flex items-center justify-center font-[500] text-zinc-900 bg-transparent text-[2.5rem] border-l-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition:all"
                onClick={() => setQuantity(quantity - 1)}
              >
                <span className="relative -top-[5px] -left-[2px]">-</span>
              </Button>
            </div>
            <Button className="col-span-2">Add To Cart</Button>
          </div>
        </Card>

        <Card className="font-Untitled-Sans font-medium">{description}</Card>

        <div className="relative">
          <h4 className="mb-2 text-xl font-semibold">You May Also Like</h4>
          <div className="relative">
            <div className="grid gap-4 md:grid-cols-2">
              {otherProducts?.data?.length &&
                otherProducts?.data
                  ?.slice(0, 2)
                  .map((product: IProduct) => (
                    <ProductCard mini={true} data={product}></ProductCard>
                  ))}
            </div>
            <div className="absolute md:h-full md:top-0 left-0 md:left-auto md:right-0 md:bg-gradient-to-l to-transparent from-white md:w-1/2 w-full h-1/2 bottom-0 bg-gradient-to-t"></div>
          </div>
          <Button className="shadow-2xl md:w-fit absolute hover:bg-blue-500 bg-blue-400 md:right-0 md:top-1/2 md:left-auto bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0">
            See More <IoChevronForwardOutline />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
