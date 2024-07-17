import { useAppDispatch } from "@/redux/hook";
import { Button } from "@/components/ui/button";
import { ICart } from "@/types";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import {
  INCREASE_QUANTITY,
  REDUCE_QUANTITY,
  REMOVE_FROM_CART,
} from "@/redux/features/cart/cartSlice";
import { TableCell, TableRow } from "@/components/ui/table";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const CartItem = ({ data: cart }: { data: ICart }) => {
  const { orderedQuantity, product, id: cartId } = cart;
  const {
    images,
    title,
    price,
    _id: productId,
    rating,
    brand,
  } = product;
  const dispatch = useAppDispatch();
  return (
    <TableRow className="">
      <TableCell>
        <Link to={`/products/${productId}`} className="">
          <img
            src={images[0]}
            alt=""
            className="w-28 hover:scale-[1.25] transition-all"
          />
        </Link>
      </TableCell>
      <TableCell className="cursor-pointer">
        <Link to={`/products/${productId}`}>
          <h3 className="font-[600] text-xl text-zinc-800 mt-2">{title}</h3>
          <span className="font-[500] text-zinc-500 mt-2">{brand}</span>
          <div className="mt-2 flex items-center gap-2 font-[500]">
            {rating} <Rate allowHalf disabled defaultValue={rating} />
          </div>
        </Link>
      </TableCell>
      <TableCell className="text-center">
        <div className="grid grid-cols-3 font-semibold border-2 overflow-visible md:overflow-hidden rounded-md border-zinc-900 items-center">
          <Button
            className="rounded-none font-[500] bg-transparent text-zinc-900 text-[1.5rem] border-r-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition:all"
            onClick={() =>
              dispatch(INCREASE_QUANTITY({ cartId: cartId as string }))
            }
          >
            +
          </Button>
          <Button className="rounded-none h-full" variant={"ghost"} disabled>
            {orderedQuantity}
          </Button>
          <Button
            className="rounded-none font-[500] bg-transparent text-zinc-900 text-[1.5rem] border-l-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition:all"
            onClick={() =>
              dispatch(REDUCE_QUANTITY({ cartId: cartId as string }))
            }
          >
            -
          </Button>
        </div>
      </TableCell>
      <TableCell className="text-center  text-zinc-500">
        <div className=" flex justify-center">
          <BsCurrencyDollar className="relative top-[1.5px]"></BsCurrencyDollar>
          <span className="font-[500]">{price}</span>
        </div>
      </TableCell>
      <TableCell>
        <Button
          onClick={() =>
            dispatch(REMOVE_FROM_CART({ cartId: cartId as string }))
          }
          variant={"secondary"}
          className="text-xl hover:scale-125 transition-transform text-red-600"
        >
          <IoClose></IoClose>
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
