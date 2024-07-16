import emptyCart from "../../assets/images/empty-cart.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GET_CART } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hook";
import { ICart } from "@/types";
import { Link } from "react-router-dom";
import { CashPayment } from "./CashCheckout";

export default function Checkout() {
  const { totalItems, totalPrice, cartItems } = useAppSelector(GET_CART);

  return (
    <section className="md:p-14 p-8 font-Untitled-Sans">
      {cartItems.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Checkout</CardTitle>
            <CardDescription>
              Choose a payment method and fill up the necessary information.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-6">
            <PaymentTabs
              totalPrice={totalPrice}
              totalOrderedQuantity={totalItems}
              items={cartItems}
            ></PaymentTabs>
            <Card className="p-4 h-fit">
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
                      <h5 className="font-medium text-ellipsis text-xl">
                        {item.product.title}
                      </h5>
                      <span className="text-zinc-500 text-sm">
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
          </CardContent>
        </Card>
      )}
      {cartItems.length === 0 && (
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
      )}
    </section>
  );
}

const PaymentTabs = ({
  totalPrice,
  totalOrderedQuantity,
  items,
}: {
  totalPrice: number;
  totalOrderedQuantity: number;
  items: ICart[];
}) => {
  return (
    <Tabs defaultValue="cash" className="col-span-1">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="cash">Cash on Delivery</TabsTrigger>
        <TabsTrigger value="stripe">Stripe</TabsTrigger>
      </TabsList>
      <TabsContent value="cash">
        <CashPayment
          totalPrice={totalPrice}
          totalOrderedQuantity={totalOrderedQuantity}
          cartItems={items}
        ></CashPayment>
      </TabsContent>
      <TabsContent value="stripe">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="current">Current password</label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <label htmlFor="new">New password</label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

