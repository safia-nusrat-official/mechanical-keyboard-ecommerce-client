import { Button } from "antd";
import { useState, useEffect } from "react";
import HeroHeader from "./heroHeader";

const HeroContents = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 3300);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="hero-content-container text-center absolute top-8 p-10 w-full">
      <HeroHeader></HeroHeader>
      <div className={`hero-text ${isVisible ? "fade-in" : ""}`}>
        <p className={` mt-4 text-lg`}>
          Enhance your typing experience with our range of high-quality
          mechanical keyboards.
        </p>
        <Button
          className={`mix-blend-screen hover:scale-150 hover:border-none text-black bg-white mt-6 font-[600]`}
          style={{ fontFamily: "Untitled Sans" }}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default HeroContents;
