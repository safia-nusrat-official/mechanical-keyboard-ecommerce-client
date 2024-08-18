import { IoChevronForward } from "react-icons/io5";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ICart, IProduct } from "../../types";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { DollarSignIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useAppDispatch } from "@/redux/hook";
import { ADD_TO_CART } from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";

const ProductCard = ({
  data,
  variant = "md",
}: {
  data: IProduct;
  variant?: "lg" | "md" | "sm";
}) => {
  const [orderedQuantity, setQuantity] = useState(1);
  const { title, images, brand, rating, price, availableQuantity, _id } = data;
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    if (availableQuantity === 0) {
      toast.error("Product is out of stock!");
      return;
    } else if (orderedQuantity > availableQuantity) {
      toast.error("Insufficient Quantity");
      return;
    } else if (!orderedQuantity) {
      toast.error("0 Quantity Selected");
      return;
    } else {
      const cartItem: ICart = {
        product: data,
        orderedQuantity: orderedQuantity,
      };
      dispatch(ADD_TO_CART(cartItem));
      toast.success("Item added to cart successfully!");
    }
  };
  const cardThumbNail =
    images?.length > 0
      ? images[0]
      : "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png";

  return variant === "md" ? (
    // normal card size for products page
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
        <Link
          to={`/products/${_id}`}
          className="mb-2 h-28 bg-red-400 relative overflow-hidden"
        >
          <img
            src={cardThumbNail}
            alt=""
            className="object-cover w-full h-full"
          />
        </Link>

        <div className="flex flex-col items-start ">
          <Link to={`/products/${_id}`}>
            <CardTitle className="cursor-pointer whitespace-no-wrap text-ellipsis overflow-hidden md:text-2xl text-xl">
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
            {availableQuantity > 0 && (
              <div className="flex items-center gap-2 text-zinc-500 font-[500]">
                <span>In Stock</span>
                <span className="text-xl">{availableQuantity}</span>
              </div>
            )}
            {availableQuantity === 0 && (
              <div className="flex items-center gap-2 text-zinc-500 font-[500]">
                <span>Out of Stock</span>
              </div>
            )}
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-2 gap-4 mt-2 h-10">
            <div className="grid grid-cols-3 font-semibold border-2 overflow-visible md:overflow-hidden rounded-md border-zinc-900 items-center">
              <Button
                className="rounded-none font-[500] bg-transparent text-zinc-900 text-[1.5rem] border-r-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition:all"
                onClick={() => setQuantity(orderedQuantity + 1)}
              >
                +
              </Button>
              <Button
                className="rounded-none h-full"
                variant={"ghost"}
                disabled
              >
                {orderedQuantity}
              </Button>
              <Button
                className="rounded-none font-[500] bg-transparent text-zinc-900 text-[1.5rem] border-l-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition:all"
                onClick={() =>
                  orderedQuantity > 0 && setQuantity(orderedQuantity - 1)
                }
              >
                -
              </Button>
            </div>
            <Button className="w-full" onClick={handleAddToCart}>
              Add To Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : variant === "lg" ? (
    // large card size for product details page
    <Card className="md:h-auto p-4 md:p-6 h-[400px]">
      <h1 className="text-zinc-800 font-[700] font-Untitled-Sans text-4xl">
        {title}
      </h1>
      <span className="font-[500] text-zinc-500 mt-2 mb-6">{brand}</span>
      <div className="mt-2 flex items-center gap-2 font-[500]">
        {rating}
        <Rate allowHalf disabled defaultValue={rating > 5 ? 5 : rating} />
      </div>
      <div className="flex mb-4 justify-between  w-full">
        {availableQuantity > 0 && (
          <div className="flex items-center gap-2 text-zinc-500 font-[500]">
            <span>In Stock</span>
            <span className="text-xl">{availableQuantity}</span>
          </div>
        )}
        {availableQuantity === 0 && (
          <div className="flex items-center gap-2 text-zinc-500 font-[500]">
            <span>Out of Stock</span>
          </div>
        )}
        <div className="flex items-center text-zinc-800 font-[500]">
          <DollarSignIcon></DollarSignIcon>
          <span className="text-xl">{price}</span>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 mt-2 h-10">
        <div className="grid w-full h-[2.5rem] grid-cols-3 font-semibold border-2 rounded-md border-zinc-900 items-center md:overflow-hidden">
          <Button
            className="rounded-none relative -top-[2px] font-[500] text-zinc-900 text-[1.5rem] border-r-2 bg-transparent border-zinc-900 hover:bg-zinc-900 hover:text-white transition:all"
            onClick={() => setQuantity(orderedQuantity + 1)}
          >
            +
          </Button>
          <Button
            className="rounded-none relative bg-transparent text-zinc-800 -top-[1.5px] text-[20px]"
            disabled
          >
            {orderedQuantity}
          </Button>
          <Button
            className="rounded-none -top-[1.5px] relative flex items-center justify-center font-[500] text-zinc-900 bg-transparent text-[2.5rem] border-l-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition:all"
            onClick={() =>
              orderedQuantity > 0 && setQuantity(orderedQuantity - 1)
            }
          >
            <span className="relative -top-[5px] -left-[2px]">-</span>
          </Button>
        </div>
        <Button className="col-span-2" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </div>
    </Card>
  ) : (
    // small card for product recommendations
    <Card className="text-left font-Untitled-Sans border-[1px] border-zinc-400 hover:scale-105 p-0 transition-all">
      <CardContent className="flex flex-col items-start justify-start h-full realtive p-4">
        <div className="flex items-start justify-start h-full realtive">
          <Link to={`/products/${_id}`} className="h-28 overflow-hidden">
            <img
              src={cardThumbNail}
              alt=""
              className="object-cover w-full h-full rounded-l-sm"
            />
          </Link>
          <Link className="w-1/2" to={`/products/${_id}`}>
            <div className="flex flex-col  ml-2 justify-between w-full">
              <h2 className="cursor-pointer text-lg text-ellipsis overflow-hidden font-semibold text-zinc-700">
                {title}
              </h2>
              <span className="font-[500] text-zinc-500">{brand}</span>

              <div className="mt-2 flex items-center gap-2 font-[500]">
                {rating}
                <FaStar className="text-yellow-400" />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex text-zinc-800 font-[500]">
            <DollarSignIcon></DollarSignIcon>
            <span className="text-xl">{price}</span>
          </div>
          {availableQuantity > 0 && (
            <div className="flex items-center gap-2 text-zinc-500 font-[500]">
              <span>In Stock</span>
              <span className="text-xl">{availableQuantity}</span>
            </div>
          )}
          {availableQuantity === 0 && (
            <div className="flex items-center gap-2 text-zinc-500 font-[500]">
              <span>Out of Stock</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
