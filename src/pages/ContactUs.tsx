import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoMail } from "react-icons/io5";
import contactHeaderBg from "../assets/images/contact-us-header.jpg";
import officeReception from "../assets/images/office-reception.jpg";
import customerSupport from "../assets/images/customer-support.jpg";
import salesInquiry from "../assets/images/sales-inquiry.png";
import FAQs from "../assets/images/FAQs.png";
import twitter from "../assets/images/twitter.png";
import feedback from "../assets/images/feedback.png";
import instagram from "../assets/images/instagram.png";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FormEvent } from "react";

const ContactUs = () => {
  return (
    <section className="font-Untitled-Sans realtive overflow-hidden">
      <div
        className="relative bg-cover bg-fixed bg-center w-full overflow-hidden h-full"
        style={{ backgroundImage: `url('${contactHeaderBg}')` }}
      >
        <div className="w-full h-full bg-[#00000060] backdrop-blur-sm relative text-center z-[8] flex flex-col items-center md:p-28 py-10 px-6 justify-center">
          <h1
            data-aos="fade-right"
            data-aos-animation-duration="9000"
            className="text-5xl md:text-8xl mx-auto text-[#fff] selection:bg-[#ffffff66] font-semibold"
          >
            Contact Us
          </h1>
          <p
            data-aos="zoom-out"
            className="text-zinc-100 mt-2 my-4 max-w-[700px] selection:bg-[#ffffff66] "
          >
            At KeyWizards, your satisfaction is our top priority. Whether you
            have a question about our products, need assistance with an order,
            or simply want to share your feedback, we’re here to help. Our team
            is dedicated to providing you with the best possible experience, and
            we’re just a message away.
          </p>
        </div>
      </div>

      <section className="md:p-20 p-8 bg-white">
        <h3
          className="text-3xl mb-4 text-center text-custom-primary font-semibold"
          data-aos="fade-right"
        >
          Get in Touch
        </h3>
        <div className="flex lg:gap-14 md:gap-8 h-fit justify-between overflow-hidden md:flex-row flex-col items-center">
          <div
            data-aos="fade-right"
            data-aos-animation-duration="5000"
            data-aos-offset="200"
            className="border-l-[1px] md:order-1 md:pb-0 mb-12 order-2 bg-[#a09f9f17] border-zinc-500 md:p-8 p-4"
          >
            <h4 className="text-xl text-zinc-800 font-medium">
              Customer Support
            </h4>
            <span>
              For any inquiries or support, feel free to reach out to our
              customer support team. We aim to respond to all queries within 24
              hours.
            </span>
            <ul className="mt-6 flex text-custom-primary flex-col gap-4">
              <li className="flex gap-2 items-center font-[500]">
                <IoMail className="text-xl" /> support@keywizards.com
              </li>
              <li className="flex gap-2 items-center font-[500]">
                <FaPhoneAlt /> +1-800-123-4567
              </li>
              <li className="flex gap-2 items-center font-[500]">
                <GoClockFill /> Monday to Friday, 9 AM - 6 PM (EST)
              </li>
            </ul>
          </div>
          <div data-aos="zoom-out" data-aos-animation-duration="5000" className="md:order-2 order-1">
            <img src={customerSupport} alt="" className="max-w-[250px] lg:max-w-[450px]" />
          </div>
        </div>

        <div className="flex h-fit md:gap-14 gap-4 justify-between overflow-hidden md:flex-row flex-col items-center">
          <div data-aos="zoom-out" data-aos-animation-duration="5000">
            <img src={salesInquiry} alt="" className="max-w-[250px] lg:max-w-[400px]" />
          </div>

          <div
            data-aos="fade-right"
            className="border-r-[1px] text-right bg-[#a09f9f17] border-zinc-500 md:p-8 p-4"
          >
            <h4 className="text-xl text-zinc-800 font-medium">
              Sales Inquiries
            </h4>
            <span>
              If you’re interested in bulk orders, custom keyboards, or
              partnerships, our sales team is ready to assist you.
            </span>
            <ul className="mt-6 flex text-custom-primary flex-col items-end gap-4">
              <li className="flex gap-2 items-center font-[500]">
                <IoMail className="text-xl" /> sales@keywizards.com
              </li>
              <li className="flex gap-2 items-center font-[500]">
                <FaPhoneAlt /> +1-800-987-6543
              </li>
              <li className="flex gap-2 items-center font-[500]">
                <GoClockFill /> Monday to Friday, 9 AM - 5 PM (EST)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url("${officeReception}")` }}
      >
        <div
          className="flex flex-col items-center text-center selection:bg-[#ffffff3c]
           bg-[#0000007d] backdrop-blur-sm text-[#ffffffe0] md:py-36 py-20 md:px-20 px-8"
        >
          <div>
            <h1
              data-aos="fade-right"
              data-aos-animation-duration="9000"
              className="text-8xl mx-auto text-[#fff] selection:bg-[#ffffff66] font-semibold"
            >
              Visit Us
            </h1>
            <p
              data-aos="zoom-out"
              data-aos-delay="100"
              className="text-zinc-100 mt-2 my-4 max-w-[700px] selection:bg-[#ffffff66] "
            >
              While we primarily operate online, we love meeting our customers
              and partners in person. If you’re in the area, feel free to visit
              our office.
            </p>
          </div>
          <div className="mt-6 flex flex-col  items-center gap-4">
            <li
              data-aos="zoom-in"
              className="flex gap-2 items-start md:items-center font-[500]"
            >
              <FaLocationDot className="text-4xl md:text-xl" /> KeyWizards Headquarters 1234
              Mechanical Lane, Typing City, TC 56789
            </li>
            <li
              data-aos="zoom-in"
              className="flex gap-2 items-start md:items-center font-[500]"
            >
              <GoClockFill className="text-2xl md:text-xl"/> Monday to Friday, 10 AM - 4 PM (EST)
            </li>
          </div>
        </div>
      </section>

      <section className="md:p-20 p-8 md:gap-14 grid gap-4 lg:grid-cols-2 grid-cols-1">
        <div>
          <img src={FAQs} alt="" />
        </div>

        <div className="flex flex-col">
          <h3
            className="text-4xl mb-4 text-custom-primary font-semibold"
            data-aos="fade-left"
          >
            Frequently Asked Questions
          </h3>
          <span className="mb-6" data-aos="fade-left">
            Find quick answers to common questions about our products, shipping,
            and more. If you need further assistance, our support team is just a
            message away.
          </span>

          <Accordion type="single" collapsible  >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is the return policy for KeyWizards products?
              </AccordionTrigger>
              <AccordionContent>
                We offer a 30-day return policy for all our products. If you’re
                not satisfied with your purchase, you can return the item in its
                original condition for a full refund or exchange. Please ensure
                the keyboard is returned with all accessories and packaging
                intact.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" >
              <AccordionTrigger className="text-left">How long does shipping take?</AccordionTrigger>
              <AccordionContent>
                Shipping times vary depending on your location. For orders
                within the United States, standard shipping typically takes 3-5
                business days. International orders may take 7-14 business days,
                depending on the destination. You can track your order using the
                tracking number provided in your shipping confirmation email.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Do you offer international shipping?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we ship our products worldwide. Shipping fees and delivery
                times vary based on your location. Please note that
                international orders may be subject to customs duties and taxes,
                which are the responsibility of the customer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent>
                We accept a variety of payment methods, including credit/debit
                cards (Visa, MasterCard, American Express), PayPal, and Stripe.
                We also support various digital wallets such as Apple Pay and
                Google Pay. All transactions are secured with industry-standard
                encryption.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" >
              <AccordionTrigger className="text-left">
                What should I do if my keyboard arrives damaged?
              </AccordionTrigger>
              <AccordionContent>
                If your keyboard arrives damaged, please contact us immediately
                at support@keywizards.com with your order number and photos of
                the damage. We’ll arrange for a replacement or a refund as
                quickly as possible. Your satisfaction is our top priority.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                How can I stay updated on new product releases and special
                offers?
              </AccordionTrigger>
              <AccordionContent>
                To stay updated on the latest product releases, special offers,
                and promotions, sign up for our newsletter or follow us on
                social media. We regularly share updates and exclusive deals
                with our community of keyboard enthusiasts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="md:p-20 p-8  bg-white">
        <h3
          className="text-4xl mb-4 text-custom-primary font-semibold"
          data-aos="fade-left"
          data-aos-delay={400}
        >
          Stay Connected
        </h3>

        <div className="flex lg:flex-row flex-col justify-between gap-0 md:gap-14 mb-6">
          <div data-aos="fade-left"
          data-aos-delay={500}>
            <h4 className="text-xl text-zinc-800 font-medium">
              Follow Us On Socials
            </h4>
            <p className="md:w-[400px] text-zinc-500">
              We’d love to stay connected with you! Follow us on our social
              media channels for the latest updates, product launches, and
              special offers.
            </p>
          </div>
          <div  data-aos="fade-left"
          data-aos-delay={400}>
          <ul className="flex md:flex-row flex-col mt-6 md:mt-0 justify-between gap-4">
            <li>
              <a
                href="https://www.facebook.com/"
                className="border-[1px] lg:w-12 w-52 box-content rounded-full p-2 bg-white transition-all duration-500 flex items-center ease-in-out hover:w-52 overflow-hidden group"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                  alt=""
                  className="w-12"
                />
                <p className="lg:opacity-0 cursor-pointer text-blue-700 px-2 transition-opacity duration-500 delay-300 hover:underline underline lg:no-underline underline-offset-2 group-hover:opacity-100 opacity-100  font-medium">
                  fb.com/keywizards
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="border-[1px] lg:w-12 max-w-52 lg:p-2 md:pr-16 box-content rounded-full p-2 bg-white transition-all duration-500 flex items-center ease-in-out hover:w-40 overflow-hidden group"
              >
                <img src={instagram} alt="" className="w-12" />
                <p className="lg:opacity-0 cursor-pointer text-pink-700 px-2 transition-opacity duration-500 delay-300 hover:underline underline-offset-2 group-hover:opacity-100 opacity-100 underline lg:no-underline font-medium">
                  @keywizards
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                className="border-[1px] lg:w-12 max-w-52 lg:p-2 md:pr-16 box-content rounded-full p-2 bg-white transition-all duration-500 flex items-center ease-in-out hover:w-40 overflow-hidden group"
              >
                <img src={twitter} alt="" className="w-12" />
                <p className="lg:opacity-0 cursor-pointer text-zinc-700 px-2 transition-opacity duration-500 delay-300 hover:underline underline-offset-2 group-hover:opacity-100 opacity-100 font-medium underline lg:no-underline ">
                  @keywizards
                </p>
              </a>
            </li>
          </ul>
          </div>
        </div>

        <p className="text-zinc-500 text-xl mb-6">Or</p>

        <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-14 mb-6">
          <div  data-aos="fade-left"
          data-aos-delay={400}>
            <h4 className="text-xl text-zinc-800 font-medium">
              Subscribe to Our Newsletter
            </h4>
            <p className=" md:w-[400px] mt-2 text-zinc-500">
              Subscribe to our newsletter to receive the latest updates,
              exclusive offers, and insights into the world of mechanical
              keyboards, delivered straight to your inbox.
            </p>
          </div>
          <div  data-aos="fade-left"
          data-aos-delay={400} className="flex md:mt-0 mt-4 md:flex-row flex-col w-full md:gap-0 gap-4 max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url("${feedback}")` }}
      >
        <div
          className="flex flex-col items-center text-center selection:bg-[#ffffff3c]
           bg-[#0000007d] backdrop-blur-sm text-[#ffffffe0] py-20 md:py-36 px-8 md:px-20"
        >
          <h1
            data-aos="fade-left"
            className="text-4xl md:text-8xl mx-auto text-[#fff] selection:bg-[#ffffff66] font-semibold"
          >
            Feedback and Suggestions
          </h1>
          <p
            data-aos="zoom-out"
            data-aos-delay="100"
            className="text-zinc-100 mt-2 my-4 max-w-[700px] selection:bg-[#ffffff66] "
          >
            Your feedback is invaluable to us. Whether it’s a suggestion to
            improve our products or a comment on your experience with
            KeyWizards, we want to hear from you. Share your thoughts by
            emailing us at feedback@keywizards.com.
          </p>
        </div>
      </section>

      <section className="md:p-20 p-8 text-center">
        <h3
          className="text-4xl mb-2 text-custom-primary font-semibold"
          data-aos="zoom-out"
          data-aos-delay={500}
        >
          Contact Form
        </h3>
        <p data-aos="fade-up"
          data-aos-delay={500} className="md:w-[400px] mx-auto mb-8 text-zinc-500">
          Can’t find what you’re looking for? Fill out the contact form below,
          and we’ll get back to you as soon as possible
        </p>

        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            toast.message("Your message has been sent");
            const form = e.currentTarget as HTMLFormElement;
            
            form.reset();
          }}
          className="border-[1px] gap-6 grid md:grid-cols-2 grid-cols-1 bg-white border-zinc-300 p-6 md:p-8 rounded-md"
        >
          <div className="col-span-2 grid md gap-2 text-left ">
            <label
              htmlFor="title"
              className="text-zinc-700 font-medium after:content-['*'] after:text-red-500 after:ml-0.5"
            >
              Name
            </label>
            <Input
              id="title"
              type="text"
              className={`w-full`}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="grid gap-2 text-left md:col-span-1 col-span-2">
            <label
              htmlFor="title"
              className="text-zinc-700 font-medium after:content-['*'] after:text-red-500 after:ml-0.5"
            >
              Email
            </label>
            <Input
              id="title"
              type="text"
              className={`w-full`}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="grid gap-2 col-span-2 text-left">
            <label
              htmlFor="title"
              className="text-zinc-700 font-medium after:content-['*'] after:text-red-500 after:ml-0.5"
            >
              Subject
            </label>
            <Input
              id="title"
              type="text"
              className={` w-full`}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="grid gap-2 col-span-2 text-left">
            <label
              htmlFor="description"
              className="text-zinc-700 after:content-['*'] after:text-red-500 after:ml-0.5 font-medium"
            >
              Message
            </label>
            <Textarea
              id="description"
              rows={10}
              placeholder="Enter your message here"
              required
              className="min-h-32"
            />
          </div>

          <Button type="submit" className="col-span-2 mt-4">
            Send Message
          </Button>
        </form>
      </section>
    </section>
  );
};

export default ContactUs;
