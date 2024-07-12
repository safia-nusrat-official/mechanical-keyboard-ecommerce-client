import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import heroImg from "../../../assets/images/mechanical keyboard.jpg";
import HeroContents from "./heroText";
import HeroHeader from "./heroHeader";
import { Button } from "antd";

AOS.init();

const HeroSection = () => {
  return (
    <section
      className="hero-section relative max-h-[580px] overflow-hidden text-[#fefefe]"
      style={{ fontFamily: "Untitled Sans" }}
    >
      <div className="hero-image-container relative overflow-hidden object-contain">
        <div className="overlay absolute bg-[#00000048] backdrop-blur-[2px] z-1 h-full w-full"></div>
        <img
          src={heroImg}
          alt="hero-image"
          className="w-full object-contain object-center"
        />
      </div>
        <HeroContents></HeroContents>
    </section>
  );
};

export default HeroSection;
