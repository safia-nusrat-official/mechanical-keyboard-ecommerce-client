import { Dialog, DialogContent } from "@/components/ui/dialog";
import emptyCart from "../../assets/images/empty-cart.png";
import moment from "moment";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CLEAR_CART, GET_CART } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ICart, IOrder, TOrderedProduct } from "@/types";
import { Link, useNavigate } from "react-router-dom";
import { UserDetailsForm } from "./UserDetailsForm";
import StripePayment from "./StripePayment";
import { FormProvider, useForm } from "react-hook-form";
import { usePostOrderMutation } from "@/redux/api/orderApi";
import { toast } from "sonner";
import { ReactNode, useEffect, useState } from "react";

export default function Checkout() {
  const { totalItems, totalPrice, cartItems } = useAppSelector(GET_CART);
  const methods = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "stripe">("cash");
  const [postOrder] = usePostOrderMutation();
  const [stripeCheckout, setStripeCheckout] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<IOrder | null>(null);

  const handlePlaceOrder = async (data: any) => {
    try {
      const order: IOrder = {
        ...data,
        date: moment().format("DD-MM-YYYY"),
        status: "pending",
        paymentMethod,
        totalPrice: Number(totalPrice.toFixed(2)),
        totalOrderedQuantity: Number(totalItems),
        orderedProducts: cartItems.map((item) => ({
          productId: item.product._id,
          orderedQuantity: item.orderedQuantity,
        })) as TOrderedProduct[],
      };
      setPaymentDetails(order);

      if (paymentMethod === "cash") {
        const orderPlaced = await postOrder(order);
        console.log(orderPlaced);
        if (orderPlaced?.data) {
          toast.success("Order placed successfully!");
          dispatch(CLEAR_CART());
          setTimeout(() => navigate("/check-out/success"), 500);
        } else if (orderPlaced?.error) {
          // @ts-ignore
          toast.error(orderPlaced?.error?.data?.message);
        }
      } else if (paymentMethod === "stripe") {
        setStripeCheckout(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const [stripePayment, setStripePayment] = useState<ReactNode>();
  useEffect(() => {
    if (stripeCheckout && paymentDetails) {
      setStripePayment(
        <StripePayment
          order={paymentDetails}
          setStripeCheckout={setStripeCheckout}
        ></StripePayment>
      );
    }
  }, [stripeCheckout, paymentDetails]);

  return (
    <section className="md:p-14 p-0 font-Untitled-Sans">
      {cartItems.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Checkout</CardTitle>
            <CardDescription>
              Choose a payment method and fill up the necessary information.
            </CardDescription>
          </CardHeader>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handlePlaceOrder)}>
              <CardContent className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <CartDetails
                  cartItems={cartItems}
                  totalItems={totalItems}
                  totalPrice={totalPrice}
                ></CartDetails>
                <div className="flex gap-4 flex-col">
                  <UserDetailsForm
                    setPaymentMethod={setPaymentMethod}
                  ></UserDetailsForm>
                  <Dialog
                    open={stripeCheckout}
                    onOpenChange={setStripeCheckout}
                  >
                    <DialogContent className="md:max-w-1/3">
                      {stripePayment}
                    </DialogContent>
                  </Dialog>
                  <Button
                    disabled={stripeCheckout}
                    type="submit"
                    className="w-full"
                  >
                    Place Order
                  </Button>
                </div>
              </CardContent>
            </form>
          </FormProvider>
        </Card>
      )}
      {cartItems?.length === 0 && <EmptyCart></EmptyCart>}
    </section>
  );
}

const EmptyCart = () => {
  return (
    <div className="text-custom-primary gap-6 flex items-center">
      <img src={emptyCart} alt="" />
      <div>
        <h2 className="text-4xl mb-2 font-semibold">
          Uh Oh, Your cart looks empty!
        </h2>
        <span className="text-zinc-500 font-[400] mb-8 block">
          How about you browse some products and add them to your cart. Then
          come to checkout them
        </span>
        <Link to="/products">
          <Button className="bg-custom-primary  font-Untitled-Sans">
            Browse Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

const CartDetails = ({
  cartItems,
  totalPrice,
  totalItems,
}: {
  cartItems: ICart[];
  totalPrice: number;
  totalItems: number;
}) => {
  return (
    <Card className="p-4 h-fit md:order-2 order-1">
      <CardTitle className="mb-1">Cart Items</CardTitle>
      <CardDescription className="mb-8">
        Products currently added in your cart
      </CardDescription>

      {cartItems?.length > 0 &&
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 border-b-[1px] border-zinc-300 mb-4 pb-4 justify-between"
          >
            <img
              src={item.product.images[0]}
              className="w-12 h-12 object-cover"
            />
            <div>
              <h5 className="font-medium text-ellipsis text-sm md:text-xl">
                {item.product.title}
              </h5>
              <span className="text-zinc-500 md:text-sm text-xs">
                $ {item.product.price}
              </span>
            </div>
            <h4 className="font-medium text-zinc-500 whitespace-nowrap text-xl">
              X {item.orderedQuantity}
            </h4>
          </div>
        ))}
      <div className="grid md:grid-cols-2">
        <div>
          <CardDescription>Total Price</CardDescription>
          <CardTitle className="text-4xl mt-2">
            ${totalPrice.toFixed(2)}
          </CardTitle>
        </div>
        <div>
          <CardDescription>Total Item Quantity</CardDescription>
          <CardTitle className="text-4xl mt-2">{totalItems}</CardTitle>
        </div>
      </div>
    </Card>
  );
};
