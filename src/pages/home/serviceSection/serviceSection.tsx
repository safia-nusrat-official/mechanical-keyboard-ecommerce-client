import SectionHeading from "@/components/shared/SectionHeading";
import Aos from "aos";
import { CiBadgeDollar, CiCreditCard2, CiDeliveryTruck } from "react-icons/ci";
import { GoCheckbox } from "react-icons/go";
import { PiHeadset } from "react-icons/pi";

Aos.init();
const ServiceSection = () => {
  return (
    <section className="md:p-20 md:gap-8 items-center overflow-hidden p-10 flex md:flex-row flex-col justify-between">
      <SectionHeading mode="dark" text="What We Offer" hideInSm={false} animateFrom="right"></SectionHeading>
      <div
        data-aos=""
        className="collage gap-4 md:gap-6 grid font-medium grid-cols-2 "
      >
        <div
          data-aos="zoom-out"
          className="p-6 flex flex-col items-center text-center justify-center col-span-1 row-span-1 aspect-square rounded-md bg-blue-300
        text-blue-900"
        >
          <CiDeliveryTruck className="text-[3rem] md:text-[6rem]"></CiDeliveryTruck>
          <span className="md:text-sm text-xs">Fast and Secure Shipping</span>
        </div>
        <div
          data-aos="zoom-out"
          className="p-4 flex flex-col items-center text-center justify-center aspect-square rounded-md bg-green-300
        text-green-900"
        >
          <PiHeadset className="text-[3rem] mb-4 md:text-[6rem]"></PiHeadset>

          <span className="md:text-sm text-xs">24/7 Customer Support</span>
        </div>
        <div
          data-aos="zoom-out"
          className="p-4 col-span-1 row-span-1 flex flex-col items-center text-center justify-center aspect-square rounded-md bg-pink-300
        text-pink-900"
        >
          <CiCreditCard2 className="text-[3rem] md:text-[6rem] mb-2"></CiCreditCard2>
          <span className="md:text-sm text-xs">Secure Payment Options</span>
        </div>
        <div
          data-aos="zoom-out"
          className="p-4 flex flex-col items-center text-center justify-center aspect-square rounded-md bg-yellow-300 text-yellow-900"
        >
          <CiBadgeDollar className="text-[3rem] md:text-[6rem] mb-2"></CiBadgeDollar>
          <span className="md:text-sm text-xs">
            Special Offers and Promotions
          </span>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <SectionHeading text={"What We Offer"} hideInSm={true} mode="dark" animateFrom="left"></SectionHeading>
        <ul className="flex flex-col gap-4">
          <li
            data-aos-offset="100"
            data-aos="fade-left"
            data-aos-animation-duration="10000"
            data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos-delay="100"
            className="flex flex-col mt-4"
          >
            <div className="flex gap-2 items-center text-lg">
              <GoCheckbox className=""></GoCheckbox>
              <span className="font-medium">24/7 Customer Support</span>
            </div>
            <p className="ml-6 text-body">
              Our dedicated customer support team is available around the clock
              to assist you with any inquiries or issues.
            </p>
          </li>
          <li
            data-aos-offset="100"
            data-aos="fade-left"
            data-aos-animation-duration="10000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-delay="100"
            className="flex flex-col"
          >
            <div className="flex gap-2 items-center text-lg">
              <GoCheckbox className=""></GoCheckbox>
              <span className="font-medium">Special Offers and Promotions</span>
            </div>
            <p className="ml-6 text-body">
              Stay updated with exclusive offers, promotions, and discounts on
              top-rated mechanical keyboards and accessories.
            </p>
          </li>
          <li
            data-aos-offset="100"
            data-aos="fade-left"
            data-aos-animation-duration="10000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-delay="100"
            className="flex flex-col"
          >
            <div className="flex gap-2 items-center text-lg">
              <GoCheckbox className=""></GoCheckbox>
              <span className="font-medium">Secure Payment Options</span>
            </div>
            <p className="ml-6 text-body">
              Shop with confidence using our secure payment gateways, ensuring
              your transactions are safe and protected.
            </p>
          </li>
          <li
            data-aos-offset="100"
            data-aos="fade-left"
            data-aos-animation-duration="10000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-delay="100"
            className="flex flex-col"
          >
            <div className="flex gap-2 items-center text-lg">
              <GoCheckbox className=""></GoCheckbox>
              <span className="font-medium">Fast and Secure Shipping</span>
            </div>
            <p className="ml-6 text-body">
              Enjoy fast and secure shipping options to ensure your mechanical
              keyboard arrives safely and on time.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
