import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaStripe } from "react-icons/fa6";

export const UserDetailsForm = ({
  setPaymentMethod,
}: {
  setPaymentMethod: React.Dispatch<React.SetStateAction<"cash" | "stripe">>;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>You Information</CardTitle>
        <CardDescription>
          Provide your name, email, shipping address, phone
        </CardDescription>
      </CardHeader>
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
          />
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
          />
          {errors.address && (
            <span className="text-red-500">
              {errors.address?.message as string}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="after:content-['*'] after:text-red-500 after:ml-0.5">
            Payment Method
          </label>
          <RadioGroup
            defaultValue="cash"
            onValueChange={(value: "cash" | "stripe") =>
              setPaymentMethod(value)
            }
            className="grid grid-cols-1 md:grid-cols-2 gap-4 font-Untitled-Sans"
          >
            <div className="">
              <RadioGroupItem value="cash" id="cash" className="peer sr-only" />
              <label
                htmlFor="cash"
                className="flex flex-col items-center justify-between rounded-md border-2 gap-2 border-muted bg-popover p-4 hover:bg-accent font-medium hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <CiDeliveryTruck className="text-4xl"></CiDeliveryTruck>
                Cash on Delivery
              </label>
            </div>
            <div>
              <RadioGroupItem
                value="stripe"
                id="stripe"
                className="peer sr-only"
              />
              <label
                htmlFor="stripe"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary text-8xl"
              >
                <FaStripe></FaStripe>
              </label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};
