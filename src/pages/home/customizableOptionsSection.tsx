import SectionHeading from "@/components/shared/SectionHeading";
import customOptions1 from "../../assets/images/customOptions1.png";
import customOptions2 from "../../assets/images/customOptions2.png";
import customOptions3 from "../../assets/images/customOption3.png";
import customOptions4 from "../../assets/images/customOptions4.png";

const CustomizableOptionsSection = () => {
  return (
    <section className="md:p-20 p-8 text-center overflow-hidden">
      <div data-aos="fade-left">
        <SectionHeading
          mode={"dark"}
          text={"Customizable Options"}
        ></SectionHeading>
        <p className="text-zinc-500 text-[16px] max-w-[32rem] mx-auto mb-8 ">
          Personalize Your Mechanical Keyboard to Fit Your Unique Style
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-6 border-[1px] border-zinc-200 rounded-md p-6 bg-white justify-between gap-20">
        <div data-aos="zoom-out" className="flex flex-col text-left">
          <img src={customOptions1} className="w-[18rem] h-[14rem]" alt="" />
          <div className="mt-6">
            <h5 className="text-zinc-900 font-medium text-lg">Keycap Sets</h5>
            <p className="text-zinc-500 text-balance">
              Choose from a vast selection of keycap sets in different colors,
              materials, and profiles. Whether you prefer the sleek look of
              double-shot PBT keycaps or the vibrant hues of custom
              dye-sublimated designs, we've got you covered
            </p>
          </div>
        </div>
        <div data-aos="zoom-out" className="flex flex-col text-right items-end">
          <img src={customOptions2} className="w-[20rem] h-[14rem]" alt="" />
          <div className="text-right mt-6">
            <h5 className="text-zinc-900 font-medium text-lg">
              Backlighting and RGB
            </h5>
            <p className="text-zinc-500 text-balance">
              Add a splash of color to your setup with customizable backlighting
              and RGB options. Choose from a spectrum of colors and lighting
              effects to match your gaming rig or workspace aesthetic.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          className="flex flex-col items-start text-left"
        >
          <img
            src={customOptions3}
            className="w-[20rem] h-[16rem] object-contain"
            alt=""
          />
          <div className="mt-6">
            <h5 className="text-zinc-900 font-medium text-lg">Case Options</h5>
            <p className="text-zinc-500 text-balance">
              The case of your keyboard can make a big difference in both
              aesthetics and feel. Opt for different materials like aluminum,
              acrylic, or plastic, and choose from various colors and finishes.
            </p>
          </div>
        </div>
        <div data-aos="zoom-out" className="flex flex-col items-end text-right">
          <img
            src={customOptions4}
            className="w-[20rem] h-[16rem] object-contain"
            alt=""
          />
          <div className="text-right mt-6">
            <h5 className="text-zinc-900 font-medium text-lg">Custom Cables</h5>
            <p className="text-zinc-500 text-balance">
              Elevate your desk setup with custom braided cables in various
              colors and patterns. Our high-quality cables are not only durable
              but also add a touch of personality to your keyboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizableOptionsSection;
