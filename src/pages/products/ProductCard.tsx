import { IoChevronForward, IoStar } from "react-icons/io5";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IProduct } from "../../types";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { DollarSignIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

const ProductCard = ({ data, mini }: { data: IProduct; mini?: boolean }) => {
  const [quantity, setQuantity] = useState(1);
  const { title, image, brand, rating, price, availableQuantity, _id } = data;
  return mini ? (
    <Card className="text-left font-Untitled-Sans border-[1px] border-zinc-400 hover:scale-105 p-0 transition-all">
      <CardContent className="flex flex-col items-start justify-start h-full realtive p-4">
        <div className="flex items-center justify-start h-full realtive">
          <Link to={`/products/${_id}`} className="h-28 overflow-hidden">
            <img
              src={image}
              alt=""
              className="object-cover w-full h-full rounded-l-sm"
            />
          </Link>
          <Link to={`/products/${_id}`}>
            <h2 className="cursor-pointer font-semibold text-zinc-700 ml-2">
              {title}
            </h2>
          </Link>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <span className="font-[500] text-zinc-500 mt-2">{brand}</span>

            <div className="mt-2 flex gap-2 font-[500]">
              {rating}
              <FaStar className="text-yellow-400" />
            </div>
          </div>

          <div className="flex mt-2 justify-between  w-full">
            <div className="flex text-zinc-800 font-[500]">
              <DollarSignIcon></DollarSignIcon>
              <span className="text-xl">{price}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 font-[500]">
              <span>In Stock</span>
              <span className="text-xl">{availableQuantity}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : (
    <Card
      data-aos="zoom-out"
      data-aos-animation-duration="10000"
      data-aos-once="false"
      data-aos-delay="100"
      className="text-left h-[450px] font-Untitled-Sans md:h-96 border-[1px] border-zinc-400 hover:scale-105"
    >
      <CardContent className="flex flex-col items-start md:items-center md:justify-center justify-start p-6 h-full realtive">
        <Link
          to={`/products/${_id}`}
          className="absolute right-4 text-xl  text-zinc-500 top-4 bg-[#fefefe] rounded-full border-[1px] border-zinc-200 p-[0.5rem]"
        >
          <IoChevronForward></IoChevronForward>
        </Link>
        <Link to={`/products/${_id}`} className="mb-2 h-28 overflow-hidden">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </Link>

        <div className="flex flex-col items-start ">
          <Link to={`/products/${_id}`}>
            <CardTitle className="cursor-pointer md:text-2xl text-xl">
              {title}
            </CardTitle>
          </Link>
          <span className="font-[500] text-zinc-500 mt-2">{brand}</span>
          <div className="mt-2 flex items-center gap-2 font-[500]">
            {rating} <Rate allowHalf disabled defaultValue={rating} />
          </div>
          <div className="flex mt-2 justify-between w-full">
            <div className="flex text-zinc-800 font-[500]">
              <DollarSignIcon></DollarSignIcon>
              <span className="text-xl">{price}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 font-[500]">
              <span>In Stock</span>
              <span className="text-xl">{availableQuantity}</span>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-2 gap-4 mt-2 h-10">
            <div className="grid grid-cols-3 font-semibold border-2 overflow-visible md:overflow-hidden rounded-md border-zinc-900 items-center">
              <Button
                className="rounded-none font-[500] bg-transparent text-zinc-900 text-[1.5rem] border-r-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition:all"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
              <Button
                className="rounded-none h-full"
                variant={"ghost"}
                disabled
              >
                {quantity}
              </Button>
              <Button
                className="rounded-none font-[500] bg-transparent text-zinc-900 text-[1.5rem] border-l-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition:all"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </Button>
            </div>
            <Button className="w-full">Add To Cart</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
