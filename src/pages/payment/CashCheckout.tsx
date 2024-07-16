import moment from "moment";
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
import { ICart, IOrder, TOrderedProduct } from "@/types";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usePostOrderMutation } from "@/redux/api/orderApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hook";
import { CLEAR_CART } from "@/redux/features/cart/cartSlice";


export const CashPayment = ({
    totalPrice,
    totalOrderedQuantity,
    cartItems,
  }: {
    totalPrice: number;
    totalOrderedQuantity: number;
    cartItems: ICart[];
  }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [postOrder] = usePostOrderMutation();
    const handlePlaceOrder = async (data: any) => {
      try {
        const order: IOrder = {
          ...data,
          date: moment().format("DD-MM-YYYY"),
          paymentMethod: "cash",
          status: "pending",
          totalPrice:Number(totalPrice.toFixed(2)),
          totalOrderedQuantity,
          orderedProducts: cartItems.map((item) => ({
            productId: item.product._id,
            orderedQuantity: item.orderedQuantity,
          })) as TOrderedProduct[],
        };
        console.log(order);
        const orderPlaced = await postOrder(order);
        console.log(orderPlaced);
        if (orderPlaced?.data) {
          toast.success("Order placed successfully!");
          dispatch(CLEAR_CART())
          setTimeout(()=>navigate("/checkout/successful"), 500)
        } else if (orderPlaced?.error) {
            // @ts-ignore
          toast.error(orderPlaced?.error?.data?.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <Card>
        <CardHeader>
          <CardTitle>You Information</CardTitle>
          <CardDescription>
            Provide your name, email, shipping address, phone
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(handlePlaceOrder)}>
          <CardContent className="grid md:grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="after:content-['*'] after:text-red-500 after:ml-0.5"
              >
                Name
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500">
                  {errors.name?.message as string}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="after:content-['*'] after:text-red-500 after:ml-0.5"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required." })}
              />{" "}
              {errors.email && (
                <span className="text-red-500">
                  {errors.email?.message as string}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="after:content-['*'] after:text-red-500 after:ml-0.5"
              >
                Phone
              </label>
              <Input
                id="phone"
                {...register("phone", { required: "Phone is required" })}
                placeholder="Enter your phone number"
              />{" "}
              {errors.phone && (
                <span className="text-red-500">
                  {errors.phone?.message as string}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="address"
                className="after:content-['*'] after:text-red-500 after:ml-0.5"
              >
                Address
              </label>
              <Input
                id="address"
                {...register("address", { required: "Address is required" })}
                placeholder="Enter your shipping address"
              />{" "}
              {errors.address && (
                <span className="text-red-500">
                  {errors.address?.message as string}
                </span>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Place Order
            </Button>
          </CardFooter>
        </form>
      </Card>
    );
  };
  