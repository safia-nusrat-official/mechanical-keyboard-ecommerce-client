import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import heroImg from "../../../assets/images/mechanical keyboard.jpg";
import HeroContents from "./HeroContents";

AOS.init();

const HeroSection = () => {
  return (
    <section className="hero-section relative lg:h-[580px] md:h-[500px] h-[400px]  text-[#fefefe] md:overflow-hidden overflow-visible">
      <div className="hero-image-container h-full relative ">
        <div className="overlay absolute bg-[#00000048] backdrop-blur-[2px] z-1 h-full w-full"></div>
        <img
          src={heroImg}
          alt="hero-image"
          className="w-full h-full object-cover"
        />
      </div>
      <HeroContents></HeroContents>
    </section>
  );
};

export default HeroSection;
