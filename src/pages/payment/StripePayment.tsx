import { loadStripe } from "@stripe/stripe-js";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";
import { IOrder } from "@/types";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const StripePayment = ({
  order,
  setStripeCheckout
}: {
  order:IOrder,
  setStripeCheckout:React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Card className="md:m-4 m-0 font-Untitled-Sans">
      <CardHeader>
        <CardTitle>Stripe Payment</CardTitle>
        <CardDescription>
          Enter your card details to complete the payment securely through
          Stripe.
        </CardDescription>
        <div>
          <Elements
            stripe={stripePromise}
          >
            <StripeCheckoutForm 
            order={order} setStripeCheckout={setStripeCheckout}></StripeCheckoutForm>
          </Elements>
        </div>
      </CardHeader>
    </Card>
  );
};

export default StripePayment;

/**
 *<CardContent className="space-y-2">
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


      <PaymentTabs
              totalPrice={totalPrice}
              totalOrderedQuantity={totalItems}
              items={cartItems}
            ></PaymentTabs>
 *
*/
