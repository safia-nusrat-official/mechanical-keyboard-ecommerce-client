import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Table, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { GET_CART } from "@/redux/features/cart/cartSlice";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { IoChevronForwardOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import { useAppSelector } from "@/redux/hook";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalPrice, totalItems } = useAppSelector(GET_CART);

  return (
    <section className="md:p-14 relative p-8 font-Untitled-Sans">
      {/* <DataTableDemo></DataTableDemo> */}
      
      {cartItems.length > 0 && (
        <div className="">
          <Card className="md:hidden block">
            <CardHeader className="pb-2">
              <CardDescription>Total Price</CardDescription>
              <CardTitle className="text-4xl">
                ${totalPrice.toFixed(2)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                Total {totalItems} items in cart
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={
                  cartItems.filter(
                    (item) => item.product.availableQuantity === 0
                  ).length > 0
                }
              >
                <Link to={`/check-out`}>Proceed to Checkout</Link>

                <IoChevronForwardOutline></IoChevronForwardOutline>
              </Button>
            </CardFooter>
          </Card>

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
              <CartItem key={cartItem.id} data={cartItem}></CartItem>
            ))}
          </Table>

          <Card className="fixed md:block hidden md:bottom-7 md:right-7 shadow-2xl">
            <CardHeader className="pb-2">
              <CardDescription>Total Price</CardDescription>
              <CardTitle className="text-4xl">
                ${totalPrice.toFixed(2)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                Total {totalItems} items in cart
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={
                  cartItems.filter(
                    (item) => item.product.availableQuantity === 0
                  ).length > 0
                }
              >
                <Link to={`/check-out`}>Proceed to Checkout</Link>

                <IoChevronForwardOutline></IoChevronForwardOutline>
              </Button>
            </CardFooter>
          </Card>
        </div>
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

export default Cart;
