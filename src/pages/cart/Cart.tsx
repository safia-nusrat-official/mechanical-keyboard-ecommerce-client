import { BsCurrencyDollar } from "react-icons/bs";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Table, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { getCartItems } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hook";

import { ICart, IProduct } from "@/types";
import { Rate } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useAppSelector(getCartItems);
  const cartItems: ICart[] = cart.items.map((item) => item);

  return (
    <section className="md:p-14 p-8 font-Untitled-Sans">
      {/* <DataTableDemo></DataTableDemo> */}
      {cartItems?.length && (
        <Table>
          <TableHeader className="font-semibold text-zinc-500">
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell></TableCell>
              <TableCell>Order Quantity</TableCell>
              <TableCell>Per Product Price</TableCell>
              <TableCell>Action Controls</TableCell>
            </TableRow>
          </TableHeader>
          {cartItems.map((cartItem) => (
            <RenderRow data={cartItem}></RenderRow>
          ))}
        </Table>
      )}
      {cartItems?.length === 0 && (
        <SectionHeading
          text="No items added to cart yet."
          mode="dark"
        ></SectionHeading>
      )}
    </section>
  );
};

const RenderRow = ({ data }: { data: ICart }) => {
  const { orderedQuantity: initialQuantity, product, id } = data;
  const { image, title, price, _id, rating, brand } = product;
  const [orderedQuantity, setQuantity] = useState(initialQuantity);
  return (
    <TableRow className="">
      <TableCell>
        <Link to={`/products/${_id}`} className="">
          <img src={image} alt="" className="w-28 hover:scale-[1.25] transition-all" />
        </Link>
      </TableCell>
      <TableCell className="cursor-pointer">
        <Link to={`/products/${_id}`}>
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
            onClick={() => setQuantity(orderedQuantity + 1)}
          >
            +
          </Button>
          <Button className="rounded-none h-full" variant={"ghost"} disabled>
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
      </TableCell>
      <TableCell className="text-center  text-zinc-500">
        <div className=" flex justify-center">
          <BsCurrencyDollar className="relative top-[1.5px]"></BsCurrencyDollar>
          <span className="font-[500]">{price}</span>
        </div>
      </TableCell>
      <TableCell>Action Controls</TableCell>
    </TableRow>
  );
};
export default Cart;
