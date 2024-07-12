import { useState, useEffect } from "react";
import HeroHeader from "./heroHeader";
import CustomButton from "@/components/shared/CustomButton";

const HeroContents = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 3300);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="hero-content-container text-center absolute md:top-8 top-0 md:p-10 p-4 w-full z-1">
      <HeroHeader></HeroHeader>
      <div className={`hero-text ${isVisible ? "fade-in" : ""}`}>
        <p className={` mt-4 text-lg`}>
          Enhance your typing experience with our range of high-quality
          mechanical keyboards.
        </p>
        <CustomButton text={"Shop Now"}></CustomButton>
      </div>
    </div>
  );
};

export default HeroContents;
