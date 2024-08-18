import { FormEventHandler, useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import "./stripe.css";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { CLEAR_CART, GET_CART } from "@/redux/features/cart/cartSlice";
import { usePostOrderMutation } from "@/redux/api/orderApi";
import { IOrder } from "@/types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const StripeCheckoutForm = ({
  order,
  setStripeCheckout,
}: {
  order: IOrder;
  setStripeCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState(null);
  const elements = useElements();
  const { totalPrice } = useAppSelector(GET_CART);
  const [postOrder] = usePostOrderMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(
      `https://mechanical-keyboard-ecommerce-server.vercel.app/api/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ totalPrice: totalPrice.toFixed(2) }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log(err));
  }, [totalPrice]);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !clientSecret) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setErrorMessage(error?.message as string);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: order.email,
            name: order.name,
            address: {
              line1: order.address,
            },
            phone: order.phone,
          },
        },
      });

    if (paymentIntent?.status === "succeeded") {
      const orderPlaced = await postOrder(order);
      if (orderPlaced?.data) {
        setStripeCheckout(false);
        toast.success("Order placed successfully!");
        dispatch(CLEAR_CART());
        setTimeout(() => navigate("/check-out/success"), 500);
      } else if (orderPlaced?.error) {
        // @ts-ignore
        toast.error(orderPlaced?.error?.data?.message);
      }
    }
    if (paymentError) {
      setErrorMessage(paymentError?.message as string);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4 ">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      {errorMessage && (
        <span className="text-red-600 font-Untitled-Sans font-[400] my-2">
          {errorMessage}
        </span>
      )}
      <Button
        onClick={() => setLoading(true)}
        className="mt-6 font-Untitled-Sans w-full"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        {loading ? (
          <Spin style={{ color: "white" }} size="small" />
        ) : (
          `Pay $ ${totalPrice.toFixed(2)}`
        )}
      </Button>
    </form>
  );
};

export default StripeCheckoutForm;
