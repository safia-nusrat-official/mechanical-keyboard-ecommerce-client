import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IProduct } from "../../types";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { DollarSignIcon } from "lucide-react";

const ProductCard = ({ data }: { data: IProduct }) => {
  const { title, image, brand, rating, price, availableQuantity, _id } = data;
  return (
    <Card
      data-aos="zoom-out"
      data-aos-animation-duration="10000"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      data-aos-delay="100"
      className="text-left h-80 border-[1px] border-zinc-400 hover:bg-zinc-100 hover:scale-[1.025] transition-all"
    >
      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
        <Link to={`/products/${_id}`} className="mb-2 h-28 overflow-hidden">
          <img src={image} alt="" className="object-contain w-full h-full" />
        </Link>
        <div className="flex flex-col items-start mt-6 ">
          <Link to={`/products/${_id}`}>
            <CardTitle className="cursor-pointer">{title}</CardTitle>
          </Link>
          <span className="font-[500] text-zinc-500 mt-2">{brand}</span>
          <div className="mt-2 flex items-center gap-2 font-[500]">
            {rating} <Rate allowHalf disabled defaultValue={rating} />
          </div>
          <div className="flex mt-2 text-zinc-800 font-[500]">
            <DollarSignIcon></DollarSignIcon>
            <span className="text-xl">{price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
